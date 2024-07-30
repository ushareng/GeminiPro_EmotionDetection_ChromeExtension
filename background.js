chrome.runtime.onInstalled.addListener(() => {
    console.log('Text Emotion Detection Extension installed.');
  });

//   chrome.webRequest.onHeadersReceived.addListener(
//     function(details) {
//       details.responseHeaders.push({
//         name: 'Access-Control-Allow-Origin',
//         value: '*'
//       });
//       return { responseHeaders: details.responseHeaders };
//     },
//     { urls: ['https://text-emotion-detection-klcmkfphca-uc.a.run.app/*'] },
//     ['blocking', 'responseHeaders']
//   );
  