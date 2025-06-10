import { Suspense } from "react";
import OwnerInformation from "./_components/owner-information";
import OwnerOptions from "./_components/owner-options";

export default function OwnerDetails() {
  return (
    <Suspense fallback={"loading.........."}>
      <div>
        <section className="flex lg:flex-row flex-col gap-4">
          {/* Owner details */}
          <div className="lg:w-[30%] w-full">
            <OwnerInformation />
          </div>
        
          {/* Owner options */}
          <div className="lg:w-[70%] w-full">
            <OwnerOptions />
          </div>
        </section>
      </div>
    </Suspense>
  );
}
