import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../services/product.service'

@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit{

    constructor(private _productService: ProductService) { }

    pageTitle: string = 'Product List';
    listFilter: string;
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    products: IProduct[];
    errorMessage: string;

    ngOnInit(): void {
        console.log('Initializing product-list');
        this._productService.getProducts()
                .subscribe(products => this.products = products,
                            error => this.errorMessage = <string>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
