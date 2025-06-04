import { Skeleton } from "@/components/ui/skeleton";

export default function OverviewSkeleton() {
  return (
    <>
      <div className="flex lg:flex-row flex-col gap-5 bg-[#FFFFFF]">
        {/* content & Graphs */}
        <div className="lg:w-[70%] w-full flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
          {/* Owners & Customers */}
          <Skeleton className="h-[200px] w-full rounded-xl"/>
          <Skeleton className="h-[200px] w-full rounded-xl"/>
          </div>

          {/* Active transactions */}
          <Skeleton className="h-[200px] w-full rounded-xl"/>
        </div>

        {/* Data */}
        <div className="lg:w-[30%] w-full">
          <Skeleton className="h-[400px] w-full rounded-xl"/>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5">
        {/* Wallet graphs */}
        <Skeleton className="h-[350px] w-full rounded-xl"/>

        {/* Profit chart */}
        <Skeleton className="h-[350px] w-full rounded-xl"/>
      </div>      
    </>
  )
}
