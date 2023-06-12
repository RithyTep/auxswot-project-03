import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AuthlayoutComponent } from '../layouts/authlayout/authlayout.component';
import { MobxAngularModule } from 'mobx-angular';
import { LanguageStore } from '../languages/translate.store';
import { HttpClientModule } from '@angular/common/http';

const components = [
  AuthlayoutComponent,
];
const modules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  ReactiveFormsModule,
  MaterialModule,
  MobxAngularModule,
  HttpClientModule,
];
@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules,
  ],
  providers: [
    LanguageStore,
    HttpClientModule
  ]
})
export class SharedModule { }
