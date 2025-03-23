import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products = [
    {
      id: 1,
      name: "Samsung Galaxy A56 5G",
      category: "Phones",
      price: 44999,
      imgUrl: "/assets/samsung galaxy a56.jpeg",
      specifications: ['12GB RAM', '256GB ROM', 'Samsung Exynos 1580 Processor']
    },
    {
      id: 2,
      name: "Realme Narzo 50 pro 5G",
      category: "Phones",
      price: 27999,
      imgUrl: "/assets/realme narzo 50 pro.jpeg",
      specifications: ['6GB RAM', '128 GB ROM', 'Dimensity 920 5G Processor']
    },

    {
      id: 3,
      name: "Lenova Ideapad Slim 3",
      category: "Laptops",
      price: 49999,
      imgUrl: "/assets/lenova ideapad.jpeg",
      specifications: ['16GB RAM', '512 GB SSD', 'Intel Core i5 Processor 12th Gen 12450H']
    },
    {
      id: 4,
      name: "Noise Icon 4",
      category: "watches",
      price: 1999,
      imgUrl: "/assets/Noise icon 4.jpeg",
      specifications: ['Icon 4 with Stunning 1.96 AMOLED Display', 'Metallic Finish', 'Jet Black']
    },
    {
      id: 5,
      name: "Motorola edge 50 fusion",
      category: "Phones",
      price: 19999,
      imgUrl: "/assets/motorola edge 50 fusion.jpeg",
      specifications: ['12GB RAM', '128GB ROM', '7s Gen 2 Processor']
    },
    {
      id: 6,
      name: "ASUS TUF Gaming F 15",
      category: "Laptops",
      price: 55998,
      imgUrl: "/assets/asus tuf.jpeg",
      specifications: ['8GB RAM', '512 GB SSD', 'Intel Core i5 Processor 11th Gen 12450H']
    },
    {
      id: 7,
      name: "Samsung Galaxy Book5 360",
      category: "Laptops",
      price: 99999,
      imgUrl: "/assets/samsung galaxy book5 360.jpeg",
      specifications: ['8GB RAM', '512 GB SSD', 'Intel Core i5 Processor 11th Gen 12350H']
    },
    {
      id: 8,
      name: "Hp 15s Intel core i3 12th Gen",
      category: "Laptops",
      price: 33550,
      imgUrl: "/assets/hp 15s.jpeg",
      specifications: ['8GB RAM', '512 GB SSD', 'Intel Core i3 Processor 12th Gen 12150H']
    },
    {
      id: 9,
      name: "Realme Buds2 wired",
      category: "Headphones",
      price: 699,
      imgUrl: "/assets/realme buds 2 wired.png",
      specifications: ['R155 Model', 'Black', 'Wired DeepBase']
    },

    {
      id: 10,
      name: "boAt Ultima Ember w/ 1.96",
      category: "watches",
      price: 2199,
      imgUrl: "/assets/boAt Ultima Ember.jpeg",
      specifications: ['Ultima Ember w/ 1.96 (4.97cm)AMOLED Screen,', 'Bold Black', 'Personalized Nudges,Functional Crown']
    },
    {
      id: 11,
      name: "boAt Airpods 311 Pro",
      category: "Headphones",
      price: 1299,
      imgUrl: "/assets/boat airpods 311 pro.jpeg",
      specifications: ['311 Pro Airpods', 'Light Pink', 'Wireless DeepBase']
    },
    {
      id: 12,
      name: "Iphone 14 pro 5G",
      category: "Phones",
      price: 169999,
      imgUrl: "/assets/iphone 14 pro.jpeg",
      specifications: ['1 TB ROM', 'A16 Bionic Chip, 6 Core Processor']
    },
    {
      id: 13,
      name: "OnePlus earbuds 3 TWS",
      category: "Headphones",
      price: 2589,
      imgUrl: "/assets/oneplus 3 tws.jpeg",
      specifications: ['Buds 3 E509A', 'Splendid Blue', 'Wireless DeepBase']
    },
    
    {
      id: 14,
      name: "Apple Watch Series 10",
      category: "watches",
      price: 35000,
      imgUrl: "/assets/apple watch series 10.jpeg",
      specifications: ['Magnetic Fast Charger to USB-C Cable', 'Water Resistance', 'Purple']
    },

  ]
  getProducts() {
    return this.products;
  }
}
