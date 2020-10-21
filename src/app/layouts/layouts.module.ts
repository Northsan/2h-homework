import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
   declarations: [
      HeaderComponent,
      BodyComponent
   ],
   imports: [
      CommonModule,
      RouterModule
   ],
   exports: [
      HeaderComponent,
      BodyComponent
   ]
})
export class LayoutsModule { }
