function calcTip() {
  let totalAmount   = document.getElementById('totalAmount').value;
  let tipPercentage = document.getElementById('tipPercentage').value;
  let tip =  totalAmount * (tipPercentage / 100);
  document.getElementById('results').innerHTML = tip;
}
