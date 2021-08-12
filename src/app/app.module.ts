import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropDownComponent } from './angular/drop-down/drop-down.component';
import { SearchableDropdownComponent } from './angular/searchable-dropdown/searchable-dropdown.component';
import { FormsModule } from '@angular/forms';
import { ClearModelComponent } from './angular/clear-model/clear-model.component';
import { HttpClientModule } from '@angular/common/http';
import { ArrayAsynchCallComponent } from './angular/array-asynch-call/array-asynch-call.component';
import { ArrayToStrComponent } from './angular/array-to-str/array-to-str.component';
import { DiffStringDatesComponent } from './angular/diff-string-dates/diff-string-dates.component';
import { DatesDiffernceComponent } from './angular/dates-differnce/dates-differnce.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    SearchableDropdownComponent,
    ClearModelComponent,
    ArrayAsynchCallComponent,
    ArrayToStrComponent,
    DiffStringDatesComponent,
    DatesDiffernceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
