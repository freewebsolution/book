import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BOOKS } from './../../server/mock-book';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOption = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable()
export class BookService {

  private Api = ' http://localhost:3000/book';
  book: Book[];

  getBooks(): Observable<Book[]> {
    return  this.http.get<Book[]>(this.Api);
  }
  add(book: Book): Observable<any> {
     book.id = this.Api.length + 1;
    return this.http.post(this.Api , book, httpOption);
  }
  edit(book: Book): Observable<any> {
    return this.http.patch(this.Api + '/' + book.id , book, httpOption);
  }
  delete(book: Book | number): Observable<any> {
    const idx = typeof book === 'number' ? book : book.id;
    const url = `${this.Api}/${idx}`;
    return this.http.delete<any>(url);
  }
  getBook(id: number): Observable<Book> {
    const url = `${this.Api}/${id}`;
    return this.http.get<Book>(url);
  }

  getInfo(id: number): Observable<Book> {
    const url = `${this.Api}/${id}`;
    return this.http.get<Book>(url);
  }
  constructor(private http: HttpClient) { }

}
