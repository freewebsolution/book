import { BookService } from './../services/book.service';
import { BOOKS } from './../../server/mock-book';
import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  selectBook: Book;
  constructor(private service: BookService) { }

  getBook(book: Book): void {
    this.selectBook = book;
  }
  delete(event: MouseEvent, book: Book) {
    event.stopPropagation();
    this.books = this.books.filter(h => h !== book);
    this.service.delete(book)
    .subscribe();

  }
  getBooks() {
   this.service.getBooks()
    .subscribe(books => this.books = books);
  }



  ngOnInit() {
    this.getBooks();
  }
}
