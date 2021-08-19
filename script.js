let billInput = document.getElementById("bill-input")
let billAmount = 0;

let tipPercentage = 0;

let numPeopleInput = document.getElementById("bill-input")
let numPeople = 0;

let tipButtonSelected = false;
let currentlySelectedButton = null;

let totalAmountPerPerson = 0;
let tipAmountPerPerson = 0;

let finalTipAmountOutput = 0;
let finalTotalAmountOutput = 0;

let resetBtn = document.getElementById("reset-btn")

FivePercentBtn = document.getElementById("five-percent-btn");
TenPercentBtn = document.getElementById("ten-percent-btn");
FifteenPercentBtn = document.getElementById("fifteen-percent-btn");
TwentyFivePercentBtn = document.getElementById("twenty-five-percent-btn");
FiftyPercentBtn = document.getElementById("fifty-percent-btn");
CustomPercentBtn = document.getElementById("custom-percent-input");


FivePercentBtn.onclick = () => {
  tipPercentage = 0.05;
  makeButtonStayPressed(FivePercentBtn);
  calculateTip();
};
TenPercentBtn.onclick = () => {
  tipPercentage = 0.1;
  makeButtonStayPressed(TenPercentBtn);
  calculateTip();
};
FifteenPercentBtn.onclick = () => {
  tipPercentage = 0.15;
  makeButtonStayPressed(FifteenPercentBtn);
  calculateTip();
};
TwentyFivePercentBtn.onclick = () => {
  tipPercentage = 0.25;
  makeButtonStayPressed(TwentyFivePercentBtn);
  calculateTip();
};
FiftyPercentBtn.onclick = () => {
  tipPercentage = 0.5;
  makeButtonStayPressed(FiftyPercentBtn);
  calculateTip();
};
CustomPercentBtn.onclick = () => {
  makeButtonStayPressed(CustomPercentBtn);
  tipPercentage = Number(CustomPercentBtn.value) / 100;
  calculateTip();
};

resetBtn.onclick = () => {
  console.log("reset")
  document.getElementById("bill-input").value = ""
  document.getElementById("num-people-input").value = ""
  document.getElementById("calculated-tip-amount").textContent = "$0"
  document.getElementById("calculated-total-amount").textContent = "$0"
  currentlySelectedButton.classList.remove("tip-button-pressed");
}

function calculateTip() {
  console.log("Calculating Tip");
  billAmount = Number(document.getElementById("bill-input").value);
  numPeople = Number(document.getElementById("num-people-input").value);
  finalTipAmountOutput = document.getElementById("calculated-tip-amount");
  finalTotalAmountOutput = document.getElementById("calculated-total-amount");
  console.log(finalTipAmountOutput, finalTotalAmountOutput);

  console.log(tipPercentage, billAmount);
  totalAmountPerPerson = (
    ((1 + tipPercentage) * billAmount) / numPeople
  );
  tipAmountPerPerson = ((tipPercentage * billAmount) / numPeople);
  finalTotalAmountOutput.textContent = "$" + totalAmountPerPerson.toFixed(2);
  finalTipAmountOutput.textContent = "$" + tipAmountPerPerson.toFixed(2);
  console.log(totalAmountPerPerson);
}

function makeButtonStayPressed(button) {
  if (tipButtonSelected) {
    console.log("button already pressed", currentlySelectedButton);
    currentlySelectedButton.classList.remove("tip-button-pressed");
  }
  tipButtonSelected = true;
  currentlySelectedButton = button;
  button.classList.add("tip-button-pressed");
}
