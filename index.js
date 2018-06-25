function calcTip() {
  let totalAmount   = document.getElementById('totalAmount').value;
  let tipPercentage = document.getElementById('tipPercentage').value;
  let tip = tipPercentage / 100
  console.log(totalAmount * tip)
}
