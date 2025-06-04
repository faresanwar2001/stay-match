import { Suspense } from "react";
import TableCustomers from "./table-customers";
import SwitchCommission from "../../switch-commission";
import CalculateCustomers from "./culculate-customers";

type CommissionCustomerProps = {
  commission: "commissionCustomer" | "commissionOwners";
  setCommission: () => void;
};

type CustomersAndOwners = { date: string; amount: string; Percentage: string };

export default function CommissionCustomer({
  commission,
  setCommission,
}: CommissionCustomerProps) {
  // Variables
  const customerData: CustomersAndOwners[] = [
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", Percentage: "10%" },
  ];

  return (
    <Suspense fallback={"loading......"}>
      {/* Heading */}
      <h1 className="font-medium text-3xl">Customer Commission Plans</h1>

      <div className="grid grid-cols-2">
        <div>
          {/* Switch commission */}
          <SwitchCommission
            commission={commission}
            setCommission={setCommission}
          />

          {/* Calculate customers */}
          <CalculateCustomers />
        </div>

        {/* Table customers */}
        <TableCustomers customers={customerData} />
      </div>
    </Suspense>
  );
}
