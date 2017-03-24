import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DemoLinkComponent } from './view-contacts/demo-link/demo-link.component';
import { DemoLink2Component } from './view-contacts/demo-link2/demo-link2.component';

const appRoutes: Routes = [
  { path: 'view', component: ViewContactsComponent,
    children:[
      
      {path: '', redirectTo: 'demo', pathMatch: 'full'},
      {path:'demo', component: DemoLinkComponent},
      {path:'demo2', component: DemoLink2Component},

    ]
  },
  { path: 'add', component: AddContactComponent },
  { path: '',   redirectTo: '/view', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [RouterModule],
})
export class RoutingModule { }
