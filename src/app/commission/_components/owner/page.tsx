import { Suspense } from "react";
import TableOwners from "./table-owner";
import SwitchCommission from "../../switch-commission";
import CalculateOwners from "./calaculate-owners";

type CommissionProps = {
  commission: "commissionOwners" | "commissionCustomer";
  setCommission: React.Dispatch<React.SetStateAction<"commissionOwners" | "commissionCustomer">>;
};
export default function CommissionOwners({
  commission,
  setCommission,
}: CommissionProps) {
  // Variables
  const customerData:OwnerCustomers[] = [
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
    { date: "15-11-2024", amount: "1300 EGP", percentage: "10%" },
  ];

  return (
    <Suspense fallback={"loading......"}>
      {/* Heading */}
      <h1 className="font-medium lg:text-3xl text-2xl">Owner Commission Plans</h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-8">
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
