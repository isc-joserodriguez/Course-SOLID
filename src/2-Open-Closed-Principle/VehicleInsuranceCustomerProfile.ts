import ICustomerProfile from "./ICustomerProfile";

export default class VehicleInsuranceCustomerProfile
  implements ICustomerProfile
{
  isLoyalCustomer(): boolean {
    return true; // or false
  }
}
