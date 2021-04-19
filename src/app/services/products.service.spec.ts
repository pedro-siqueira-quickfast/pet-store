import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Product } from '../interfaces/product';
import { AnimalType } from '../interfaces/product';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get product', () => {
    service.getProduct('EJf7MU4hES59rlLMJrdH').subscribe(product => {
      expect(product.name).toEqual('Ração Seca');
    })

    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/product/EJf7MU4hES59rlLMJrdH');
    expect(req.request.method).toEqual('GET');
  });


  it('should test get categories', () => {
    service.getProductsHighlights().subscribe(productsHighlights =>{
      expect(productsHighlights.length).toEqual(2);
      expect(productsHighlights[0].name).toEqual('Antipulgas e Carrapatos MSD Bravecto para Cães de 4,5 a 10 Kg');
    });

    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/products-highlights');
    expect(req.request.method).toEqual('GET');
    });
});
