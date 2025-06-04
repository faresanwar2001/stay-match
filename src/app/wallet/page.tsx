import { Suspense } from "react";
import BalanceDetails from "./_components/balance-deatails";
import BankDetails from "./_components/bank-details";
import WalletDetails from "./_components/wallet-details";
import ChargesTable from "./_components/charges-table";
import WithrowTable from "./_components/withrow.table";

export default function Wallet() {
  // Variables
  const chargesTable:Charges[] =[
    {id:"#5089", issuedDate:"09 May 2020", amount:"EGP3077", balance:"EGP3077", status:"paid"},
    {id:"#5089", issuedDate:"09 May 2020", amount:"EGP3077", balance:"EGP3077", status:"paid"},
    {id:"#5089", issuedDate:"09 May 2020", amount:"EGP3077", balance:"EGP3077", status:"paid"},
    {id:"#5089", issuedDate:"09 May 2020", amount:"EGP3077", balance:"EGP3077", status:"paid"},
    {id:"#5089", issuedDate:"09 May 2020", amount:"EGP3077", balance:"EGP3077", status:"paid"},
    {id:"#5089", issuedDate:"09 May 2020", amount:"EGP3077", balance:"EGP3077", status:"paid"},
    {id:"#5089", issuedDate:"09 May 2020", amount:"EGP3077", balance:"EGP3077", status:"paid"},
    {id:"#5089", issuedDate:"09 May 2020", amount:"EGP3077", balance:"EGP3077", status:"paid"},
    {id:"#5089", issuedDate:"09 May 2020", amount:"EGP3077", balance:"EGP3077", status:"paid"},
    {id:"#5089", issuedDate:"09 May 2020", amount:"EGP3077", balance:"EGP3077", status:"paid"},
  ]
  return (
    <Suspense fallback={"loading..........."}>
      {/* Balance Details */}
      <BalanceDetails/>

      <div className="grid grid-cols-2 gap-10 mt-10">
        {/* Bank details */}
        <BankDetails/>

        {/* Wallet details */}
        <WalletDetails/>
      </div>

      <div className="grid grid-cols-2 gap-10 mt-10">
      {/* Charges table */}
      <ChargesTable charges={chargesTable}/>

      {/* Withrow table */}
      <WithrowTable withrow={chargesTable}/>
      </div>
    </Suspense>
  )
}
