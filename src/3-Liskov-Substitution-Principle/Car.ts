import Vehicle from "./Vehicle";

export default class Car extends Vehicle {
  getInteriorWidth(): number {
    return this.getCabinWidth();
  }
  getCabinWidth(): number {
    // return cabin width
    return Number();
  }
}
