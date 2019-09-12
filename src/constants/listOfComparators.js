const listOfComparators =
[
  {
    type: 'Accessibility',
    tag: "accessibility",
    parameters: {
      reportlevel: {
        name: "Raport Level",
        tag: "raport-level",
        values: ["ERROR", "WARN", "NOTICE"],
        default: "ERROR",
        isMandatory: false,
        description: "Violation types to be show in the report, ERROR for errors, WARN for errors and warnings, NOTICE for everything",
        current: null,
      },
      ignorenotice: {
        name: "Ignore Notice",
        tag: "ignore-notice",
        values: ["true", "false"],
        default: "true",
        isMandatory: false,
        description: "If the ignore-notice=true test status does not depend on the number of notices. If ignore-notice=false notices are treated as warnings in calculating the test status.",
        current: null,
      },
      showexcluded: {
        name: "Show Excluded",
        tag: "showExcluded",
        values: ["true", "false"],
        default: "true",
        isMandatory: false,
        description: "The flag that indicates if excluded issues",
        current: null,
      },
    },
    deps: "accessibility-collectors",
    depType: "Error",
    dropTo: "Comparators",
    group: "Comparators",
    proxy: "false",
    wiki: "https://github.com/Cognifide/aet/wiki/AccessibilityComparator",
  },
  {
    type: 'Client Side Performance',
    tag: "client-side-performance",
    parameters: null,
    deps: "clientsideperformance-collectors",
    depType: "Error",
    dropTo: "Comparators",
    group: "Comparators",
    proxy: "false",
    wiki: "https://github.com/Cognifide/aet/wiki/ClientSidePerformanceComparator",
  },
  {
    type: 'Cookie',
    tag: "cookie",
    parameters: {
      action: {
        name: "Action",
        tag: "action",
        values: ["LIST", "TEST", "COMPARE"],
        default: "LIST",
        isMandatory: false,
        description: "Violation types to be show in the report, ERROR for errors, WARN for errors and warnings, NOTICE for everything",
        current: null,
      },
      cookiename: {
        name: "Cookie Name",
        tag: "cookie-name",
        values: null,
        default: null,
        isMandatory: false,
        description: "The name of the cookie to test, applicable only for the test action",
        current: null,
      },
      cookievalue: {
        name: "Cookie Value",
        tag: "cookie-value",
        values: null,
        default: null,
        isMandatory: false,
        description: "The value of the cookie to test, applicable only for the test action",
        current: null,
      },
      showmatched: {
        name: "Show Matched",
        tag: "showMatched",
        values: ["true", "false"],
        default: true,
        isMandatory: false,
        description: "Works only in the compare mode. The flag that says if matched cookies should be displayed in the report or not. By default set to true.",
        current: null,
      },
    },
    deps: "cookie-collectors",
    depType: "Error",
    dropTo: "Comparators",
    group: "Comparators",
    proxy: "false",
    wiki: "https://github.com/Cognifide/aet/wiki/CookieComparator",
  },
  {
    type: 'JSErrors',
    tag: "js-errors",
    parameters: null,
    deps: "jserrors-collectors",
    depType: "Error",
    dropTo: "Comparators",
    group: "Comparators",
    proxy: "false",
    wiki: "https://github.com/Cognifide/aet/wiki/JSErrorsComparator",
  },
  {
    type: 'Screen',
    tag: "screen",
    parameters: {
      comparator: {
        name: "Comparator",
        tag: "comparator",
        values: ["layout"],
        default: "layout",
        isMandatory: true,
        description: "Layout Comparator is responsible for collecting compared screenshot.",
        current: "layout",
      },
      pixelthreshold: {
        name: "Pixel Threshold",
        tag: "pixelThreshold",
        values: null,
        default: null,
        isMandatory: false,
        description: "The value to set the error threshold in pixels e.g if difference between photos is smaller or equal to pixel threshold, the test will pass.",
        current: null,
      },
      percentagethreshold: {
        name: "Percentage Threshold",
        tag: "percentageThreshold",
        values: null,
        default: null,
        isMandatory: false,
        description: "The value to set the error threshold in percentages e.g if difference between photos is smaller or equal to pixel threshold, the test will pass.",
        current: null,
      },
    },
    deps: "screen-collectors",
    depType: "Error",
    dropTo: "Comparators",
    group: "Comparators",
    proxy: "false",
    wiki: "https://github.com/Cognifide/aet/wiki/LayoutComparator",
  },
  {
    type: 'Source',
    tag: "source",
    parameters: {
      comparator: {
        name: "Comparator",
        tag: "comparator",
        values: ["source"],
        default: "source",
        isMandatory: true,
        description: "See wiki for specific information",
      },
      compareType: {
        name: "Compare Type",
        tag: "compareType",
        values: ["content", "markup", "allFormatted", "all"],
        default: "all",
        isMandatory: false,
        description: "See wiki for specific information",
      },
    },
    deps: "source-collectors",
    depType: "Error",
    dropTo: "Comparators",
    group: "Comparators",
    proxy: "false",
    wiki: "https://github.com/Cognifide/aet/wiki/SourceComparator",
  },
  {
    type: 'StatusCodes',
    tag: "status-codes",
    parameters: {
      filterrange: {
        name: "Filter Range",
        tag: "filterRange",
        values: null,
        default: null,
        isMandatory: false,
        description: "Defines range of status codes that should be processed, example values: [400, 500]. Mandatory if filterCodes is not set",
        current: null,
      },
      filtercodes: {
        name: "Filter Codes",
        tag: "filterCodes",
        values: null,
        default: null,
        isMandatory: false,
        description: "List of status codes that should be processed, example values: [400, 401, 404]. Mandatory if filterRange is not set",
        current: null,
      },
      showexcluded: {
        name: "Show Excluded",
        tag: "showExcluded",
        values: ["true", "false"],
        default: "true",
        isMandatory: false,
        description: "Flag that says if excluded codes ",
      },
    },
    deps: "statuscodes-collectors",
    depType: "Error",
    dropTo: "Comparators",
    group: "Comparators",
    proxy: "false",
    wiki: "https://github.com/Cognifide/aet/wiki/StatusCodesComparator",
  },
  {
    type: 'Source W3CHTML5',
    tag: "source",
    parameters: {
      comparator: {
        name: "Comparator",
        tag: "comparator",
        values: ["w3c-html5"],
        default: "w3c-html5",
        isMandatory: true,
        description: "See wiki for specific information",
      },
      ignorewarnings: {
        name: "Ignore Warnings",
        tag: "ignore-warnings",
        values: ["true", "false"],
        default: null,
        isMandatory: false,
        description: "If set to true the test status does not depend on the warnings amount.",
        current: null,
      },
    },
    deps: "source-collectors",
    depType: "Error",
    dropTo: "Comparators",
    group: "Comparators",
    proxy: "false",
    wiki: "https://github.com/Cognifide/aet/wiki/W3CHTML5Comparator",
  },
];

export default listOfComparators;