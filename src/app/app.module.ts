import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { UserListComponent } from './pages/user-list/user-list.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { GenerateQrComponent } from './pages/generate-qr/generate-qr.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SearchComponent } from './pages/search/search.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {ButtonViewComponent} from './button.component';
import { CheckInfoComponent } from './pages/check-info/check-info.component';
import { RegistershopComponent } from './pages/registershop/registershop.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    GenerateQrComponent,
    SearchComponent,
    ButtonViewComponent,
    CheckInfoComponent,
    RegistershopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgxQRCodeModule,
    Ng2SmartTableModule,
    NgxSpinnerModule,


  ],
  providers: [],
  entryComponents: [ButtonViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
