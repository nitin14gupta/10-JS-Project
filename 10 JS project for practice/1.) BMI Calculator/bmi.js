document.getElementById("submit").addEventListener('click', getBmi)
function getBmi(){

let height = parseFloat(document.getElementById("cm").value)
let weight = parseFloat(document.getElementById("kg").value)
let bmi
let newHeight = parseFloat(height/100)
bmi = weight/(newHeight* newHeight)
bmi = bmi.toFixed(1)
document.getElementById("result").innerHTML = "Your BMI is " + bmi + " 😉";
}