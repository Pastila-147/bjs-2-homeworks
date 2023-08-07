"use strict"

function solveEquation(a, b, c) {
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	let arr = [];

	if (discriminant === 0) {
		arr.push(-b / (2 * a));
	} else if (discriminant > 0) {
		arr.push(-b + Math.sqrt(discriminant)) / (2 * a);
		arr.push(-b - Math.sqrt(discriminant)) / (2 * a);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}
	let monthlyPercent = percent / 100 / 12;
	let principalAmount = amount - contribution;
	let monthlyPayment = principalAmount * (monthlyPercent / (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
	let totalAmount = (monthlyPayment * countMonths).toFixed(2);
	let answer = Number(totalAmount);
	return answer;
}