const weight = document.getElementById("weight");
const height = document.getElementById("height");
const bmi = document.getElementById("bmi");
const btn = document.getElementById("btn");
const tip = document.getElementById("tip");

btn.addEventListener("click", () => {
  if (weight.value !== "" || height.value !== "") {
    console.log("Please provide some +ve input");
    tip.innerText = "Please provide some +ve input";
  }
  if (weight.value <= 0 || height.value <= 0) {
    console.log("Weight or Height should be +ve Number");
    tip.innerText = "Weight or Height should be +ve Number";
  } else {
    bmi.value = +weight.value / (height.value / 100) ** 2;
    if (bmi.value <= 18.5) {
      tip.innerText = "You are Underweight, increase your calories.";
    } else if (18.6 <= bmi.value <= 24.9) {
      tip.innerText = "You've Normal weight, continue eating healhty";
    } else if (25 <= bmi.value <= 29.9) {
      tip.innerText = "You are Overweight, eat less calories.";
    } else {
      tip.innerText = "You've Obesity problem contact docker.";
    }
  }
});
