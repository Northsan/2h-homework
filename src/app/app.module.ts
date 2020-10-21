import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { LayoutsModule } from './layouts/layouts.module';
import { HomeComponent } from './routes/home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent
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
