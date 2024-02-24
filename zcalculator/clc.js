function insert(num) {
  document.getElementById('result').value = document.getElementById('result').value+num;
}
function clean() {
  document.getElementById('result').value = "";
}
function back() {
  var exp = document.getElementById('result').value;
  document.getElementById('result').value = exp.substring(0, exp.length-1);
}
function equal() {
  try {
      var exp = document.getElementById('result').value;
      if(exp) {
          document.getElementById('result').value = eval(exp);
      }
  } catch(e) {
      document.getElementById('result').value = "Error";
  }
}