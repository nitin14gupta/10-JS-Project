function getEmi(){
    let pla = document.getElementById('pla').value
    let rate = document.getElementById('rate').value
    let year = document.getElementById('year').value

    let newRate = (pla * (rate * 0.01)) / year;
    const total = (pla / rate + newRate).toFixed(2);
document.getElementById("result").innerHTML = "Your Loan Emi is " + total + " 😉";

}