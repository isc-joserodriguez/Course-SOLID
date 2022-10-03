import Car from "./Car";
import RacingCar from "./RacingCar";

export default class CarsUtils {
  init() {
    const first = new Car();
    const second = new Car();
    const third = new RacingCar();

    const myCars: Array<Car> = [first, second, third];

    for (const car of myCars) {
      console.log(car.getCabinWidth());
    }
  }
}
