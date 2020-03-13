document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
      chrome.tabs.executeScript({
	  file: 'patch.js'
      });
  }, false);
}, false);
