import Vehicle from "./Vehicle";

export default class RacingCar extends Vehicle {
  getInteriorWidth(): number {
    return this.getCockpitWidth();
  }

  getCockpitWidth(): number {
    // return cockpit width
    return Number();
  }
}
