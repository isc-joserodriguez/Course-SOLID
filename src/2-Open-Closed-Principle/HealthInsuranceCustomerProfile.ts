import ICustomerProfile from "./ICustomerProfile";

export default class HealthInsuranceCustomerProfile
  implements ICustomerProfile
{
  isLoyalCustomer(): boolean {
    return true; // or false
  }
}
