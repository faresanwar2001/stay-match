import { Suspense } from "react";
import OwnerInformation from "./_components/owner-information";
import OwnerOptions from "./_components/owner-options";

export default function OwnerDetails() {
  return (
    <Suspense fallback={"loading.........."}>
      <div>
        <section className="flex gap-4">
          {/* Owner details */}
          <div className="w-[30%]">
            <OwnerInformation />
          </div>
        
          {/* Owner options */}
          <div className="w-[70%]">
            <OwnerOptions />
          </div>
        </section>
      </div>
    </Suspense>
  );
}
