import { BadgeDollarSign, ChartPie, UsersRound } from "lucide-react";

export default function ActiveTransactions() {
  return (
    <div className="rounded-md shadow-md  w-full p-5 ">
      {/* Heading */}
      <h2 className="font-medium mb-2">Active Transactions</h2>

      {/* Description */}
      <p className="text-[#A3A2A6] lg:text-[18px] text-sm  mb-4">
        This transactions will change Automatically By Users Activity
      </p>

      {/* Options */}
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-3 justify-between px-5">
        {/* Empty Properties */}
        <div className="flex lg:flex-row flex-col items-center lg:text-start text-center gap-3">
          {/* icons */}
          <div className="bg-[#8C57FF] rounded-md p-3 text-white">
            <ChartPie />
          </div>

          {/* Description */}
          <div>
            {/* Heading */}
            <h4 className="text-[#6D6777]">Empty properties</h4>

            {/* Quantity */}
            <p className="font-medium">245k</p>
          </div>
        </div>

        {/* Ranted Properties */}
        <div className="flex lg:flex-row flex-col items-center lg:text-start text-center gap-3">
          {/* icons */}
          <div className="bg-[#56CA00] rounded-md p-3 text-white">
            <UsersRound />
          </div>

          {/* Description */}
          <div>
            {/* Heading */}
            <h4 className="text-[#6D6777]">Rented Properties</h4>

            {/* Quantity */}
            <p className="font-medium">12.5k</p>
          </div>
        </div>

        {/* Pending payments */}
        <div className="flex lg:flex-row flex-col items-center lg:text-start text-center gap-3">
          {/* icons */}
          <div className="bg-[#16B1FF] rounded-md p-3 text-white">
            <BadgeDollarSign />
          </div>

          {/* Description */}
          <div>
            {/* Heading */}
            <h4 className="text-[#6D6777]">Pending Payments</h4>

            {/* Quantity */}
            <p className="font-medium">$88k</p>
          </div>
        </div>
      </div>
    </div>
  );
}
