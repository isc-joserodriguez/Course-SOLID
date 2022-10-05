import Product from "./Product";

export default class InHouseProduct extends Product {
  getDiscount(): number {
    this.applyExtraDiscount();
    return this.discount;
  }
  applyExtraDiscount(): void {
    this.discount = this.discount * 0.15;
  }
}
