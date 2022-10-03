import Car from "./Car";

export default class RacingCar extends Car {
  getCabinWidth(): number {
    new Error("Not implemented");
    // return cabin width
    return 120;
  }

  getCockpitWidth(): number {
    // return cockpit width
    return 110;
  }
}
