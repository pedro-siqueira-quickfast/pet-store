import { Observable } from 'rxjs';
import { AnimalType, Product } from '../interfaces/product';

export class ProductServiceMock {

  getProductsHighlights(): Observable<Product[]> {
        return new Observable<Product[]>(observer => {
            observer.next([
                {
                    name: "Antipulgas e Carrapatos MSD Bravecto para Cães de 4,5 a 10 Kg",
                    description: "Com ação rápida, promove o extermino total dos parasitas em 24 horas",
                    value: 204.9,
                    promotional_value: 184.41,
                    featured_image: "https://www.petlove.com.br/images/products/212200/product/Antipulgas_e_Carrapatos_MSD_Bravecto_para_C%C3%A3es_de_4_5_a_10_Kg_3104947-1_.jpg",
                    images: [
                      "https://www.petlove.com.br/images/products/212200/product/Antipulgas_e_Carrapatos_MSD_Bravecto_para_C%C3%A3es_de_4_5_a_10_Kg_3104947-1_.jpg"
                    ],
                    videos: [
                      "https://youtu.be/tEZ9j_i-ja8"
                    ],
                    rating_stars: 5,
                    rating_count: 424,
                    installment_available: true,
                    installment_count: 2,
                    featured: true,
                    category: "Medicina e Saúde",
                    subcategory: "Antipulgas e Carrapatos",
                    animal_type: AnimalType.Dog,
                    status: "active",
                    url: "/anti-pulgas-e-carrapatos-msd-bravecto-para-caes-de-45-a-10kg---200-mg-3104947/p",
                    created_at: "2021-04-12 21:28:35.881119+00:00",
                    id: "EJf7MU4hES59rlLMJrdH",
                    key: "Product/EJf7MU4hES59rlLMJrdH"
                  },
                  {
                    name: "Comedouro Plástico Furacão Pet Azul",
                    description: "O Comedouro Plástico Furacão Pet Azul reúne praticidade, higiene e beleza. Totalmente produzido em plástico, fácil de higienizar e muito mais durável.",
                    value: 7.95,
                    promotional_value: 7.15,
                    featured_image: "https://www.petlove.com.br/images/products/152403/product/Comedouro-Plastico-Azul-Furacao-Pet-600ml---Tam-2.jpg",
                    images: [
                      "https://www.petlove.com.br/images/products/152403/product/Comedouro-Plastico-Azul-Furacao-Pet-600ml---Tam-2.jpg?1556340860"
                    ],
                    videos: [],
                    rating_stars: 4,
                    rating_count: 93,
                    installment_available: false,
                    installment_count: 0,
                    featured: true,
                    category: "acessorios para alimentação",
                    subcategory: "Comedouros e Bebedouro",
                    animal_type: AnimalType.Dog,
                    status: "active",
                    url: "https://www.petlove.com.br/comedouro-plastico-furacao-pet---azul-3100912/p?sku=3100912-2",
                    created_at: "2021-04-12 21:28:38.432056+00:00",
                    id: "LTZkebQQJoCRN1Ag9kuZ",
                    key: "Product/LTZkebQQJoCRN1Ag9kuZ"
                  }
            ]);
            observer.complete()
        });
    }
}
