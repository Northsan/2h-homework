import { Observable, of } from 'rxjs';
import { BackendService } from 'src/app/backend.service';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { TicketDetailsComponent } from './ticket-details.component';

describe('TicketDetailsComponent', () => {
   let component: TicketDetailsComponent;
   let fixture: ComponentFixture<TicketDetailsComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [TicketDetailsComponent],
         providers: [BackendService,
            {
               provide: ActivatedRoute,
               useValue: {
                  params: of({
                     id: 1,
                  }),
               },
            }]
      })
         .compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(TicketDetailsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should have a back button', () => {
      const fixture = TestBed.createComponent(TicketDetailsComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('button').textContent).toBe('Back');
   });
});
