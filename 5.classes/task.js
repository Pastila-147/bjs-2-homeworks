class PrintEditionItem {

	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(stateNubmer) {
		if (stateNubmer < 0) {
			this._state = 0
		} else if (stateNubmer > 100) {
			this._state = 100
		} else this._state = stateNubmer;
	}
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

// задача 2

class Library {

	constructor(name) {
		this.name = name;
		this.books = []
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}

	findBookBy(type, value) {
		let result = this.books.find(book => book[type] === value);
		if (result) {
			return result;
		} else {
			return null;
		}
	}

	giveBookByName(bookName) {
		const book = this.findBookBy("name", bookName);
		if (!book) return null;
		this.books = this.books.filter((item) => item.name !== bookName);
		return book;
	}
}

// задача 3

class Student {
	constructor(name, gender, age) {
		this.name = name,
			this.gender = gender,
			this.age = age,
			this.marks = {}
	}

	addMark(mark, discipline) {
		if (mark < 2 || mark > 5) {
			return console.log("Ошибка в оценке");
		} else {
			this.addDiscipline(discipline);
			this.marks[discipline].push(mark);
		}
	}

	addDiscipline(discipline) {
		if (this.marks[discipline] == undefined) {
			this.marks[discipline] = [];
		}
	}

	getAverageBySubject(discipline) {
		if (this.marks[discipline] == undefined || this.marks[discipline].length === 0) {
			return 0
		}
		return this.marks[discipline].reduce((a, b) => (a + b)) / this.marks[discipline].length;
	}

	getAverage() {
		if (Object.keys(this.marks).length > 0) {
			let sum = Object.entries(this.marks).reduce((acc, [item]) => acc += this.getAverageBySubject(item), 0);
			return sum / Object.keys(this.marks).length;
		} else return 0
	}
}