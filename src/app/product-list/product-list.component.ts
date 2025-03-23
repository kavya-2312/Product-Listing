import { Component, HostListener } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: any[] = [];
  filteredProducts: any[] = [];
  suggestions: any[] = [];
  expandedProduct: String | null = null;
  searchTerm = '';
  currentPage = 1;
  itemsPerPage = 3;
  noProductsFound = false;
  pageCount:any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
  }

  onSearchInput() {
    this.searchTerm = this.searchTerm.trim();

    if (!this.searchTerm) {
      this.resetSearch();
      return;
    }

    const nameSuggestions = this.products
      .filter(product => product.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .map(product => product.name);

    const categorySuggestions = this.products
      .filter(product => product.category.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .map(product => product.category);

    this.suggestions = Array.from(new Set([...nameSuggestions, ...categorySuggestions])).slice(0, 5);

    this.noProductsFound = this.suggestions.length === 0;
  }
  
  searchProducts(term: string) {
    this.searchTerm = term.trim();
    this.filteredProducts = this.searchTerm
      ? this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(this.searchTerm.toLowerCase())

      )
      : [...this.products];

    this.suggestions = [];
    this.noProductsFound = this.filteredProducts.length === 0;
  }

  selectSuggestion(suggestion: string) {
    this.searchProducts(suggestion);
  }

  paginatedItems(page: any) {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(start, start + this.itemsPerPage);
  }

  setPagination() {
    this.pageCount = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    return Array.from({ length: this.pageCount }, (_, i) => i + 1)
  }

  onPageChange(page: any) {
    if (page >= 1 && page <= this.pageCount) {
      this.currentPage = page;
    }
  }

  toggleDetails(productName: string) {
    this.expandedProduct = this.expandedProduct === productName ? null : productName;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!(event.target as HTMLElement).closest('.search-container')) {
      this.suggestions = [];
    }
  }

  private resetSearch() {
    this.searchTerm = '';
    this.filteredProducts = [...this.products];
    this.suggestions = [];
    this.noProductsFound = false;
  }
}
