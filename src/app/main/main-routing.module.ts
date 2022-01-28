import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from './core/guards/auth.guard';
import { MainComponent } from './main.component';
import { FormBuilderPageComponent } from './components/form-builder-page/form-builder-page.component';
import { AuthFormComponent } from './components/auth-page/auth-form/auth-form.component';


const routes: Routes = [
  // { path: 'form-builder', component: FormBuilderPageComponent, canActivate: [AuthGuard] },
  // { path: '', component: MainComponent, pathMatch: 'full' },
  // { path: 'a', component: AppTopBarComponent },
  // { path: 'login', component: AuthFormComponent  }, 
  // { path: 'registration', component: AuthFormComponent },
  // { path: '**', redirectTo: "/a"},
  // { path: '', redirectTo: "/login", pathMatch: 'full' },
  //TODO page not found

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { 
        path: 'form-builder',
        component: FormBuilderPageComponent,
        // canActivate: [AccessGuard]
      },
      { 
        path: 'login', 
        component: AuthFormComponent  
      }, 
      { 
        path: 'registration', 
        component: AuthFormComponent 
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }


























