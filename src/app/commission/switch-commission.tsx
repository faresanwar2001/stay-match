import { Switch } from "@/components/ui/switch";

type SwitchCommissionProps = {
  commission: "commissionOwners" | "commissionCustomer";
  setCommission: React.Dispatch<React.SetStateAction<"commissionOwners" | "commissionCustomer">>;
};

export default function SwitchCommission({ commission, setCommission }: SwitchCommissionProps) {
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
            cursor: "pointer",
          }}
        />

        {/* Customer */}
        <p className="text-[#6D6777] text-3xl">Customer</p>
      </div>
    </div>
  );
}
