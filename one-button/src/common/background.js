// Generated by CoffeeScript 1.10.0
(function() {
  kango.ui.browserButton.addEventListener(kango.ui.browserButton.event.COMMAND, function() {
    return kango.browser.tabs.getCurrent(function(tab) {
      return tab != null ? tab.dispatchMessage('click', {
        content: 'click'
      }) : void 0;
    });
  });

}).call(this);

