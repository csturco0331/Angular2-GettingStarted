import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe'
import { StarComponent } from './shared/star/star.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './not-found/page-not-found.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

import { ProductDetailGuard } from './products/services/product-guard.service';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot([
          { path: 'products', component: ProductListComponent },
          { path: 'product/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] },
          { path: 'welcome', component: WelcomeComponent },
          { path: '', redirectTo: 'welcome', pathMatch: 'full' },
          { path: '**', component: PageNotFoundComponent }
      ], { useHash: true })
  ],
  declarations: [
      AppComponent,
      ProductListComponent,
      ProductFilterPipe,
      StarComponent,
      WelcomeComponent,
      PageNotFoundComponent,
      ProductDetailComponent
  ],
  providers: [
      ProductDetailGuard
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
