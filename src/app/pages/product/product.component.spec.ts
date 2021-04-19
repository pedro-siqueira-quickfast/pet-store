import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceMock } from 'src/app/mocks/products-mock';
import { ProductsService } from 'src/app/services/products.service';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,],
      declarations: [ ProductComponent ],
      providers: [
      {
        provide: ProductsService,
        useClass: ProductServiceMock
      },
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get(id:string) {
                return
              }
            }
          }
        }
      }
      ]
    })
    .compileComponents();
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
