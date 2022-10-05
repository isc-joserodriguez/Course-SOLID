import InHouseProduct from "./InHouseProduct";
import Product from "./Product";

export default class PricingUtils {
  init(): void {
    const p1 = new Product();
    const p2 = new Product();
    const p3 = new InHouseProduct();

    const productList: Array<Product> = [p1, p2, p3];

    productList.forEach((product) => {
      console.log(product.getDiscount());
    });
  }
}
