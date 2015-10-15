chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.create({url: 'https://en.wikipedia.org/wiki/Special:Random'});
});