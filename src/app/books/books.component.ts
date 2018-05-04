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
  book: Book[];
  selectBook: Book;
  constructor(private service: BookService) { }

  getBook(book: Book): void {
    this.selectBook = book;
  }

  cancella(event: MouseEvent, book ) {
    event.stopPropagation();
    if (confirm('Sei sicuro di voler cancellare ' + book.titolo + '?')) {
      this.delete(book);
    }

  }

  delete(book: Book) {
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
