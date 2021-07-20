import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropDownComponent } from './angular/drop-down/drop-down.component';
import { SearchableDropdownComponent } from './angular/searchable-dropdown/searchable-dropdown.component';
import { FormsModule } from '@angular/forms';
import { ClearModelComponent } from './angular/clear-model/clear-model.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    SearchableDropdownComponent,
    ClearModelComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
