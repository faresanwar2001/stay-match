import { Suspense, useState } from "react";
import CommissionOwners from "./_components/owner/page";
import CommissionCustomer from "./_components/customer/page";
export default function Commission() {
  // State
  const [commission, setCommission] = useState<
    "commissionOwners" | "commissionCustomer"
  >("commissionOwners");

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
