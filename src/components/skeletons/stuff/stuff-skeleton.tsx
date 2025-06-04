import { Skeleton } from "@/components/ui/skeleton";

export default function StuffSkeleton() {
  return (
    <div>
      {/* Information */}
      <Skeleton className="h-[215px] w-full"/>

      {/* Table information */}
      <Skeleton className="h-[215px] w-full"/>
    </div>
  );
}
