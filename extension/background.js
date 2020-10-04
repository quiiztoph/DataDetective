// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//creates right-click menu
chrome.runtime.onInstalled.addListener(function() {
  for (let key of Object.keys(kLocales)) {
    chrome.contextMenus.create({
      id: key,
      title: kLocales[key],
      type: 'normal',
      contexts: ['selection'],
    });
  }
});

//connects to websites on right-click menu

chrome.contextMenus.onClicked.addListener(function(item, tab) {
  let url =
    'https://earthobservatory.nasa.gov/search?q=' + item.selectionText;
  let url2 =
    'https://search.open.canada.ca/en/od/?od-search-portal=Open%20Data&search_text=' + item.selectionText;
  let url3 =
  'https://search.earthdata.nasa.gov/search?q=' + item.selectionText;
  chrome.tabs.create({
    url: url,
    index: tab.index + 1,
  });
  chrome.tabs.create({
    url: url2,
    index: tab.index + 1,
  });
  chrome.tabs.create({
    url: url3,
    index: tab.index + 1,
  });
});
