import { Suspense, useState } from "react";
import CommissionOwners from "./_components/owner/page";
import CommissionCustomer from "./_components/customer/page";

type CommissionType = "commissionOwners" | "commissionCustomer";

export default function Commission() {
  const [commission, setCommission] = useState<CommissionType>("commissionOwners");

  return (
    <Suspense fallback={"loading........."}>

      {commission === "commissionOwners" ? (
        <CommissionOwners commission={commission} setCommission={setCommission} />
      ) : (
        <CommissionCustomer commission={commission} setCommission={setCommission} />
      )}
    </Suspense>
  );
}

