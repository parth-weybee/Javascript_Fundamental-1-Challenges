const bill = 430;
const tip = bill>50 && bill<300? bill*0.15 : bill*.20;
console.log(`bill = ${bill}
tip = ${tip}
total = ${bill+tip}`)