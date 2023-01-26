var groceries = document.getElementsByClassName("groceries")[0];
var itemsList = document.getElementsByClassName("itemsList")[0];
var count = 1;

var pencil = document.getElementById("pencil");

var userInput = document.getElementById("userInput");

var items = document.getElementById("items");

pencil.addEventListener("click", function () {
  items.innerHTML = "";
  count = 0;
  itemsList.style.display = "none";
});

userInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    addItem();
  }
});

function addItem() {
  itemsList.style.display = "block";

  var h2 = document.createElement("h2");
  h2.style.cursor = "pointer";

  h2.style.textTransform = "uppercase";

  h2.innerHTML = count + ") &nbsp; " + userInput.value;
  count += 1;

  h2.addEventListener("click", function () {
    h2.style.textDecoration = "line-through";
  });

  h2.addEventListener("dblclick", function () {
    h2.style.textDecoration = "none";
  });

  items.insertAdjacentElement("beforeend", h2);
  userInput.value = "";
}
