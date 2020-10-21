import { Observable } from 'rxjs';
import { BackendService } from 'src/app/backend.service';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
   selector: 'app-ticket-details',
   templateUrl: './ticket-details.component.html',
   styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
   private ticketId: number;

   public ticket: Ticket;
   public user: User;
   public errorMsg: string = '';

   constructor(private route: ActivatedRoute, private readonly backendService: BackendService) { }

   ngOnInit(): void {
      this.route.params
         .subscribe(
            (params: Params) => {
               this.ticketId = +params['id'];
               this.backendService.ticket(this.ticketId).subscribe(
                  (ticket) => {
                     this.ticket = ticket;
                     this.backendService.user(ticket.assigneeId).subscribe(
                        (user) => {
                           this.user = user;
                        },
                        (error) => {
                           this.handleError(error);
                        }
                     )
                  },
                  (error) => {
                     this.handleError(error);
                  });
            },
            (error) => {
               this.handleError(error);
            }
         );
   }

   private handleError(error): void {
      this.errorMsg = error;
   }

   hasErrorMsg(): boolean {
      return (this.errorMsg !== '');
   }
}
