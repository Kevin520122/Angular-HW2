import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ShowListComponent } from './show-list/show-list.component';
import { RecordComponent } from './record/record.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search-bar/search.pipe';
import { SortPipe } from './show-list/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ShowListComponent,
    RecordComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
