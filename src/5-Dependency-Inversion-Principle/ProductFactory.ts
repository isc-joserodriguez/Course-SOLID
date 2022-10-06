import ProductRepository from "./ProductRepository";
import SQLProductRepository from "./SQLProductRepository";

export default class ProductFactory {
    static create(): ProductRepository {
    return new SQLProductRepository();
  }
}
