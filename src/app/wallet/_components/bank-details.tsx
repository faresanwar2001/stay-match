import { Button } from "@/components/ui/button";

export default function BankDetails() {
  return (
    <div>
        {/* Heading */}
      <h3 className="font-medium text-2xl mb-2">Bank Details</h3>

      <div className="shadow-md rounded-md p-7 flex justify-between items-center">
        <div className="flex flex-col gap-3">
            {/* Bank name */}
            <h3 className="font-medium">Bank Name: <span className="font-light">fares</span></h3>

            {/* Account number */}
            <h4 className="font-medium">Account Number: <span className="font-light">1111111111</span></h4>

            {/* IBAN */}
            <p className="font-medium">IBAN: <span className="font-light">3598741235</span></p>

            {/* Account holder name */}
            <p  className="font-medium">Account Holder Name: <span className="font-light">fares</span></p>
        </div>

        <div className="flex flex-col gap-5">
          {/* Save button */}
          <Button className="bg-[#A7E92F] text-white p-2 cursor-pointer">Withrow balance</Button>

          {/* Cancel button */}
          <Button className="bg-[#A7E92F] text-white p-2 cursor-pointer">Add Balance</Button>
        </div>
      </div>
    </div>
  )
}
