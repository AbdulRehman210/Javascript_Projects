let index = 0;

function changeColors() {
  let colors = ["aqua", "blue", "red", "orange", "black", "purple","green"];

  document.body.style.background = colors[index++];

  if (index > colors.length - 1) {
    index = 0;
  }
}
