var button = document.querySelector("button");

var bgColor = document.body.style.background;
document.body.addEventListener("click", change);

function change() {
  //   document.body.style.background = `#${Math.floor(Math.random() * 16777215)}`;
  bgColor = `#` + Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.background = bgColor;
  button.textContent = bgColor;
}
