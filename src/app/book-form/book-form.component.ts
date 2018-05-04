import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../model/book';
import { NgForm } from '@angular/forms';
import { BOOKS } from '../../server/mock-book';
import { BookService } from '../services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input() book: Book;
  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }
  save(form: NgForm) {
    if (this.book.id) {
      this.edit(form.value);
    } else {
      this.add(form.value);
      form.reset();
    }
  }
  add(book) {
   this.service.add(this.book)
   // tslint:disable-next-line:no-shadowed-variable
   .subscribe(book => this.book = book);
   this.reset();
   this.router.navigate(['/books']);
   setInterval(() => {
    this.refresh();
  }, 200);
  }

  edit(book) {
    this.service.edit(this.book)
    // tslint:disable-next-line:no-shadowed-variable
    .subscribe(book => this.book.id = book.id);
    this.router.navigate(['/books']);
    setInterval(() => {
      this.refresh();
    }, 200);
  }
  reset() {
    this.book = new Book();
  }
  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) => {
        this.book.img = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }

  }
  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getBook(id)
    .subscribe(book => this.book = book);
  }
  goBack(): void {
    this.router.navigate(['/books']);
  }

  refresh(): void {
    window.location.reload();
  }
  ngOnInit() {
    this.getBook();
  }


}
