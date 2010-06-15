var lastTimeStamp = 0;
safari.self.addEventListener(
  "message",
  function(msg) {
    var w = document.getSelection().toString();
    if (w) {
      switch (msg.name) {
        case "inquiry":
          if (msg.timeStamp > lastTimeStamp + msg.message.deltaTimeThreshold) {
            safari.self.tab.dispatchMessage("open", {string: w, command: msg.message.command});
          }
          lastTimeStamp = msg.timeStamp;
          break;
      }
    }
  },
  false
);
