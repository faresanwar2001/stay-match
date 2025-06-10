import { EllipsisVertical, Eye, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TablePagination } from "@/app/stuff/_components/table-pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

type TableOwnersProps = {
  owners: ownersDataTypes[];
};
export default function TableOwners({ owners }: TableOwnersProps) {
  return (
    <div className="relative overflow-x-auto sm:rounded-lg py-10">
      {/* Show Entries & Search */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">
        {/* Show Entries */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <div className="flex items-center gap-1">
            <span>Show</span>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"user"}>User</SelectItem>
                <SelectItem value={"admin"}>Admin</SelectItem>
              </SelectContent>
            </Select>

            <span> entries</span>
          </div>
        </div>

        {/* Search User */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <p>Search:</p>
          <Input
            type="text"
            placeholder="Search User"
            className="border-[#727272] w-full sm:w-[193px]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[800px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">NAME</th>
              <th className="px-6 py-3">USER</th>
              <th className="px-6 py-3">PHONE</th>
              <th className="px-6 py-3">GENERATED DATE</th>
              <th className="px-6 py-3">REVENUES</th>
              <th className="px-6 py-3">NO. PROPERTIES</th>
              <th className="px-6 py-3">STATUS</th>
              <th className="px-6 py-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {owners.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-5"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.user}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.generatedDate}</td>
                <td className="px-6 py-4">{item.revenues}</td>
                <td className="px-6 py-4">{item.noProperties}</td>
                <td className="px-6 py-4">
                  <span
                    className={`${
                      item.status === "Active"
                        ? "text-[#56CA00] bg-[#E4F7D6]"
                        : "text-[#8A8D93] bg-[#ECEDEE]"
                    } py-2 px-4 rounded-full`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Trash className="w-5 h-5" />
                    <Link to={`ownerDetails/${item.id}`}>
                      <Eye className="w-5 h-5" />
                    </Link>
                    <EllipsisVertical className="w-5 h-5" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <TablePagination />
    </div>
  );
}
