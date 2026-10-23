// Parsed from https://help.sap.com/docs/SAPUI5/b2f662dd9d7a4ec680056733050b4d34/be0cf40f61184b358b5faedaec98b2da.html?version=1.153

// Helper script:
// JSON.stringify(Array.from(document.getElementsByTagName('table')).slice(1).reduce((acc, curr) => {acc[curr.closest('section').querySelector('h2').innerText] = Array.from(curr.getElementsByTagName('td')).reduce((acc, currVal, currIndex) => (currIndex % 2 === 0 ? acc.push({ name: currVal.textContent.trim() }) : (acc.at(-1).description = currVal.textContent.trim()), acc), []); return acc}, {}))
//  replace \\n and \\" with \n and \" respectively, then copy the output to this file

const quizData = {
  "No Namespace": [
    { name: "start_url", description: "Start page of your app, if available" },
    { name: "$schema", description: "JSON schema URI" },
    {
      name: "_version",
      description:
        "On root level (no namespace): Describes the manifest format version (mandatory). Needs to be updated when migrating to a new manifest format version, see Migrating from Component Metadata to Manifest\nInside namespace: Describes the namespace format version (optional from version 1.38 on)",
    },
  ],
  "sap.app": [
    {
      name: "id",
      description:
        'This is a mandatory attribute that must be provided in dot notation and specifies a \nunique ID for the project within the system. It serves as a \nreference point for most operations involving the manifest. For \nexample, it must be specified in the target mapping when \nconfiguring a Launchpad App Descriptor in an ABAP system.When developing an app or a reuse component, it must match the \nnamespace provided in the corresponding \nComponent.jsIf, for example, a module is instantiated there as follows:return UIComponent.extend( "sap.ui.demo.walkthrough.Component ", { \n \n      metadata : { \n         manifest:  "json " \n      }, \n   ... \nthen its id would be \nsap.ui.demo.walkthroughIf the manifest belongs to an app variant of an existing application (the file nameis \nmanifest.appdescr_variant), sap.app/id is the \nID of this app variant. The ID of the underlying base \napplication is then provided in \nsap.ui5/componentName. Note \nThe ID must not exceed 70 characters. It must be unique. This is checked \nin consistency checks, for example for the SAPUI5 application index, which return an error in case of \nduplicate IDs; see SAPUI5 Application Index.In case of sap.app/type=application, the \nsap.app/id corresponds to the \nid of the UI5 component.',
    },
    {
      name: "type",
      description:
        "A mandatory attribute. The following values are possible: \napplication: use if your manifest.json describes a \nUI5 \napplication. For an example how to \nuse a manifest.json for UI5 \napplications, see the Walkthrough Tutorial, Step 10: Descriptor for Applications. \ncomponent: use if your \nmanifest.json describes a \nreuse component that is used in \nseveral apps. For further reuse component-specific \nconfiguration options, see Manifest for Components (Inside Libraries). \nlibrary: use if your \nmanifest.json describes a \nUI5 library. For further \nlibrary-specific configuration options, see Manifest for Libraries. \ncard: use if your \nmanifest.json describes a \nUI5 card. For further card-specific configuration options, \nsee Integration \nCards.",
    },
    {
      name: "i18n",
      description:
        "The i18n property is an optional attribute \nand contains one of the following:  \nA URL string to the properties file that contains the text symbols for the manifest; \nthe URL is interpreted relative to the \nmanifest. \nNote \nThe path to the i18n file must not exceed 100 \ncharacters. \n \nAn object that has been defined as described in Supported Locales and Fallback Chain and \nTerminologies.Note \nThe sap.app/i18n section only supports terminologies for Components. \nLibrary manifests do not support additional \nterminologies. \nIf the manifest contains placeholders in {{...}} \nsyntax, but no i18n attribute has been \nprovided, the default value \ni18n/i18n.properties is used to request a \nResourceBundle.",
    },
    {
      name: "applicationVersion",
      description:
        "Mandatory version of the app (semantic version with the following \nformat \nmajor.minor.patch)",
    },
    {
      name: "embeds",
      description:
        "Array of relative paths to the nested \nmanifest.json files; attribute is mandatory \nif a nested manifest.json exists",
    },
    {
      name: "embeddedBy",
      description:
        "Relative path back to the manifest.json file of \nan embedding component or library; attribute is mandatory for a \nnested manifest.json",
    },
    {
      name: "title",
      description:
        "Mandatory attribute; to make this property language dependent \n(recommended), use a key in double curly brackets: \n{{key}}",
    },
    {
      name: "subTitle",
      description:
        "Subtitle; to make this property language dependent (recommended), \nuse a key in double curly brackets: {{key}}",
    },
    {
      name: "shortTitle",
      description:
        "Short version of the title; to make this property language \ndependent (recommended), use a key in double curly brackets: \n{{key}}",
    },
    {
      name: "info",
      description:
        "Needed for CDM (Common Data Model) conversion of tiles; to make \nthis property language dependent (recommended), use a key in \ndouble curly brackets: {{key}}",
    },
    {
      name: "description",
      description:
        "Description; to make this property language dependent \n(recommended), use a key in double curly brackets: \n{{key}}",
    },
    {
      name: "tags",
      description:
        'Contains the following: \nAn array of \nkeywords; \neither text or a language-dependent entry to be \nspecified via {{…}} syntax, for example \n "keywords ": \n[ "{{keyWord1}} ", "{{keyWord2}} "]. \nAn array of \ntechnicalAttributes \n(general technical attributes, for example, technical \ncatalog, upper case and language-independent \nattributes).',
    },
    {
      name: "ach",
      description:
        "Application component hierarchy (SAP's component names for bug \nreports); attribute is mandatory for SAP apps, but is not used \nso far for apps developed outside SAP",
    },
    {
      name: "dataSources",
      description:
        'Unique key/alias for specifying the used data sources; contains \nthe following information: \nuri: Mandatory relative URL in the \ncomponent; takes embeddedBy into \naccount, if filled, or the server absolute of the data \nsource, for example \n "/sap/opu/odata/snce/PO_S_SRV;v=2/ ". \nuri should always be given in lower \ncase. \ntype: Supported types: \nOData (default) \nODataAnnotation \nINA \nXML \nJSON \nFHIR \nhttp \nWebSocket \n \ncustomType (As of 1.77): \ntrue/false; if \ntrue, there is no validation on the \ntype attribute \nsettings: Data source type-specific \nattributes (key, value pairs), which are: \nodataVersion: 2.0 (default), \n4.0  \nlocalUri: Relative URL to local \nmetadata document or annotation URI  \nannotations: Array of \nannotations which references an existing data \nsource of type ODataAnnotation \nunder sap.app/dataSources \nmaxAge: Indicates the number \nof seconds the client is willing to accept with \nregard to the age of the data that is \nrequested \nobjects: Dictionary of \n(catalog) objects offered by the INA datasource \n(as of 1.92) consisting of: \nobjectName: Mandatory CDS \nview name / analytical query name \nobjectType - mandatory type \nof object (2C<DDICNAME> or \nCDSViewName); values: \nquery, \ncdsprojectionview, \nview, \ninamodel \npackageName: Name of the \npackage \nschemaName: Name of the \nschema',
    },
    {
      name: "cdsViews",
      description:
        "Array of directly used CDS viewsThis attribute is optional and only added if used via INA \nprotocol directly, not if used via OData service.",
    },
    {
      name: "offline",
      description:
        "Indicates whether the app is running offline; default is \nfalse (online)",
    },
    {
      name: "sourceTemplate",
      description:
        "If an app has been generated from a template, this attribute is \nfilled automatically by the generation tool: \nid: Mandatory ID of the template from \nwhich the app was generated \nversion: Mandatory version of the \ntemplate from which the app was generated \ntoolsId: ID generated by the tool",
    },
    {
      name: "openSourceComponents",
      description:
        "Array of directly used open source libraries for documentation \npurposes; not used when open source libraries are used via SAPUI5 capsulation \nname: Mandatory name of the open source \ncomponent \nversion: Required if the open source \ncomponent is part of the app; not required if the open \nsource component is part of the SAPUI5 dist layer \npackagedWithMySelf: Indicates if the \nopen source component is part of the app \n(true) or not \n(false)",
    },
    {
      name: "provider",
      description:
        "Name of the provider that owns the application. Current supported \nenum value is sfsf.",
    },
    {
      name: "crossNavigation",
      description:
        "Cross-navigation for specifying inbounds and outbounds \nscopes: Scope of a sitesapSite \ninbounds: Unique key or alias to specify \ninbounds (mandatory); contains: \nsemanticObject (mandatory) \naction (mandatory) \nicon: Used to overwrite \nsap.ui/icons/icon \ntitle: Used to overwrite \nsap.app/title (to make this \nproperty language dependent (recommended), use a \nkey in double curly brackets: \n{{key}}) \nsubTitle: Used to overwrite \nsap.app/subTitle (to make this \nproperty language dependent (recommended), use a \nkey in double curly brackets: \n{{key}}) \nshortTitle: Used to overwrite \nsap.app/shortTitle (to make this \nproperty language dependent (recommended), use a \nkey in double curly brackets: \n{{key}}) \ninfo: Additional information on \nthe title; to make this property language \ndependent (recommended), use a key in double curly \nbrackets: {{key}} \ndisplayMode: \n<ContentMode or \nHeaderMode> Display mode for \nan inbound which specifies what kind of tile is \ndisplayed. A static tile can be displayed in \ncontent mode or header mode. The tile in header \nmode is a text only tile without an icon which \nallows longer title and subtitle. \nhideLauncher \n(true/false): \nIndicates that an inbound must not be represented \nas a tile/link \nindicatorDataSource; specifies \nthe data source; contains: \ndataSource: reference to \nsap.app/dataSources \n(mandatory) \npath: Relative path to \nsap.app/dataSources uri \n(mandatory) \nrefresh: Defines the refresh \ninterval \n \ndeviceTypes: Contains objects \nwith device types on which the app is running; if \nempty, use the default from \nsap.ui/deviceTypes; the following \ndevice types can be defined \n(true/false): \ndesktop \ntablet \nphone \n \nsignature: Specifies the \nsignature; contains: \nparameters (mandatory): \nContains parameter names with the following \ninformation: \nrequired \n(true/false) \nfilter: Represents the filter \nonly if the input parameter matches the filter; \nwith a mandatory value and \nformat attribute ( \"plain \", \n \"regexp \",  \"reference \") \ndefaultValue: Specifies the \ndefault value; has mandatory attributes \nvalue (depending on the format \nthis is a verbatim default value) and \nformat ( \"plain \",  \"reference \"). If \nthe format is  \"reference \", the \nsyntax for the value is as \nfollows: \n \"UserDefault.<parameterName> \" \nfor single-value parameters, \n \"UserDefault.extended.<parameterName> \" \nfor sets of values and value ranges, or \n \"User.env.<parameterName> \" \nfor supported user-specific settings. \nrenameTo: Used for parameter \nmapping to specify the parameter name in legacy \nABAP applications, for example, \nRF05L_BUKRS for the \nCompanyCode parameter \nlauncherValue: Represents a \nvalue to be used when creating an tile intent for \nthis inbound with value and format ( \"plain \", \n \"array \") \n \nadditionalParameters \n(mandatory): Indicates how additional parameters \nto the declared signature are handled; values can \nbe, for example,  \"ignored \",  \"notallowed \", \n \"allowed \" \n \n \noutbounds: Specifies outbounds with a \nunique key or alias to describe intents that can be \ntriggered from the application to navigate \ncontaining: \nsemanticObject (mandatory); \nrepresents a business entity (such as \n'Employee') \naction (mandatory); represents \nthe action to perform on the business entity (such \nas 'display') \nparameters of navigation \nintents: Specifies the parameter name \nvalue: parameters of \nnavigation intents generated or triggered by the \napplication, with: \na value; verbatim value (when \n'plain' format is used), or a \npattern (when 'regexp' format is \nused), or a value coming from a UI5 model (when \n'binding' format is used), or a \nUser Default reference (when \n'reference' format is used) and \na \nformat; indicates how \nvalue is to be interpreted: \n'plain': \n'value' is taken as a literal \nstring value. \n'reference': \n'value' is a reference to a \nparameter maintained in the SAP Fiori launchpad (such as \n'UserDefault.CostCenter'. The \nparameter value is used on the outbound intent \nparameter. \n'regexp': 'value' matches the specified pattern. \n'binding': 'value' is a binding path. \nThe value from the model at the specified binding path will be used on the \noutbound intent parameter. \n \n \nrequired: Indicator whether \nparameter is required (true, \nfalse) \n \nadditionalParameters: Indicates \nwhether additional context parameters are to be \nused: \nignored: Parameters are not \nused \nallowed: Parameters are passed \non to application",
    },
    {
      name: "resources",
      description:
        "Relative URL as a reference to a file (naming convention is \nresources.json) that contains a list of all \nresources needed by the app (all resources inside the app); the \nfile is generated in an \nSAP Fiori tools (in SAP Business Application Studio) build step.For a description of resources.json, see The resources.json File.",
    },
  ],
  "sap.ui": [
    {
      name: "technology",
      description:
        "A mandatory attribute that specifies the UI technology; value is \nUI5",
    },
    {
      name: "icons",
      description:
        "Contains object with app-specific icons, which are: \nicon: Icon of the app, can be chosen \nfrom Icon Explorer \n. \nfavIcon: ICO file to be used inside the \nbrowser and for desktop shortcuts \nNote \nfavIcon is not set \nautomatically by the framework. The icons can be set \nmanually using the \nsap/ui/util/Mobile module and the \nsetIcons function. \nphone: 120x120 pixel version for \niPhones with low pixel density \nphone@2: 180x180 pixel version for \niPhones with high pixel density \ntablet: 152x152 pixel version for iPads \nwith low pixel density \ntablet@2: 167x167 pixel version for \niPads with high pixel density",
    },
    {
      name: "deviceTypes",
      description:
        "Mandatory; contains objects with device types on which the app is \nrunning, such as: \ndesktop: Indicator for whether desktop \ndevices are supported, true, \nfalse \ntablet: Indicator for whether tablet \ndevices are supported, true, \nfalse \nphone: Indicator for whether phone \ndevices are supported, true, \nfalse",
    },
    {
      name: "fullWidth",
      description:
        "Indicates whether SAP Fiori launchpad shall render the target \napplication utilizing the full width of the viewport \n(true) or not (false). For \nmore information, see Letterboxing.Note \nThis parameter is currently subject to SAP Fiori \nlaunchpad only and has no effect on standalone or SAP \nFiori elements applications. Standalone applications can \nuse sap.m.Shell to restrict the \napplication width.",
    },
  ],
  "sap.ui5": [
    {
      name: "resources",
      description:
        "Specifies additional css and js \nresources of the Component.CSS files are added to the head of the HTML page as a link tag. \nJavaScript files are loaded by the require \nmechanism.Two settings can be defined per resource: \nuri (mandatory): URLs are resolved \nrelative to the Component, taking the \nembeddedBy setting into account (if \nfilled). \nid (optional): Only for \ncss resources; the id for a CSS \nfile's <link> element. \nNote \nSince 1.94 the usage of js resources is \ndeprecated. Please use regular dependencies \ninstead.",
    },
    {
      name: "dependencies",
      description:
        "Mandatory; specifies the external dependencies that are loaded by \nthe SAPUI5 core during the initialization phase of the component and \nused afterwards. These are the following libraries or \ncomponents: \nminUI5Version: Mandatory; Minimum version of SAPUI5 that \nyour component requires; this information ensures that the features of the SAPUI5 runtime version of the component \nare available. This must be either a specific version or an array of versions where each major version \ncan only be included once. If you specify an array that contains more than one version, and if version \n1 is included, it must be at least 1.120.x. As SAPUI5 does not currently enforce use of \nthe correct version, the minUI5Version is used for information purposes only. If the \nminimum SAPUI5 version criteria is not \nfulfilled, a warning is issued in the console log. \nlibs: ID (namespace) of the libraries that the SAPUI5 core \nshould load for use in the component. If your app requires a minimum version of the lib, specify the \nminVersion for information purposes. Specify lazy to \nindicate that the lib shall be loaded lazily. \ncomponents: ID (namespace) of the components that the SAPUI5 core should load for use in your component. If your app requires a minimum version of the \ncomponent, specify the minVersion for information purposes. Specify lazy: \ntrue to indicate that the component shall be loaded lazily. \nFor more information, see Manifest Dependencies to Libraries and Components.",
    },
    {
      name: "componentUsages",
      description:
        "Specifies the used components with the a unique key/alias. \nContains the following: \nname: Mandatory name of the reuse \ncomponent \nsettings: Settings of the component \ncomponentData: Component data of the \ncomponent \nlazy: Indicates whether the component \nusage should be lazily loaded. Default value: \ntrue \nFor more information, see: Component Instantiation Guide.",
    },
    {
      name: "models",
      description:
        "Note \nFor component manifests only. Libraries can not define models.Defines models that should be created or destroyed along the \ncomponent's lifecycle. The key represents the model name. Use an \nempty string ( \" \") for the default model. \ntype: Model class name  \nuri: Relative URL in the component, \ntaking embeddedBy into account if \nfilled, or server for absolute model  \nsettings: Object that is passed to the \nmodel constructor.Example \nYou can overwrite the default binding mode with \nthe defaultBindingMode attribute \n(enumeration of type \nsap.ui.model.BindingMode, with \nvalues. Default, \nOneTime, \nOneWay, \nTwoWay). For OData models \nconstructor see the following: \nsap.ui.model.odata.v2.ODataModel \nsap.ui.model.odata.v4.ODataModel \nFor ResourceModel constructor see: \nsap.ui.model.resource.ResourceModel \nThe attribute enhanceWith can be specified with bundleUrl, \nbundleUrlRelativeTo (either component (default) or \nmanifest) or bundleName to provide a list of additional \nresource bundle configurations to enhance the ResourceModel with. Additional \nattributes can be found in Supported Locales and Fallback Chain and Terminologies. \ndataSource: String of key or alias from \nsap.app dataSources to reference an \nexisting data source; the type, \nuri and settings \nproperties are set according to the data source's \ntype, uri and \nsettings (if not already defined). \nIf the type under sap.app dataSources \nis OData, an OData Model V2 is created \nautomatically. If you need an OData Model V1, specify \nthe type as well.  \npreload: Optional; Boolean with \ntrue, false \n(default)Defines whether or not the model is initialized \n(preloaded) before the component instance is created \nand while loading the component preload and its \ndependencies. For more information, see Manifest Model Preload.",
    },
    {
      name: "rootView",
      description:
        "Specifies the root view that shall be opened; can be the view \nname as a string for XML views, or the view configuration object \nwith viewName for the view name as a string \n(see sap.ui.core.mvc.View.create) and \ntype for the type (enumeration of sap.ui.core.mvc.ViewType), id, \nasync, and other properties of \nsap.ui.core.mvc.view.",
    },
    {
      name: "autoPrefixId",
      description:
        "true, false (default), Enables the auto prefixing for the \nUIComponent for IDs of ManagedObjects (controls or elements) \nwhich are created in the context of the \ncreateContent function, or any other \ninvocation of the \nComponent.prototype.runAsOwner() function \n(for example a component's router uses this method when creating \nnew views).In former SAPUI5 releases this prefixing of the ID needed to be done with \noComponent.createId by overwriting the \nmethod getAutoPrefixId. The same can now be \nachieved declaratively by setting autoPrefixId \nto true.",
    },
    {
      name: "handleValidation",
      description:
        "Possible values: true or false \n(default); used to enable or disable validation handling by the \nmessage manager for this component, see Error, Warning, and Info Messages",
    },
    {
      name: "config",
      description:
        "Static configuration; specify the name-value pairs that you need \nin your component.",
    },
    {
      name: "routing",
      description:
        "Provides configuration parameters for route and router, see Routing and Navigation",
    },
    {
      name: "extends",
      description:
        "Used to extend another component. \ncomponent: ID (namespace) of the \ncomponent being extended \nminVersion: Specifies the minimum \nversion of the component being extended, for information \npurposes if your app requires a minimum version of the \ncomponent \nextensions: Component or view \nextensions, which enable you to replace and extend views \nand controllers and also to modify the views, see Extending Apps",
    },
    {
      name: "contentDensities",
      description:
        "Mandatory; contains an object with the content density modes that \nthe app supports, see Content Densities \ncompact: Mandatory; indicates whether \ncompact mode is supported (true, \nfalse) \ncozy: Mandatory; indicates whether cozy \nmode is supported (true, \nfalse)",
    },
    {
      name: "resourceRoots",
      description:
        'Map of URL locations keyed by a resource name prefix; only \nrelative paths inside the component are allowed and no  ".. " \ncharactersThis attribute is intended for actual sub-packages of the \ncomponent only, meaning that it must not be used for the \ncomponent namespace itself.Note \nWhen loading with manifest first (by using the \nproperty manifest), the \nresourceRoots are evaluated before the \ncomponent controller is loaded. Otherwise, the defined \nresource roots will be registered after the component \ncontroller is loaded and do not affect the modules being \ndeclared as dependencies in the component controller.',
    },
    {
      name: "componentName",
      description:
        "An optional attribute that only has to be provided if your \nproject is a variant of an existing application. In this case \nthe componentName has to contain the \nsap.app/id of the existing application \nwhich is the basis of your variant.",
    },
    {
      name: "library/i18n",
      description:
        "Note \nFor library manifests only.Determines whether the library contains an i18n resource. The value can be either a boolean, a string, or an object.A string value represents a bundle URL. Relative URLs are always resolved to the library origin. If no value is set, the default \nmessagebundle.properties file is loaded.An object value can contain additional resource bundle configuration, e.g. terminologies and supported locales. For the supported features \nand for sample definitions, see the respective entries at Terminologies \n(without bundleUrlRelativeTo) and Supported Locales and Fallback Chain .Note \nThis attribute is beneficial if the name of the main resource bundle (properties file) used by your UI5 \nlibrary differs from the default name messagebundle.properties",
    },
    {
      name: "flexEnabled",
      description:
        "Indicates whether the app is enabled for adaptation via SAPUI5 \nflexibility (for example, using stable IDs); possible values are \ntrue, false or \nundefined (default)For more information, see SAPUI5 Flexibility: Enable Your App for UI Adaptation.",
    },
    {
      name: "commands",
      description:
        "Specifies provided commands with a unique key/alias. \nContains: \nshortcut: String that describes a key \ncombination. When the user presses the key combination, \nthe command is triggered. \nThe name of the command that contains the shortcut definition acts as a \nprerequisite for using the command property of \nthe sap.ui.core.CommandExecution module. For more information, see the API Reference: \nsap.ui.core.CommandExecution.",
    },
    {
      name: "flexExtensionPointEnabled",
      description:
        "Indicates whether SAPUI5 \nflexibility extension points are enabled for the corresponding \napplication variant; possible values are: true, \nfalse; filled automatically during app \nvariant merge.",
    },
  ],
  "sap.platform.abap": [
    {
      name: "uri",
      description:
        "Specifies the app's URI in the ABAP system, for example \n/sap/bc/ui5_ui5/sap/appName; filled during \ndeployment.",
    },
  ],
  "sap.platform.hcp": [
    {
      name: "uri",
      description:
        'Specifies the URI inside the SAP Business Technology Platform HTML5 application; filled during deployment, default is \n " "',
    },
    {
      name: "providerAccount",
      description:
        "Specifies the name of the provider account; filled during \ndeployment",
    },
    {
      name: "appName",
      description:
        "Specifies the name of the deployed HTML5 application; filled \nduring deployment",
    },
    {
      name: "appVersion",
      description:
        "Specifies the version of the deployed HTML5 application; filled \nduring deployment",
    },
  ],
  "sap.fiori": [
    {
      name: "registrationIds",
      description:
        "Array of registration IDs, for example, the SAP Fiori IDs \nfor SAP Fiori \napps",
    },
    {
      name: "archeType",
      description:
        "Mandatory archetype of the app, possible values \ntransactional, analytical, \nfactsheet, reusecomponent, \nfpmwebdynpro, \ndesignstudio",
    },
    {
      name: "abstract",
      description:
        "Indicates whether an app is an abstract (generic) app, which may not used directly, but \nneeds to be specialized in the SAP Fiori launchpad \ncontent (as of 1.87). Please note: This attribute will not be \ninherited by app variants, for example, based on an adaptation \nproject.",
    },
    {
      name: "cloudDevAdaptationStatus",
      description:
        "Release status for the developer adaptation in the cloud. The supported types are released, deprecated, \nobsolete, no value means not released (as of 1.110.0).",
    },
  ],
  "sap.card": [
    {
      name: "type",
      description:
        "Describes the card type; possible values are \nlist and analytical",
    },
    { name: "header", description: "Specifies the card's header area" },
    {
      name: "content",
      description: "Specifies the type-dependent card content",
    },
  ],
};
