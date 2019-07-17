var button = document.querySelector("button");

var bgColor = document.body.style.background;
document.addEventListener("mousedown", change);

function change(e) {
  //   document.body.style.background = `#${Math.floor(Math.random() * 16777215)}`;
  bgColor = `#` + Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.background = bgColor;
  button.textContent = bgColor;
  console.log(e);
}

// button.addEventListener("mousedown", change);
// function changeButton() {
//   //   document.body.style.background = `#${Math.floor(Math.random() * 16777215)}`;
//   button = `#` + Math.floor(Math.random() * 16777215).toString(16);

//   button.style.background = button;
//   //   button.textContent = bgColor;
//   console.log(e);
// }

// https://stackoverflow.com/questions/46716945/generate-random-background-color-by-clicking-on-link
