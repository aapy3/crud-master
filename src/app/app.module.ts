import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwModalComponent } from './jw-modal/jw-modal.component';
import { ModalService } from './modal.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonServiceService } from './common-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JwModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [JwModalComponent],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
