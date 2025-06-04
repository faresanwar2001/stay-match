import { BadgeDollarSign, FolderClosed, WalletCards } from "lucide-react";

export default function BalanceDetails() {
  // Variables
  const balanceData = [
    { id:1,balance: "EGP 2,000", title: "Review", icon: <FolderClosed /> },
    { id:2,balance: "EGP 2,000", title: "Review", icon: <FolderClosed /> },
    { id:3,balance: "EGP 2,000", title: "Review", icon: <BadgeDollarSign /> },
    { id:4,balance: "EGP 2,000", title: "Review", icon: <WalletCards /> },
  ];

  return (
    <div className="grid grid-cols-4 gap-5">
      {balanceData.map((item) => (
        <div
          key={item.id}
          className="shadow-md rounded-md py-10 px-5 flex justify-between items-center"
        >
          <div className="flex flex-col gap-1">
            {/* Balance */}
            <h3 className="text-xl font-medium">{item.balance}</h3>

            {/* Title */}
            <p className="text-sm text-[#6D6777]">{item.title}</p>
          </div>

          {/* Icon */}
          <span className="p-3 rounded-md text-white bg-[#A7E92F]">
            {item.icon}
          </span>
        </div>
      ))}
    </div>
  );
}
