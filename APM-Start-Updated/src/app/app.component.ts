import { Component } from '@angular/core';
import { ProductService } from './products/services/product.service';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <product-list></product-list>
    </div>
    `,
    providers: [ProductService]
})
export class AppComponent {
    pageTitle: string = "Acme Product Management";
}
