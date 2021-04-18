import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsService } from 'src/app/services/products.service';
import { ProductServiceMock } from 'src/app/mocks/products-mock';
import { ProductItemComponent } from './product-item.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CategoriesFeaturedComponent } from '../categories-featured/categories-featured.component';
import { MockComponents } from 'ng-mocks';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ ProductItemComponent, CategoriesFeaturedComponent ],
      providers: [{
        provide: ProductsService,
        useClass: ProductServiceMock
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show five icon stars in html', () => {
    const matIcons = document.getElementsByTagName('mat-icon');
    expect(matIcons.length).toEqual(5);
  });

  it('should show product name', () => {
    component.product.name = 'Teste';
    fixture.autoDetectChanges();
    const html = fixture.nativeElement;
    expect(html.querySelector('mat-card mat-card-title h4').textContent).toContain('Teste');
  });

  it('should show original and promotional value', () => {
    component.product.value = 23;
    component.product.promotional_value = 1;
    fixture.autoDetectChanges();
    const html = fixture.nativeElement;
    expect(html.querySelector('.old-value').textContent).toEqual('R$23.00');
    expect(html.querySelector('.value').textContent).toEqual('R$1.00');
  });

  it('should show rating stars of 3.5', () => {
    component.product.rating_stars = 3.5;
    fixture.autoDetectChanges();
    const html = fixture.nativeElement;
    const stars = document.getElementsByTagName('mat-icon');
    expect(stars.length).toEqual(5);
    expect(stars[0].textContent?.trim()).toEqual('star');
    expect(stars[1].textContent?.trim()).toEqual('star');
    expect(stars[2].textContent?.trim()).toEqual('star');
    expect(stars[3].textContent?.trim()).toEqual('star_half');
    expect(stars[4].textContent?.trim()).toEqual('star_border');
  })
});
