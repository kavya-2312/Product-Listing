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
      category: "Phone",
      price: 44999,
      imgUrl: "/assets/samsung galaxy a56.jpeg",
      specifications: ['12GB RAM', '256GB ROM', 'Samsung Exynos 1580 Processor']
    },
    {
      id: 2,
      name: "Realme Narzo 50 pro 5G",
      category: "Phone",
      price: 27999,
      imgUrl: "/assets/realme narzo 50 pro.jpeg",
      specifications: ['6GB RAM', '128 GB ROM', 'Dimensity 920 5G Processor']
    },

    {
      id: 3,
      name: "Lenova Ideapad Slim 3",
      category: "Laptop",
      price: 49999,
      imgUrl: "/assets/lenova ideapad.jpeg",
      specifications: ['16GB RAM', '512 GB SSD', 'Intel Core i5 Processor 12th Gen 12450H']
    },
    {
      id: 4,
      name: "Motorola edge 50 fusion",
      category: "Phone",
      price: 19999,
      imgUrl: "/assets/motorola edge 50 fusion.jpeg",
      specifications: ['12GB RAM', '128GB ROM', '7s Gen 2 Processor']
    },
    {
      id: 5,
      name: "ASUS TUF Gaming F 15",
      category: "Laptop",
      price: 55998,
      imgUrl: "/assets/asus tuf.jpeg",
      specifications: ['8GB RAM', '512 GB SSD', 'Intel Core i5 Processor 11th Gen 12450H']
    },
    {
      id: 6,
      name: "Samsung Galaxy Book5 360",
      category: "Laptop",
      price: 99999,
      imgUrl: "/assets/samsung galaxy book5 360.jpeg",
      specifications: ['8GB RAM', '512 GB SSD', 'Intel Core i5 Processor 11th Gen 12350H']
    },
    {
      id: 7,
      name: "Hp 15s Intel core i3 12th Gen",
      category: "Laptop",
      price: 33550,
      imgUrl: "/assets/hp 15s.jpeg",
      specifications: ['8GB RAM', '512 GB SSD', 'Intel Core i3 Processor 12th Gen 12150H']
    },
    {
      id: 8,
      name: "Realme Buds2 wired",
      category: "Headphone",
      price: 699,
      imgUrl: "/assets/realme buds 2 wired.png",
      specifications: ['R155 Model', 'Black', 'Wired DeepBase']
    },
    {
      id: 9,
      name: "Boat Airpods 311 Pro",
      category: "Headphone",
      price: 1299,
      imgUrl: "/assets/boat airpods 311 pro.jpeg",
      specifications: ['311 Pro Airpods', 'Light Pink', 'Wireless DeepBase']
    },
    {
      id: 10,
      name: "OnePlus earbuds 3 TWS",
      category: "Headphone",
      price: 2589,
      imgUrl: "/assets/oneplus 3 tws.jpeg",
      specifications: ['Buds 3 E509A', 'Splendid Blue', 'Wireless DeepBase']
    },
    {
      id: 10,
      name: "Iphone 14 pro 5G",
      category: "Phone",
      price: 169999,
      imgUrl: "/assets/iphone 14 pro.jpeg",
      specifications: ['1 TB ROM', 'A16 Bionic Chip, 6 Core Processor']
    },
  ]
  getProducts() {
    return this.products;
  }
}
