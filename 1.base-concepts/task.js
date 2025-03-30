"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {

  } else if (d === 0) {
    const x = -b / (2 * a);
    arr.push(x);
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);
  let p = percent / 100 / 12;
  let body_credit = amount - contribution;
  let every_month = body_credit * (p + (p / (((1 + p) ** countMonths) - 1)));
  let total_amount = every_month * countMonths;

  return Number(total_amount.toFixed(2));
}