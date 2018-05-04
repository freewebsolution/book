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

  private getApi = 'http://localhost/server/books.php';
  private postApi = 'http://localhost/server/send.php';
  private deleteUrl = 'http://localhost/server/delete.php';
  book: Book[];

  getBooks(): Observable<Book[]> {
    return  this.http.get<Book[]>(this.getApi);
  }
  add(book: Book): Observable<any> {
   // book.id = this.Api.length + 1;
    return this.http.post(this.postApi , book, httpOption);
  }
  edit(book: Book): Observable<any> {
    return this.http.put(this.postApi + '?id=' + book.id , book, httpOption);
  }
  delete(book: Book | number): Observable<any> {
    const idx = typeof book === 'number' ? book : book.id;
    const url = this.deleteUrl + '?id=' + idx;
    return this.http.delete<any>(url);
  }
  getBook(id: number): Observable<Book> {
    const url = this.getApi + '?id=' + id;
    return this.http.get<Book>(url);
  }

  getInfo(id: number): Observable<Book> {
    const url = this.getApi + '?id=' + id;
    return this.http.get<Book>(url);
  }
  constructor(private http: HttpClient) { }

}
