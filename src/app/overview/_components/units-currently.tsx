import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function UnitsCurrently() {
  // Variables
  const unitsData = [
    { title: "#3221", Date: "21 Jul | 08:20-10.30" },
    { title: "#3221", Date: "21 Jul | 08:20-10.30" },
    { title: "#3221", Date: "21 Jul | 08:20-10.30" },
    { title: "#3221", Date: "21 Jul | 08:20-10.30" },
    { title: "#3221", Date: "21 Jul | 08:20-10.30" },
    { title: "#3221", Date: "21 Jul | 08:20-10.30" },
    { title: "#3221", Date: "21 Jul | 08:20-10.30" },
    { title: "#3221", Date: "21 Jul | 08:20-10.30" },
    { title: "#3221", Date: "21 Jul | 08:20-10.30" },
    { title: "#3221", Date: "21 Jul | 08:20-10.30" },
    { title: "#3221", Date: "21 Jul | 08:20-10.30" },
    { title: "#3221", Date: "21 Jul | 08:20-10.30" },
    { title: "#3221", Date: "21 Jul | 08:20-10.30" },
    { title: "#3221", Date: "21 Jul | 08:20-10.30" },
  ];

  return (
    <div className="py-5 px-10 shadow-md rounded-md h-95 overflow-y-auto scrollbar-hide">
      {/* Heading */}
      <h3 className="font-medium text-base mb-5">Units Currently Reserved</h3>

      {/* Data */}
      {unitsData.map(({ title, Date }) => (
        <div key={title} className="flex items-center mb-3">
          {/* Avatar */}
          <Avatar className="mr-5">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/* Title & Date */}
          <div className="lg:mr-35 mr-12">
            {/* Title */}
            <h3>{title}</h3>

            {/* Date */}
            <p className="text-[#6D6777] font-light text-sm">{Date}</p>
          </div>

          {/* Open button */}
          <Button className="bg-[#A7E92F] text-black cursor-pointer hover:bg-yellow-300 font-medium text-sm">Open</Button>
        </div>
      ))}
    </div>
  );
}
