import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ContactPageComponent } from './Components/contact-page/contact-page.component';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {
  MatToolbarModule, MatIconModule,  
  MatTooltipModule, MatFormFieldModule, 
  MatInputModule, MatButtonModule,
  MatCardModule,MatListModule, MatDividerModule} from '@angular/material';
import { ContactDetailsComponent } from './Components/contact-details/contact-details.component'
import {DummyContactService} from './Services/DummyContacts/dummy-contact.service'

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    AddContactComponent,
    NavBarComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [DummyContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
