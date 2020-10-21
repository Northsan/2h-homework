import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
   let component: BodyComponent;
   let fixture: ComponentFixture<BodyComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [BodyComponent]
      })
         .compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(BodyComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should have a router-outlet', () => {
      const fixture = TestBed.createComponent(BodyComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('router-outlet').textContent).toBe('');
   });
});
