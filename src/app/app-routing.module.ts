import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';
import { TicketDetailsComponent } from './routes/ticket-details/ticket-details.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'ticket-details/:id', component: TicketDetailsComponent },
   { path: '**', redirectTo: '' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule { }
