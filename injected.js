safari.self.addEventListener(
  "message",
  function(msg) {
    var w = document.getSelection().toString();
    if (w) {
      safari.self.tab.dispatchMessage("open", {string: w, command: msg.name});
    }
  },
  false
);
