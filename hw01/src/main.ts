import { AbstractBook } from "./models/AbstractBook";
import { Author } from "./models/Author";
import { Book } from "./models/Book";
import { BorrowService } from "./services/BorrowService";
import { Copy } from "./models/Copy";
import { EBook } from "./models/EBook";
import { Library } from "./models/Library";
import { Reader } from "./models/Reader";

// Створення автора та книг
const author = new Author("John Doe");
const book = new Book("The Great Book", 2020, author);
const ebook = new EBook(
  "Digital Book",
  2021,
  author,
  "https://example.com/ebook"
);

// Створення копій
const copy1 = new Copy(book);
const copy2 = new Copy(book);

// Створення читача
const reader = new Reader("1", "Alice");

// Створення бібліотеки та додавання об'єктів
const library = new Library();
library.addAuthor(author);
library.addBook(book);
library.addBook(ebook);
library.addCopy(copy1);
library.addCopy(copy2);
library.addReader(reader);

// Створення сервісу позичання
const borrowService = new BorrowService();

// Демонстрація позичання
console.log("Attempting to borrow copy1...");
const borrowResult1 = borrowService.borrow(reader, copy1);
console.log(`Borrow result: ${borrowResult1}`);

console.log("Attempting to borrow copy1 again...");
const borrowResult2 = borrowService.borrow(reader, copy1);
console.log(`Borrow result: ${borrowResult2}`);

// Демонстрація повернення
console.log("Attempting to return copy1...");
borrowService.returnBook(reader, copy1);
console.log(`Copy1 is available: ${copy1.isCopyAvailable()}`);

// Демонстрація поліморфізму
console.log("\nBook descriptions:");
console.log(book.getDescription());
console.log(ebook.getDescription());

// Спроба створити AbstractBook
// Повинно викликати помилку компіляції
// const abstractBook = new AbstractBook('Test', 2022);
