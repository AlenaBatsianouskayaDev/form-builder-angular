import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { NotFoundPageComponent } from './main/components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // CoreModule,
    MainModule,
    RouterModule.forRoot([{
      path: '**',
      component: NotFoundPageComponent,
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
