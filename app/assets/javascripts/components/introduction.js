var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

$(function () {
  showText("#msg", "Hello ! Here you will find print, web, photo, video & art.", 0, 100);
});

setTimeout(function() {
  setInterval(function(){
    $(".back_white").removeClass("hidden");
  }, 20);
  setInterval(function(){
    $(".back_white").addClass("hidden");
  }, 40);
});

setTimeout(function() {
  $(".intro").addClass("hidden");
}, 10000);
