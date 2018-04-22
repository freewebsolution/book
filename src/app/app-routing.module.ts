import { BooksComponent } from './books/books.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { BookFormComponent } from './book-form/book-form.component';
import { InfoComponent } from './info/info.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: 'books', component: BooksComponent },
  { path: 'newBook', component: NewComponent },
  { path: 'map', component: MapComponent },
  { path: 'edit/:id', component: BookFormComponent },
  { path: 'info/:id', component: InfoComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
