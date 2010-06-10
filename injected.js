safari.self.addEventListener(
  "message",
  function(msg) {
    const pattern = {
      google: "http://translate.google.co.jp/?hl=ja&tab=wT#en|ja|{}",
      alc: "http://eow.alc.co.jp/{}/UTF-8/?ref=sa",
      ud: "http://www.urbandictionary.com/define.php?term={}"
    };
    var w = document.getSelection().toString();
    if (w) {
      safari.self.tab.dispatchMessage(pattern[msg.name].replace("{}", encodeURIComponent(w)));
    }
  },
  false
);
