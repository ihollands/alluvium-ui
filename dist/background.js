/* global chrome */
const urlRegex = /^https?:\/\/(?:[^./?#]+\.)?wikipedia\.org/;

function handleDOMContent(domContent) {
  console.log('I received the following DOM content:\n' + domContent);
}

chrome.browserAction.onClicked.addListener(function (tab) {
  if (urlRegex.test(tab.url)) {
    chrome.tabs.sendMessage(tab.id, { text: 'report_back' }, handleDOMContent);
  }
});
