let billAmount = 0;
let tipPercentage = 0;
let numPeople = 0;

let totalAmountPerPerson = 0;
let tipAmountPerPerson = 0;

let finalTipAmountOutput = 0
let finalTotalAmountOutput = 0

FivePercentBtn = document.getElementById("five-percent-btn");
TenPercentBtn = document.getElementById("ten-percent-btn");
FifteenPercentBtn = document.getElementById("fifteen-percent-btn");
TwentyFivePercentBtn = document.getElementById("twenty-five-percent-btn");
FiftyPercentBtn = document.getElementById("fifty-percent-btn");
CustomPercentBtn = document.getElementById("custom-percent-input");

FivePercentBtn.onclick = () => {
  tipPercentage = 0.05;
  calculateTip();
};
TenPercentBtn.onclick = () => {
  tipPercentage = 0.1;
  calculateTip();
};
FifteenPercentBtn.onclick = () => {
  tipPercentage = 0.15;
  calculateTip();
};
TwentyFivePercentBtn.onclick = () => {
  tipPercentage = 0.25;
  calculateTip();
};
FiftyPercentBtn.onclick = () => {
  tipPercentage = 0.5;
  calculateTip();
};
CustomPercentBtn.onclick = () => {
  tipPercentage = Number(CustomPercentBtn.value) / 100;
  calculateTip();
};

function calculateTip() {
  console.log("Calculating Tip");
  billAmount = Number(document.getElementById("bill-input").value);
  numPeople = Number(document.getElementById("num-people-input").value);
  finalTipAmountOutput = document.getElementById("calculated-tip-amount");
  finalTotalAmountOutput = document.getElementById("calculated-total-amount");
  console.log(finalTipAmountOutput, finalTotalAmountOutput)
  // if (FivePercentBtn.pressed) {
  //   tipPercentage = 0.05;
  // } else if (TenPercentBtn.pressed) {
  //   tipPercentage = 0.10;
  // } else if (FifteenPercentBtn.pressed) {
  //   tipPercentage = 0.15;
  // } else if (TwentyFivePercentBtn.pressed) {
  //   tipPercentage = 0.25;
  // } else if (FiftyPercentBtn.pressed) {
  //   tipPercentage = 0.50;
  // } else {
  //   tipPercentage = Number(CustomPercentBtn.value) / 100;
  // }
  console.log(tipPercentage, billAmount);
  totalAmountPerPerson = Math.round(((1 + tipPercentage) * billAmount) / numPeople)
  tipAmountPerPerson = Math.round((tipPercentage * billAmount) / numPeople)
  finalTotalAmountOutput.textContent = "$" + totalAmountPerPerson;
  finalTipAmountOutput.textContent = "$" + tipAmountPerPerson;
  console.log(totalAmountPerPerson);
}
