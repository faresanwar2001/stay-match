import { Suspense, useState } from "react";
import CommissionOwners from "./_components/owner/page";
import CommissionCustomer from "./_components/customer/page";
import SwitchCommission from "./switch-commission"; 

type CommissionType = "commissionOwners" | "commissionCustomer";

export default function Commission() {
  const [commission, setCommission] = useState<CommissionType>("commissionOwners");

  return (
    <Suspense fallback={"loading........."}>
      <SwitchCommission commission={commission} setCommission={setCommission} />

      {commission === "commissionOwners" ? (
        <CommissionOwners commission={commission} setCommission={setCommission} />
      ) : (
        <CommissionCustomer commission={commission} setCommission={setCommission} />
      )}
    </Suspense>
  );
}

