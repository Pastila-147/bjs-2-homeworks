// задача 1

function parseCount(meaning) {
	if (Number.isNaN(Number.parseFloat(meaning, 10))) {
		throw new Error("Невалидное значение")
	}
	return parseFloat(meaning)
}

function validateCount(meaning) {
	try {
		return parseCount(meaning);
	} catch (error) {
		return error;
	}
}

// задача 2

class Triangle {

	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if ((a + b) <= c || (a + c) <= b || (c + b) <= a) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
	}

	get perimeter() {
		return (this.a + this.b + this.c);
	}

	get area() {
		let p = (this.a + this.b + this.c) / 2;
		let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
		return Number(s);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);

	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}