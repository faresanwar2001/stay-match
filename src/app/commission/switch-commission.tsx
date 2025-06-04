import { Switch } from "@/components/ui/switch";

export default function SwitchCommission({ commission, setCommission }) {
  const toggleCommission = () => {
    setCommission(
      commission === "commissionOwners" ? "commissionCustomer" : "commissionOwners"
    );
  };

  return (
    <div className="mt-7">
      <div className="flex items-center justify-center gap-4">
        {/* Owner */}
        <p className="text-[#6D6777] text-3xl">Owner</p>

        <Switch
          checked={commission === "commissionCustomer"}
          onCheckedChange={toggleCommission}
          style={{
            backgroundColor: "#A7E92F",
            width: "32px",
            height: "18px",
            cursor:"Pointer"
          }}
        />

        {/* Customer */}
        <p className="text-[#6D6777] text-3xl">Customer</p>
      </div>
    </div>
  );
}