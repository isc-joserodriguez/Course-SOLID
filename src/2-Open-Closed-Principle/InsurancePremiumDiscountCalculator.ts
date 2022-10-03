import ICustomerProfile from "./ICustomerProfile";

export default class InsurancePremiumDiscountCalculator {
  calculatePremiumDiscountPercent(
    customer: ICustomerProfile
  ): number {
    return customer.isLoyalCustomer() ? 20 : 0;
  }
}
