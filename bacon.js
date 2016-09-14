// bacon.js
document.addEventListener("DOMContentLoaded", function(event) {
  // get all images
  var imgs = document.getElementsByTagName("img");
  // loop through images and make them better
  for (var i = 0, l = imgs.length; i < l; i++) {
    imgs[i].src = "https://baconmockup.com/1024/1024/";
  });
});
