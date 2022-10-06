import ProductRepository from "./ProductRepository";

export default class SQLProductRepository implements ProductRepository {
  getAllProductNames(): Array<string> {
    return ["soap", "toothpaste "];
  }
}
