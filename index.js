const weight = document.getElementById("weight");
const height = document.getElementById("height");
const bmi = document.getElementById("bmi");
const btn = document.getElementById("btn");
const tip = document.getElementById("tip");

btn.addEventListener("click", () => {
  if (weight.value == "" || height.value == "") {
    console.log("Please atleast provide some input");
    tip.innerText = "Please atleast provide some input";
  } else if (weight.value <= 0 || height.value <= 0) {
    console.log("Weight or Height should be +ve Number");
    tip.innerText = "Weight or Height should be +ve Number";
  } else {
    calculatedBMI = +weight.value / (height.value / 100) ** 2;
    bmi.value = calculatedBMI.toFixed(2);
    if (calculatedBMI <= 18.4) {
      tip.innerText = "You are Underweight, increase your calories.";
    } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
      tip.innerText = "You've Normal weight, continue eating healhty";
    } else if (calculatedBMI >= 25 && calculatedBMI <= 39.9) {
      tip.innerText = "You are Overweight, eat less calories.";
    } else {
      tip.innerText = "You've Obesity problem contact physician.";
    }
  }
});
