import HealthInsuranceCustomerProfile from "./HealthInsuranceCustomerProfile";
import VehicleInsuranceCustomerProfile from "./VehicleInsuranceCustomerProfile";

export default class InsurancePremiumDiscountCalculator {
  calculatePremiumDiscountPercent(
    customer: HealthInsuranceCustomerProfile | VehicleInsuranceCustomerProfile
  ): number {
    return customer.isLoyalCustomer() ? 20 : 0;
  }
}
