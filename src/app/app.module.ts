import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppNewTablaModule} from './newtabla/modulenewtabla.module';
import { NewtablaComponent } from './newtabla/newtabla.component';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppNewTablaModule
  ],
  providers: [],
  bootstrap: [AppComponent, NewtablaComponent]
})
export class AppModule { }
