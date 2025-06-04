type CustomersProps={
  customers:OwnerCustomers[]
}
export default function TableOwners({customers}:CustomersProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              DATE
            </th>
            <th scope="col" className="px-6 py-3">
              AMOUNT
            </th>
            <th scope="col" className="px-6 py-3">
              PERCENTAGE
            </th>
          </tr>
        </thead>
        <tbody>
            {customers.map((customer)=><tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                {/* Date */}
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {customer.date}
            </th>

            {/* Amount */}
            <td className="px-6 py-4">{customer.amount}</td>

            {/* Percentage */}
            <td className="px-6 py-4">{customer.percentage}</td>
          </tr>)}
          
        </tbody>
      </table>
    </div>
  );
}
