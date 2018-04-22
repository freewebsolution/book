import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookService } from './services/book.service';
import { NavComponent } from './nav/nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { MapComponent } from './map/map.component';
import { InfoComponent } from './info/info.component';
import { NewComponent } from './new/new.component';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookFormComponent,
    NavComponent,
    MapComponent,
    InfoComponent,
    NewComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyComH8awrT2ZCkz0kRY-Q6ngAzVemAAr7g'
    })
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
