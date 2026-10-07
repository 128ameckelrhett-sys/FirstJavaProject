let tipOutput = document.getElementById('tipAmountOutput')
let totalOutput = document.getElementById('totalBillOutput')
let checkOutput = document.getElementById('paycheckAmountOutput')
let gradeOutput = document.getElementById('percentGradeOutput')
let gasOutput = document.getElementById('gasCostOutput')

let tipBtn = document.getElementById('tipButton')
tipBtn.addEventListener('click', function () {

    // Tip Calculator Variables
    let subTotal = document.getElementById('subTotalInput').valueAsNumber
    let percentage = document.getElementById('percentageInput').valueAsNumber
    let tipAmount;
    let totalBill;

    //Do math
    tipAmount = subTotal * percentage;
    totalBill = subTotal + tipAmount;

    // Only show smallest of 100ths
    tipAmount = tipAmount.toFixed(2);
    totalBill = totalBill.toFixed(2);

    //Shows Output
    tipOutput.innerHTML = "$" + tipAmount;
    totalOutput.innerHTML = "$" + totalBill;

})

let paycheckBtn = document.getElementById('tipButton')
paycheckBtnBtn.addEventListener('click', function () {

// Paycheck Calculator
let hoursWorked = 8;
let payPerHour = 30.5;
let totalTax = 0.22
let totalPay;
let totalIncome; 

totalPay = hoursWorked * payPerHour
console.log("Total Pay " + totalPay.toFixed(2));

totalPay = hoursWorked * payPerHour
console.log("Total Pay " + totalPay.toFixed(2));

})

// Grade Calculator
let finalGrade = 92
let pointsEarned = 40
let totalPoints = 37

finalGrade = (totalPoints / pointsEarned) * 100

console.log("Final grade:" + finalGrade.toFixed(2))

//Gas Cost Calulator

let perGallon = 13
let gasCost;
let gasTank = 15.3
gasCost = perGallon * gasTank
console.log("Gas cost" + gasCost.toFixed(2))