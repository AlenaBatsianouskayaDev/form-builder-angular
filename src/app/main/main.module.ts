import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { ReactiveComponentModule } from '@ngrx/component';

import { AngularMaterialModule } from '../shared/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { AppTopBarComponent } from './components/app-top-bar/app-top-bar.component';
import { AuthNavComponent } from './components/app-top-bar/auth-nav/auth-nav.component';
import { FormBuilderPageComponent } from './components/form-builder-page/form-builder-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { MainComponent } from './main.component';
import { AuthFormComponent } from './components/auth-page/auth-form/auth-form.component';

@NgModule({
  declarations: [
    AppTopBarComponent,
    AuthNavComponent,
    FormBuilderPageComponent,
    NotFoundPageComponent,
    MainComponent,
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AngularMaterialModule,
    ReactiveComponentModule,
    MainRoutingModule,
  ],
  exports: [
    NotFoundPageComponent,
  ]
})
export class MainModule { }
