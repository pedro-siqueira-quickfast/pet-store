import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesService } from 'src/app/services/categories.service';
import { CategoriesServiceMock } from 'src/app/mocks/categories-mock';

import { CategoriesFeaturedComponent } from './categories-featured.component';

describe('CategoriesFeaturedComponent', () => {
  let component: CategoriesFeaturedComponent;
  let fixture: ComponentFixture<CategoriesFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesFeaturedComponent ],
      providers: [
        {
          provide: CategoriesService,
          useClass: CategoriesServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show component title in html', () => {
    const html = fixture.nativeElement;
    expect(html.querySelector('h1').textContent).toEqual('Categorias em Destaque');
  });

  it('should check category card item count in HTML', () => {
    const html = fixture.nativeElement;
    expect(html.getElementsByClassName('category-card').length).toEqual(2);
  });

  it('should check first category name', () => {
    const html = fixture.nativeElement;
    expect(html.getElementsByClassName('category-card')[0].textContent).toEqual('Ração');
  });
});
