import ProductCatalog from "./ProductCatalog";
import ProductFactory from "./ProductFactory";
import ProductRepository from "./ProductRepository";

export default class ECommerceMainApplication {
  init(): void {
    const productRepository: ProductRepository = ProductFactory.create();

    const productCatalog: ProductCatalog = new ProductCatalog(
      productRepository
    );

    productCatalog.listAllProducts();
  }
}
