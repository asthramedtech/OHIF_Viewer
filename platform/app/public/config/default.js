/** @type {AppTypes.Config} */

// @ts-ignore
window.config = {
  name: 'config/default.js',
  routerBasename: null,
  extensions: [],
  modes: [],
  customizationService: {},
  showStudyList: true, // Direct study load, no browser
  filterQueryParam: true, // Better StudyInstanceUIDs handling
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
    thumbnail: 75,
    // Prefetch number is dependent on the http protocol. For http 2 or
    // above, the number of requests can be go a lot higher.
    prefetch: 25,
  },
  investigationalUseDialog: {
    option: 'never',
  },
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
  defaultDataSourceName: 'dev-orthanc',
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'prod-orthanc',
      configuration: {
        friendlyName: 'Orthanc Production Server',
        name: 'DCM4CHEE',
        wadoUriRoot: 'https://live.asthramedtech.com/wado',
        qidoRoot: 'https://live.asthramedtech.com/dicom-web',
        wadoRoot: 'https://live.asthramedtech.com/dicom-web',
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
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'ohif',
      configuration: {
        friendlyName: 'AWS S3 Static wado server',
        name: 'aws',
        wadoUriRoot: 'https://d14fa38qiwhyfd.cloudfront.net/dicomweb',
        qidoRoot: 'https://d14fa38qiwhyfd.cloudfront.net/dicomweb',
        wadoRoot: 'https://d14fa38qiwhyfd.cloudfront.net/dicomweb',
        qidoSupportsIncludeField: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: false,
        staticWado: true,
        singlepart: 'bulkdata,video',
        bulkDataURI: {
          enabled: true,
          relativeResolution: 'studies',
          transform: url => url.replace('/pixeldata.mp4', '/rendered'),
        },
        omitQuotationForMultipartRequest: true,
      },
    },
  ],
  httpErrorHandler: error => {
    // This is 429 when rejected from the public idc sandbox too often.
    // @ts-ignore
    console.warn(error.status);

    // Could use services manager here to bring up a dialog/modal if needed.
    console.warn('test, navigate to https://ohif.org/');
  },
};
