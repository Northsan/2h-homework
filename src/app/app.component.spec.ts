import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
   let fixture: ComponentFixture<AppComponent>;

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [AppComponent]
      });

      fixture = TestBed.createComponent(AppComponent);
   });

   it('should create the app', () => {
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
   });

   it('should have a header', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('app-header').textContent).toBe('');
   });

   it('should have a body', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('app-body').textContent).toBe('');
   });
});
