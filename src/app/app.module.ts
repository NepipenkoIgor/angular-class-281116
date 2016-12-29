import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injectable} from '@angular/core';
import {RouterModule, Route, CanActivate,CanDeactivate} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SsnValidator, NameValidator, AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {InputLogDirective} from './input-log.directive';
import {UsersPipe} from './users.pipe';

import {ProfileService} from './profile/profile.service'
import {token} from './tokens'
import {ViewportService} from './viewport.service';
import {HomeComponent} from './home/home.component';
import {AccountComponent} from './account/account.component';
import {NavComponent} from './nav/nav.component'


@Injectable()
class CanDeactivateMyRoute implements CanDeactivate<AccountComponent> {
  canDeactivate(): boolean {
    return window.confirm('Go to this route ?????')
  }
}


const routers: Route[] = [
  {path: '', component: HomeComponent},
  {
    path: 'account/:id', component: AccountComponent,
    data: [{message: 'hi account'}], canDeactivate: [CanDeactivateMyRoute]
  },
  {path: '**', redirectTo: ''},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    NavComponent,
    // SsnValidator,
    // NameValidator,
    // ProfileComponent,
    // InputLogDirective,
    // UsersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routers)
  ],
  providers: [CanDeactivateMyRoute],
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
