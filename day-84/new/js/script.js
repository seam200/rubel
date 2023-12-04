function clearScreen() {
  document.getElementById("result").value = "";
}
function display(value) {
  document.getElementById("result").value += value;
}
function calculate() {
  var P = document.getElementById("result").value;
  var q = eval(P);
  document.getElementById("result").value = q;
}
function clearScreen() {
  document.getElementById("result").value = "";
}
function display(value) {
  document.getElementById("result").value += value;
}
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}
