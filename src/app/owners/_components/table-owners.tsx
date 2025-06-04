import { EllipsisVertical, Eye, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TablePagination } from "@/app/stuff/_components/table-pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
type TableOwnersProps={
owners: ownersDataTypes[]
}
export default function TableOwners({ owners }:TableOwnersProps) {
  return (
    <div className="relative overflow-x-auto sm:rounded-lg py-10">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-1">
          {/* show */}
          <span>Show</span>

          {/* Options */}
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"user"}>User</SelectItem>
              <SelectItem value={"admin"}>Admin</SelectItem>
            </SelectContent>
          </Select>

          {/*  Entries */}
          <span> entries</span>
        </div>

         {/* Search user */}
        <div className="flex items-center gap-1">
          <p>Search:</p>
          <Input
            type="text"
            placeholder="Search User"
            className="border-[#727272] w-[193px]"
          />
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              NAME
            </th>
            <th scope="col" className="px-6 py-3">
              USER
            </th>
            <th scope="col" className="px-6 py-3">
              PHONE
            </th>
            <th scope="col" className="px-6 py-3">
              GENERATED DATE
            </th>
            <th scope="col" className="px-6 py-3">
              REVENUES
            </th>
            <th scope="col" className="px-6 py-3">
              NO. PROPERTIES
            </th>
            <th scope="col" className="px-6 py-3">
              STATUS
            </th>
            <th scope="col" className="px-6 py-3">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          {owners.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-5"
              >
                {item.name}
              </th>

              {/* user */}
              <td className="px-6 py-4">{item.user}</td>

              {/* Phone */}
              <td className="px-6 py-4">{item.phone}</td>

              {/* Generated Date */}
              <td className="px-6 py-4">{item.generatedDate}</td>

              {/* Revenues */}
              <td className="px-6 py-4">{item.revenues}</td>

              {/* No Properties */}
              <td className="px-6 py-4">{item.noProperties}</td>

              {/* Status */}
              <td className={`px-6 py-4`}>
                <span
                  className={`${
                    item.status === "Active"
                      ? "text-[#56CA00] bg-[#E4F7D6] py-2 px-4 rounded-full"
                      : "text-[#8A8D93] bg-[#ECEDEE] py-2 px-4 rounded-full"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              {/* Actions */}
              <td className="flex items-center gap-3">
                {/* Delete */}
                <Trash className="w-5 h-5" />

                {/* Show */}
                <Link to={`ownerDetails/${item.id}`}><Eye className="w-5 h-5" /></Link>

                {/* options */}
                <EllipsisVertical className="w-5 h-5" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <TablePagination />
    </div>
  );
}
