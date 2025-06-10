import { Button } from "@/components/ui/button";
import { BadgeDollarSign, Gift, MessageSquare, Star } from "lucide-react";

export default function OwnerOptions() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
      {/* Wallet Balance */}
      <div className="shadow-md rounded-md p-5">
        <div className="flex justify-between items-center">
          {/* icon */}
          <div className="p-3 rounded-md bg-[#A7E92F] text-white">
            <BadgeDollarSign />
          </div>

          {/* Button */}
          <Button className="bg-[#A7E92F] text-white p-2 rounded-md shadow-md">
            Add Balance
          </Button>
        </div>

        <div>
          {/* Heading */}
          <h3 className="my-3">Wallet Balance</h3>

          {/* Credit left */}
          <p className="text-[#A7E92F] font-medium ">
            $2345<span className="text-black font-light pl-1">Credit Left</span>
          </p>

          {/* Credit left */}
          <p className="text-[#A7E92F] font-medium">
            $2345<span className="text-black font-light pl-1">Credit Left</span>
          </p>
        </div>
      </div>

      {/* Reviews */}
      <div className="shadow-md rounded-md p-5">
        <div className="flex justify-between items-center">
          {/* icon */}
          <div className="p-3 rounded-md bg-[#A7E92F] text-white">
            <Star />
          </div>

          {/* Button */}
          <Button className="bg-[#FF4C51] text-white p-2 rounded-md shadow-md">
            Add Balance
          </Button>
        </div>

        <div>
          {/* Heading */}
          <h3 className="my-3">Reviews</h3>

          {/* Credit left */}
          <p className="text-[#A7E92F] font-medium ">
            15<span className="text-black font-light pl-1">Good Review</span>
          </p>

          {/* Credit left */}
          <p className="text-[#A7E92F] font-medium">
            10<span className="text-black font-light pl-1">Bad Review</span>
          </p>
        </div>
      </div>

      {/* Referrals */}
      <div className="shadow-md rounded-md p-5">
        <div className="flex justify-between items-center">
          {/* icon */}
          <div className="p-3 rounded-md bg-[#A7E92F] text-white">
            <Gift />
          </div>
        </div>

        <div>
          {/* Heading */}
          <h3 className="my-3">Referrals</h3>

          {/* Credit left */}
          <p className="text-[#A7E92F] font-medium ">
            15<span className="text-black font-light pl-1">Referring Code</span>
          </p>

          {/* Credit left */}
          <p className="text-[#A7E92F] font-medium">
            10<span className="text-black font-light pl-1">Referring points</span>
          </p>
        </div>
      </div>

      {/* Chat */}
      <div className="shadow-md rounded-md p-5">
        <div className="flex justify-between items-center">
          {/* icon */}
          <div className="p-3 rounded-md bg-[#A7E92F] text-white">
            <MessageSquare />
          </div>

          {/* Button */}
          <Button className="bg-[#433C50] text-white p-2 rounded-md shadow-md">
            Open chat
          </Button>
        </div>

        <div>
          {/* Heading */}
          <h3 className="my-3">Chat</h3>

          {/* Credit left */}
          <p className="text-[#A7E92F] font-medium ">
            15<span className="text-black font-light pl-1">Closed chat</span>
          </p>
        </div>
      </div>
    </div>
  );
}
