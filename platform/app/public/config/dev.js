/** @type {AppTypes.Config} */

// Local development configuration.
//
// This is the default config for the dev server (`pnpm run dev`, `dev:fast`,
// `start`). It is intentionally kept at parity with config/netlify.js (the
// public demo deploy): every data source is enabled, the `?customization=` URL
// feature is ON via `customizationUrlPrefixes`, and the same startup
// `customizationService` modules are loaded — so the whole app, including
// customizations, can be exercised locally exactly as it runs on the demo.
// The locked-down config/default.js is what a plain production build emits
// instead.
window.config = {
  name: 'config/dev.js',
  routerBasename: null,
  whiteLabeling: {},
  extensions: [],
  modes: [],
  customizationService: [
    '@ohif/extension-default.customizationModule.theme',
    {
      'studyBrowser.studyMode': {
        $set: 'primary', // or recent
      },
    },
  ],

  // URL-driven customizations (?customization=). The `default` prefix (no
  // slashes) is used for values without a leading slash; every other prefix
  // must start AND end with a slash and matches the leading `/segment/` of the
  // value. Files are fetched and parsed as JSONC data — never executed.
  // e.g. ?customization=tools/ctPresets  ->  ./customizations/tools/ctPresets.jsonc
  customizationUrlPrefixes: {
    default: './customizations/',
  },

  showStudyList: true,
  // some windows systems have issues with more than 3 web workers
  maxNumberOfWebWorkers: 3,
  // below flag is for performance reasons, but it might not work for all servers
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  experimentalStudyBrowserSort: false,
  strictZSpacingForVolumeViewport: true,
  groupEnabledModesFirst: true,
  allowMultiSelectExport: false,
  maxNumRequests: {
    interaction: 100,
    thumbnail: 5,
    // Prefetch number is dependent on the http protocol. For http 2 or
    // above, the number of requests can be go a lot higher.
    prefetch: 25,
  },
  showErrorDetails: 'always', // 'always', 'dev', 'production'
  // filterQueryParam: false,
  // Defines multi-monitor layouts
  multimonitor: [
    {
      id: 'split',
      test: ({ multimonitor }) => multimonitor === 'split',
      screens: [
        {
          id: 'ohif0',
          screen: null,
          location: {
            screen: 0,
            width: 0.5,
            height: 1,
            left: 0,
            top: 0,
          },
          options: 'location=no,menubar=no,scrollbars=no,status=no,titlebar=no',
        },
        {
          id: 'ohif1',
          screen: null,
          location: {
            width: 0.5,
            height: 1,
            left: 0.5,
            top: 0,
          },
          options: 'location=no,menubar=no,scrollbars=no,status=no,titlebar=no',
        },
      ],
    },

    {
      id: '2',
      test: ({ multimonitor }) => multimonitor === '2',
      screens: [
        {
          id: 'ohif0',
          screen: 0,
          location: {
            width: 1,
            height: 1,
            left: 0,
            top: 0,
          },
          options: 'fullscreen=yes,location=no,menubar=no,scrollbars=no,status=no,titlebar=no',
        },
        {
          id: 'ohif1',
          screen: 1,
          location: {
            width: 1,
            height: 1,
            left: 0,
            top: 0,
          },
          options: 'fullscreen=yes,location=no,menubar=no,scrollbars=no,status=no,titlebar=no',
        },
      ],
    },
  ],
  defaultDataSourceName: 'prod-orthanc',
  investigationalUseDialog: {
    option: 'never',
  },
  /* Dynamic config allows user to pass "configUrl" query string this allows to load config without recompiling application. The regex will ensure valid configuration source */
  // dangerouslyUseDynamicConfig: {
  //   enabled: true,
  //   regex: /.*/,
  // },
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dev-orthanc',
      configuration: {
        friendlyName: 'Orthanc DICOMWeb Server',
        name: 'DCM4CHEE',
        wadoUriRoot: 'http://192.168.31.227:2000/wado',
        qidoRoot: 'http://192.168.31.227:2000/dicom-web',
        wadoRoot: 'http://192.168.31.227:2000/dicom-web',
        qidoSupportsIncludeField: true,
        supportsReject: true,
        dicomUploadEnabled: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: true,
        omitQuotationForMultipartRequest: true,
        bulkDataURI: {
          enabled: true,
        },
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'prod-orthanc',
      configuration: {
        friendlyName: 'Orthanc Production Server',
        name: 'DCM4CHEE',
        wadoUriRoot: 'https://genai.asthramedtech.com/wado',
        qidoRoot: 'https://genai.asthramedtech.com/dicom-web',
        wadoRoot: 'https://genai.asthramedtech.com/dicom-web',
        qidoSupportsIncludeField: true,
        supportsReject: true,
        dicomUploadEnabled: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: true,
        omitQuotationForMultipartRequest: true,
        // Authorization configuration
        headers: {
          Authorization: 'Basic ' + btoa('user:password'), // Replace with your credentials
        },
        bulkDataURI: {
          enabled: true,
        },
      },
    },

    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dev2-orthanc',
      configuration: {
        friendlyName: 'Orthanc DICOMWeb Server',
        name: 'DCM4CHEE',
        wadoUriRoot: 'https://pacsone.asthramedtech.com/wado',
        qidoRoot: 'https://pacsone.asthramedtech.com/dicom-web',
        wadoRoot: 'https://pacsone.asthramedtech.com/dicom-web',
        qidoSupportsIncludeField: true,
        supportsReject: true,
        dicomUploadEnabled: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: true,
        omitQuotationForMultipartRequest: true,
        bulkDataURI: {
          enabled: true,
        },
      },
    },
  ],
  httpErrorHandler: error => {
    // This is 429 when rejected from the public idc sandbox too often.
    console.warn(error.status);

    // Could use services manager here to bring up a dialog/modal if needed.
    console.warn('test, navigate to https://ohif.org/');
  },
};
