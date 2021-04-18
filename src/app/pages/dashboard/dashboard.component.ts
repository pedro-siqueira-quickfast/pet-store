import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productsHighlights: Product[] = [] as Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductsHighlights().subscribe((productsHighlights) => {
      this.productsHighlights = productsHighlights;
    });
  }

}
