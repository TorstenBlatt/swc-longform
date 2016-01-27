 var iframeTag = document.querySelector("iframe"),
        win = iframeTag.contentWindow;

function playVideo(){
    win.postMessage("playVideo","http://players.brightcove.net");
}

videojs.plugin('listenForPlayButton', function() {
  var player = this,
     playVideo = function(evt){
      if(evt.data === "playVideo"){
        player.play();
     }
  };
 window.addEventListener("message",playVideo);
});
