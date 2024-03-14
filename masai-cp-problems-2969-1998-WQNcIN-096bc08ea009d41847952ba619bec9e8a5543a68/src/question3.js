// Problem no. 10
class Character {}
class Warrior {}

// // Example Invocation
// const character1 = new Character("Enemy", 50, 15);
// const warrior1 = new Warrior("Hero", 100, 20, "sword", "plate armor");

// console.log(character1); //Character { name: 'Enemy', health: 50, attackPower: 15 }
// console.log(warrior1); // Warrior {name: 'Hero',health: 100,attackPower: 20,weapon: 'sword',armor: 'plate armor }

// // Warrior attacks character
// warrior1.attack(character1);
// console.log("Character after warrior's attack:");
// console.log(character1); //Character { name: 'Enemy', health: 20, attackPower: 15 }

// // Warrior defends
// warrior1.defend();
// console.log(warrior1); // Warrior {name: 'Hero',health: 110,attackPower: 30,weapon: 'sword',armor: 'plate armor'}

// // Check if character and warrior are alive
// console.log("Is character alive?", character1.isAlive()); // true
// console.log("Is warrior alive?", warrior1.isAlive()); // true

// Problem no. 11

// Generic Media class
class Media {
  #mediaType;

  constructor(mediaType) {
    this.#mediaType = "";
    this.mediaType = mediaType;
  }

  // Getter for mediaType
  get mediaType() {
    return this.#mediaType;
  }

  // Setter for mediaType
  set mediaType(value) {
    if (typeof value === "string" && value.trim() !== "") {
      this.#mediaType = value.trim();
    } else {
      throw new Error("Media type must be a non-empty string.");
    }
  }
}

// Book class inheriting from Media
class Book {
  #title;
  #author;
  #publicationYear;
  #availableCopies;

  constructor(title, author, publicationYear, availableCopies) {
    super("Book");
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.availableCopies = availableCopies;
  }

  // Getters and setters for Book properties
  get title() {
    return this.#title;
  }

  set title(value) {
    if (typeof value === "string" && value.trim() !== "") {
      this.#title = value.trim();
    } else {
      throw new Error("Title must be a non-empty string.");
    }
  }
  get author() {
    return this.#author;
  }

  set author(value) {
    if (typeof value === "string" && value.trim() !== "") {
      this.#author = value.trim();
    } else {
      throw new Error("Author must be a non-empty string.");
    }
  }
  get publicationYear() {
    return this.#publicationYear;
  }

  set publicationYear(value) {
    if (Number.isInteger(value) && value > 0) {
      this.#publicationYear = value;
    } else {
      throw new Error("Publication year must be a positive integer.");
    }
  }
  get availableCopies() {
    return this.#availableCopies;
  }

  set availableCopies(value) {
    if (Number.isInteger(value) && value >= 0) {
      this.#availableCopies = value;
    } else {
      throw new Error("Available copies must be a non-negative integer.");
    }
  }

  // Static method to compare publication years of two books
  static comparePublicationYears(book1, book2) {
    if (book1.publicationYear < book2.publicationYear) {
      return -1;
    } else if (book1.publicationYear > book2.publicationYear) {
      return 1;
    }
    return 0;
  }
}

class User {
  #firstName = "";
  #lastName = "";
  #borrowedBooks = [];

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this.#firstName;
  }

  set firstName(value) {
    if (typeof value === "string" && value.trim() !== "") {
      this.#firstName = value.trim();
    } else {
      throw new Error("First name must be a non-empty string.");
    }
  }

  get lastName() {
    return this.#lastName;
  }

  set lastName(value) {
    if (typeof value === "string" && value.trim() !== "") {
      this.#lastName = value.trim();
    } else {
      throw new Error("Last name must be a non-empty string.");
    }
  }

  borrowBook(book) {
    if (book instanceof Book && book.availableCopies > 0) {
      this.#borrowedBooks.push(book);
      book.availableCopies--;
    } else {
      throw new Error("Book is not available for borrowing.");
    }
  }

  returnBook(book) {
    const index = this.#borrowedBooks.indexOf(book);
    if (index !== -1) {
      this.#borrowedBooks.splice(index, 1);
      book.availableCopies++;
    }
  }

  static fullName(user) {
    return `${user.firstName} ${user.lastName}`;
  }
}

// Example usage
// const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 5);
// const book2 = new Book("1984", "George Orwell", 1949, 10);

// const user1 = new User("Alice", "Smith");
// const user2 = new User("Bob", "Johnson");

// console.log("User 1 full name:", User.fullName(user1)); // Alice Smith

// user1.borrowBook(book1);
// console.log("Book1 availableCopies:", book1.availableCopies); // 4

// user1.borrowBook(book2);
// console.log("Book 2 availableCopies:", book2.availableCopies); // 9

// console.log(
//   "Comparing publication years:",
//   Book.comparePublicationYears(book1, book2)
// ); // 1

// user1.returnBook(book1);
// console.log("Book 1 availableCopies after return:", book1.availableCopies); // 5

//don't remove below export statement part
export { Character, Warrior, Media, Book, User };
