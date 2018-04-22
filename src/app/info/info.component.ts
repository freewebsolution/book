import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  book: Book;
  constructor(private service: BookService, private router: Router, private route: ActivatedRoute) { }

  getInfo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getInfo(id)
    .subscribe(book => this.book = book);
  }
  goBack(): void {
    this.router.navigate(['/books']);
  }
  ngOnInit() {
    this.getInfo();
  }

}
