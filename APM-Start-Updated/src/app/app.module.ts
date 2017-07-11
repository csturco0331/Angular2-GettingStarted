import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { ProductModule } from './products/product.module';
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './not-found/page-not-found.component';

@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      ProductModule,
      RouterModule.forRoot ([
          { path: 'welcome', component: WelcomeComponent },
          { path: '', redirectTo: 'welcome', pathMatch: 'full' },
          { path: '**', component: PageNotFoundComponent}
      ], { useHash: true })
  ],
  declarations: [
      AppComponent,
      WelcomeComponent,
      PageNotFoundComponent,
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
