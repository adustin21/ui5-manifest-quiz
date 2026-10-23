(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const els = {
    error: $("error"),
    setup: $("setup"),
    count: $("count"),
    maxCount: $("max-count"),
    shuffle: $("shuffle"),
    start: $("start"),
    quiz: $("quiz"),
    progressText: $("progress-text"),
    progressBar: $("progress-bar"),
    name: $("item-name"),
    toggle: $("toggle"),
    desc: $("item-desc"),
    options: $("options"),
    feedback: $("feedback"),
    next: $("next"),
    result: $("result"),
    score: $("score"),
    review: $("review"),
    restart: $("restart"),
  };

  let categories = [];
  let allQuestions = [];
  let questions = [];
  let answers = [];
  let current = 0;

  function validate(data) {
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return [
        "quizData must be an object like { Category: [{ name, description }] }.",
      ];
    }

    const errors = [];
    Object.entries(data).forEach(([category, items]) => {
      if (!Array.isArray(items)) {
        errors.push(`"${category}" must be an array.`);
        return;
      }
      items.forEach((item, i) => {
        if (
          !item ||
          typeof item.name !== "string" ||
          typeof item.description !== "string"
        ) {
          errors.push(
            `"${category}"[${i}] needs string "name" and "description".`,
          );
        }
      });
    });

    if (Object.keys(data).length < 2)
      errors.push("Add at least two categories.");
    if (
      !Object.values(data).some(
        (items) => Array.isArray(items) && items.length > 0,
      )
    ) {
      errors.push("Add at least one question.");
    }
    return errors;
  }

  function buildQuestions(data) {
    return Object.entries(data).flatMap(([category, items]) =>
      items.map((item) => ({
        name: item.name,
        description: item.description,
        category,
      })),
    );
  }

  function shuffle(list) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function show(section) {
    const sections = { setup: els.setup, quiz: els.quiz, result: els.result };
    Object.entries(sections).forEach(([key, node]) => {
      node.hidden = key !== section;
    });
  }

  function setDescriptionOpen(open) {
    els.desc.hidden = !open;
    els.toggle.setAttribute("aria-expanded", String(open));
  }

  function showSetup() {
    els.count.max = allQuestions.length;
    els.count.value = allQuestions.length;
    els.maxCount.textContent = allQuestions.length;
    show("setup");
  }

  function startQuiz() {
    let count = parseInt(els.count.value, 10);
    if (!Number.isFinite(count) || count < 1) count = allQuestions.length;
    count = Math.min(count, allQuestions.length);

    const pool = els.shuffle.checked
      ? shuffle(allQuestions)
      : allQuestions.slice();
    questions = pool.slice(0, count);
    answers = questions.map(() => null);
    current = 0;

    show("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const q = questions[current];

    els.progressText.textContent = `Question ${current + 1} of ${questions.length}`;
    els.progressBar.style.width = `${(current / questions.length) * 100}%`;
    els.name.textContent = q.name;
    els.desc.textContent = q.description;
    setDescriptionOpen(false);

    els.feedback.textContent = "";
    els.feedback.className = "feedback";

    els.options.innerHTML = "";
    categories.forEach((category) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.dataset.category = category;
      btn.textContent = category;
      btn.addEventListener("click", () => choose(category));
      els.options.appendChild(btn);
    });

    els.next.textContent =
      current === questions.length - 1 ? "See results" : "Next";
    els.next.disabled = true;
  }

  function choose(category) {
    if (answers[current] !== null) return;

    const q = questions[current];
    const correct = category === q.category;
    answers[current] = category;

    els.options.querySelectorAll(".option").forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.category === q.category) btn.classList.add("correct");
      if (btn.dataset.category === category && !correct)
        btn.classList.add("wrong");
    });

    els.feedback.textContent = correct
      ? "Correct!"
      : `Not quite. It belongs to "${q.category}".`;
    els.feedback.classList.add(correct ? "ok" : "bad");
    els.next.disabled = false;
  }

  function next() {
    if (answers[current] === null) return;

    if (current < questions.length - 1) {
      current++;
      renderQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    const correctCount = questions.filter(
      (q, i) => answers[i] === q.category,
    ).length;
    const percent = Math.round((correctCount / questions.length) * 100);

    els.progressBar.style.width = "100%";
    els.score.textContent = `${correctCount} / ${questions.length} correct (${percent}%)`;

    els.review.innerHTML = "";
    questions.forEach((q, i) => {
      const isCorrect = answers[i] === q.category;
      const li = document.createElement("li");
      li.className = isCorrect ? "ok" : "bad";

      const title = document.createElement("strong");
      title.textContent = q.name;

      const detail = document.createElement("span");
      detail.textContent = isCorrect
        ? ` - ${q.category}`
        : ` - you chose "${answers[i]}", correct: "${q.category}"`;

      li.append(title, detail);
      els.review.appendChild(li);
    });

    show("result");
  }

  function init() {
    const errors = validate(quizData);
    if (errors.length) {
      els.error.textContent = errors.join(" ");
      els.error.hidden = false;
      els.start.disabled = true;
      return;
    }

    categories = Object.keys(quizData);
    allQuestions = buildQuestions(quizData);

    els.start.addEventListener("click", startQuiz);
    els.toggle.addEventListener("click", () =>
      setDescriptionOpen(els.desc.hidden),
    );
    els.next.addEventListener("click", next);
    els.restart.addEventListener("click", showSetup);

    showSetup();
  }

  init();
})();
