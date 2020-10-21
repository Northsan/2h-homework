import { Observable } from 'rxjs';
import { BackendService } from 'src/app/backend.service';
import { Ticket } from 'src/interfaces/ticket.interface';

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
   selector: 'app-tickets-list',
   templateUrl: './tickets-list.component.html',
   styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {
   private readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();
   public tickets: Ticket[];
   public errorMsg: string = '';

   constructor(private readonly backendService: BackendService) { }

   ngOnInit(): void {
      this.tickets$.subscribe((tickets) => {
         this.tickets = tickets;
      },
         (error => {
            // Catch error message
            this.errorMsg = error;
         }
         ));
   }

   hasErrorMsg(): boolean {
      return (this.errorMsg !== '');
   }
}
