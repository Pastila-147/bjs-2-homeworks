"use strict";

function getArrayParams(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let avg1 = 0;
	let sum = 0;
	let max1 = Math.max(...arr);
	let min1 = Math.min(...arr);
	sum = arr.reduce(function(a, b) {
		return a + b;
	});
	avg1 = sum / arr.length;
	avg1 = Number((avg1).toFixed(2));
	return {
		min: min1,
		max: max1,
		avg: avg1
	};
}
function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return arr.reduce((a, b) => (a + b));
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	return (max - min);
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) == 0) {
			sumEvenElement += arr[i]
		} else sumOddElement += arr[i];
	};
	return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) == 0) {
			sumEvenElement += arr[i]
			countEvenElement++
		}
	};
	return (sumEvenElement / countEvenElement);
}

function makeWork(arrOfArr, func) {
	if (arrOfArr.length === 0) {
		return 0;
	};
	let maxWorkerResult = func(...arrOfArr[0]);
	for (let i = 1; i < arrOfArr.length; i++) {
		const currentResult = func(...arrOfArr[i]);
		if (currentResult > maxWorkerResult) {
			maxWorkerResult = currentResult;
		}
	}
	return maxWorkerResult;
}