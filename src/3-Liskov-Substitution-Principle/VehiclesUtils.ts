import Car from "./Car";
import RacingCar from "./RacingCar";
import Vehicle from "./Vehicle";

export default class VehiclesUtils {
  init() {
    const first = new Car();
    const second = new Car();
    const third = new RacingCar();

    const myVehicles: Array<Vehicle> = [first, second, third];

    for (const vehicle of myVehicles) {
      console.log(vehicle.getInteriorWidth());
    }
  }
}
