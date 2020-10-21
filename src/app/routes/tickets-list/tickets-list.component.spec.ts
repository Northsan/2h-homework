import { BackendService } from 'src/app/backend.service';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsListComponent } from './tickets-list.component';

describe('TicketsListComponent', () => {
   let component: TicketsListComponent;
   let fixture: ComponentFixture<TicketsListComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [TicketsListComponent],
         providers: [BackendService]
      })
         .compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(TicketsListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should have a title', () => {
      const fixture = TestBed.createComponent(TicketsListComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h2').textContent).toBe('Tickets');
   });
});
