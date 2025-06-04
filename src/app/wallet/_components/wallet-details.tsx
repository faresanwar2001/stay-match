import AddBalance from '@/components/common/add-balance'

export default function WalletDetails() {
  return (
   <div>
        {/* Heading */}
      <h3 className="font-medium text-2xl mb-2">Wallet Details</h3>

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


          {/* Add balance button */}
          <AddBalance/>
      </div>
    </div>
  )
}
