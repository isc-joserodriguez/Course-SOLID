import ProductRepository from "./ProductRepository";

export default class ProductCatalog {
  private productRepository: ProductRepository;
  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  listAllProducts(): void {
    const allProductNames: Array<string> =
      this.productRepository.getAllProductNames();
    // Display product names
  }
}
