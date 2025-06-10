import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChartPie,
  EllipsisVertical,
  Eye,
  Trash,
  UserRound,
} from "lucide-react";
import { TablePagination } from "./table-pagination";
import AddUserDialog from "@/components/common/addUser-dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type TableInformationProps={
  users:Stuff[]
}
export default function TableInformation({ users }:TableInformationProps) {
  return (
    <div className="relative overflow-x-auto sm:rounded-lg py-10 px-2">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
    
    {/* Entries */}
    <div className="flex flex-wrap items-center gap-2">
      <span>Show</span>
      <Select>
        <SelectTrigger className="w-[70px]">
          <SelectValue placeholder="10" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"user"}>User</SelectItem>
          <SelectItem value={"admin"}>Admin</SelectItem>
        </SelectContent>
      </Select>
      <span>entries</span>
    </div>

    {/* Role */}
    <div className="md:hidden flex">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"user"}>User</SelectItem>
          <SelectItem value={"admin"}>Admin</SelectItem>
        </SelectContent>
      </Select>
    </div>

    {/* Right: Actions */}
    <div className="flex flex-wrap items-center gap-3 md:gap-5">
      <AddUserDialog />
      <Input
        type="text"
        placeholder="Search User"
        className="border-[#727272] w-[170px] sm:w-[193px]"
      />
      <div className="hidden md:block">
        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"user"}>User</SelectItem>
            <SelectItem value={"admin"}>Admin</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>

  {/* Table wrapper */}
  <div className="w-full overflow-x-auto">
    <table className="w-full min-w-[800px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600"
              />
              <label htmlFor="checkbox-all-search" className="sr-only">
                checkbox
              </label>
            </div>
          </th>
          <th className="px-6 py-3">USER</th>
          <th className="px-6 py-3">EMAIL</th>
          <th className="px-6 py-3">ROLE</th>
          <th className="px-6 py-3">STATUS</th>
          <th className="px-6 py-3">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item) => (
          <tr
            key={item.email}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="w-4 p-4">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
              />
            </td>
            <th className="px-6 py-4 flex items-center gap-5 font-medium text-gray-900 dark:text-white whitespace-nowrap">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="flex flex-col">
                {item.name}
                <span className="text-[#6D6777] text-sm font-light">{item.userName}</span>
              </span>
            </th>
            <td className="px-6 py-4">{item.email}</td>
            <td className="px-6 py-4">
              <span className="flex gap-1">
                {item.role === "Maintainer" ? (
                  <ChartPie className="text-[#56CA00]" />
                ) : (
                  <UserRound className="text-[#8C57FF]" />
                )}
                {item.role}
              </span>
            </td>
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
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <Trash className="w-5 h-5" />
                <Eye className="w-5 h-5" />
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
