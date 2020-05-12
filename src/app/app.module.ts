import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: 'AIzaSyAbj0cb2FPsklCQ0xmapOcJWlaH-sG6zPc',
  authDomain: 'angular-practice-c5048.firebaseapp.com',
  databaseURL: 'https://angular-practice-c5048.firebaseio.com',
  projectId: 'angular-practice-c5048',
  storageBucket: 'angular-practice-c5048.appspot.com',
  messagingSenderId: '113653436774',
  appId: '1:113653436774:web:f39e24f475a961bd41f8a7'
};
@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    NestedFormComponent,
    DynamicFormComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
