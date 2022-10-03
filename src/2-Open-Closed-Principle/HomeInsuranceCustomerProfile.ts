import ICustomerProfile from "./ICustomerProfile";

export default class HomeInsuranceCustomerProfile 
  implements ICustomerProfile 
{
  isLoyalCustomer(): boolean {
    return true; // or false
  }
}
