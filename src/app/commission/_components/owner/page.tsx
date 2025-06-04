import { Suspense } from "react";
import TableOwners from "./table-owner";
import SwitchCommission from "../../switch-commission";
import CalculateOwners from "./calaculate-owners";

type CommissionCustomerProps = {
  commission: "commissionCustomer" | "commissionOwners";
  setCommission: () => void;
};
export default function CommissionOwners({
  commission,
  setCommission,
}: CommissionCustomerProps) {
  // Variables
  const customerData = [
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
      <h1 className="font-medium text-3xl">Owner Commission Plans</h1>

      <div className="grid grid-cols-2">
        <div>
          {/* Switch commission */}
        <SwitchCommission
          commission={commission}
          setCommission={setCommission}
        />

        <CalculateOwners/>

        </div>

        {/* Table customers */}
        <TableOwners customers={customerData} />
      </div>
    </Suspense>
  );
}
