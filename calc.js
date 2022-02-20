const sound = new Audio("buttonsound.mp3");
sound.volume = 0.2;
window.addEventListener("load", function OnWindowLoaded() {
  var signs = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "/",
    "0",
    "=",
    ".",
    "c",
  ];

  // form of calculator
  var calc = document.getElementById("calc");

  // text field with a mathematical expression
  var textArea = document.getElementById("inputVal");

  // adding buttons to form of calculator
  signs.forEach(function (sign) {
    var signElement = document.createElement("div");
    signElement.className = "btn";
    signElement.innerHTML = sign;
    calc.appendChild(signElement);
  });

  document.querySelectorAll("#calc-wrap .btn").forEach(function (button) {
    // Adding an action performed when clicking on any button
    button.addEventListener("click", onButtonClick);
  });

  function onButtonClick(e) {
    // e - MouseEvent (contains info bout click)
    if (e.target.innerHTML === "c") {
      textArea.innerHTML = "0";
    } else if (e.target.innerHTML === "=") {
      sound.play();
      textArea.innerHTML = eval(textArea.innerHTML);
    } else if (textArea.innerHTML === "0") {
      textArea.innerHTML = e.target.innerHTML;
    } else {
      textArea.innerHTML += e.target.innerHTML;
    }
  }
});
