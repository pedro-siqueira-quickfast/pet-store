import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product = {} as Product;

  public swiperConfig: SwiperOptions = {
    direction: 'horizontal',
    keyboard: true,
    grabCursor: true,
    pagination: { el: '.swiper-pagination', clickable: true }
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.productService.getProduct(id).subscribe(product => this.product = product);
    }
  }

}
