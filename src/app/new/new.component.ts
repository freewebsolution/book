import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  book: any;
  constructor(private service: BookService, private router: Router) {
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

  add(book): void {
    this.service.add(this.book)
    // tslint:disable-next-line:no-shadowed-variable
    .subscribe(book => this.book = book);
    this.router.navigate(['/books']);
  }
  goBack() {
    this.router.navigate(['/books']);
  }
  ngOnInit() {
  }

}
