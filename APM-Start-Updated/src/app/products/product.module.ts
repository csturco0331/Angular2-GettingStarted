import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterPipe } from './product-filter.pipe'
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailGuard } from './services/product-guard.service';
import { ProductService } from './services/product.service';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] },
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule { }
