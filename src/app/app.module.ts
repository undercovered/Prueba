import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule  } from '@angular/forms'

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ImageModalComponent } from './components/main/image-modal/image-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ImageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
