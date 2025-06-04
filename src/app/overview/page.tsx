import OverviewSkeleton from "@/components/skeletons/overview/overview-skeleton";
import { lazy, Suspense } from "react";
const ActiveTransactions= lazy(()=>import("./_components/active-transactions"))
const OwnersCustomers= lazy(()=>import("./_components/owners-customers"))
const ProfitChart= lazy(()=>import("./_components/profit-chart"))
const UnitsCurrently= lazy(()=>import("./_components/units-currently"))
const WalletGraphs= lazy(()=>import("./_components/wallet-graphs"))

export default function Overview() {
  return (
    <Suspense fallback={<OverviewSkeleton/>}>
      <div className="flex lg:flex-row flex-col gap-5">
        {/* content & Graphs */}
        <div className="lg:w-[70%] w-full">
          {/* Owners & Customers */}
          <OwnersCustomers />

          {/* Active transactions */}
          <ActiveTransactions />
        </div>

        {/* Data */}
        <div className="lg:w-[30%] w-full">
          <UnitsCurrently />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5">
        {/* Wallet graphs */}
        <WalletGraphs />

        {/* Profit chart */}
        <ProfitChart />
      </div>
    </Suspense>
  );
}
