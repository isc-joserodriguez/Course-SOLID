import ProductFactory from "./ProductFactory";
import ProductRepository from "./ProductRepository";

export default class ProductCatalog {
  listAllProducts(): void {
    const productRepository: ProductRepository = ProductFactory.create();

    const allProductNames: Array<string> =
      productRepository.getAllProductNames();

    // Display product names
  }
}
