import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      LayoutsModule
   ],
   providers: [
      BackendService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {

}
