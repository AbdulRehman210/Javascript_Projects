let count = 0;

function changeCount(num) {
  count += num;
  document.getElementById("count").innerHTML = count;
}
function reSet() {
  count = 0;
  document.getElementById("count").innerHTML = count;
}