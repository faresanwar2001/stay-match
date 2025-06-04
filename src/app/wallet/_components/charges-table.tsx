import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
type ChargesProps={
  charges:Charges[]
}
export default function ChargesTable({ charges }:ChargesProps) {
  return (
    <div>
    {/* Heading */}
    <h2 className="text-2xl font-medium mb-2">Charges</h2>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            #ID
          </th>
          <th scope="col" className="px-6 py-3">
            ISSUED DATE
          </th>
          <th scope="col" className="px-6 py-3">
            AMOUNT
          </th>
          <th scope="col" className="px-6 py-3">
            BALANCE
          </th>
          <th scope="col" className="px-6 py-3">
            STATUS
          </th>
        </tr>
      </thead>
      <tbody>
        {charges.map((item) => (
          <tr
            key={item.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-5"
            >
              {item.id}
            </th>

            {/* user */}
            <td className="px-6 py-4">{item.issuedDate}</td>

            {/* Phone */}
            <td className="px-6 py-4">{item.amount}</td>

            {/* Generated Date */}
            <td className="px-6 py-4">{item.balance}</td>

            {/* Status */}
            <td className={`px-6 py-4`}>
              <span
                className={`${
                  item.status === "paid"
                    ? "text-[#56CA00] bg-[#E4F7D6] py-2 px-4 rounded-full"
                    : "text-[#8A8D93] bg-[#ECEDEE] py-2 px-4 rounded-full"
                }`}
              >
                {item.status}
              </span>
            </td>

            {/* Actions */}
            <td className="flex items-center gap-3">
              {/* Show */}
              <Link to={`/owners/ownerDetails/${item.id}`}>
                <Eye className="w-5 h-5" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
