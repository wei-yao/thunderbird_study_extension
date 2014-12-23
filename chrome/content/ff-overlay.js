var myfirstext = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("myfirstext-strings");
  },

  onMenuItemCommand: function(e,id) {
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
    promptService.alert(window, this.strings.getString("helloMessageTitle")+' '+id,
                               this.strings.getString("helloMessage"));
  //  promptService.alert(window, '1',
  //                              this.strings.getString("helloMessage"));
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    myfirstext.onMenuItemCommand(e);
  }
};

window.addEventListener("load", function () { myfirstext.onLoad(); }, false);


myfirstext.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e) {
    myfirstext.showFirefoxContextMenu(e);
  }, false);
};

myfirstext.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-myfirstext").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { myfirstext.onFirefoxLoad(); }, false);