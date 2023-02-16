import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../layouts/navbar/navbar.component';
import { ToplayoutComponent } from '../layouts/toplayout/toplayout.component';
import { FormComponent } from '../layouts/form/form.component';
import { BottomlayoutComponent } from '../layouts/bottomlayout/bottomlayout.component';
import { FooterComponent } from '../layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToplayoutComponent,
    FormComponent,
    BottomlayoutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
