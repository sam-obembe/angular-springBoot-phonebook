import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './Components/contact-page/contact-page.component';
import { ContactDetailsComponent } from './Components/contact-details/contact-details.component';


const routes: Routes = [
  {path:"addContact",component:AddContactComponent},
  {path:"contact/:id",component:ContactDetailsComponent},
  {path:"",component:ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
