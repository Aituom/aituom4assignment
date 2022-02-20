function hourglass() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf251;";
  setTimeout(function () {
    a.innerHTML = "&#xf252;";
  }, 3000);
  setTimeout(function () {
    a.innerHTML = "&#xf253;";
  }, 5000);
}
hourglass();
setInterval(hourglass, 10000);
