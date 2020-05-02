
import { NewtablaComponent } from './newtabla.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { Formula1Service} from '../formula1.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';
import { AgGridModule } from 'ag-grid-angular';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, HttpClientModule, FormsModule, AgGridModule.withComponents(null), ToastrModule.forRoot()],
  exports: [RouterModule],
  declarations: [NewtablaComponent, FilterPipe],
  providers: [Formula1Service],
  bootstrap: [NewtablaComponent]
})
export class AppNewTablaModule {

}
