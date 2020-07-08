import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
