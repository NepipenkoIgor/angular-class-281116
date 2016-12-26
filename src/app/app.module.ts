import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {InputLogDirective} from './input-log.directive';
import {UsersPipe} from './users.pipe';

import {ProfileService} from './profile/profile.service'
import {token} from './tokens'
import {ViewportService} from './viewport.service'
@NgModule({
  declarations: [
    AppComponent,
   // ProfileComponent,
   // InputLogDirective,
   // UsersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
   // HttpModule
  ],
  // providers: [{provide: ProfileService, useClass:ProfileService},
  //   {provide: token, useValue: 'http://learn.javascript.ru/'},
  //   ViewportService, {
  //     provide: 'SizeService', useFactory: (view: ViewportService) => {
  //       return view.determineService();
  //     }, deps: [ViewportService]
  //   }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
