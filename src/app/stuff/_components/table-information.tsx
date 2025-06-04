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
    <div className="relative overflow-x-auto  sm:rounded-lg py-10">
      <div className="flex items-center justify-between mb-3">
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

        <div className="flex items-center gap-5">
          {/* Add user */}
          <AddUserDialog />

          {/* Search user */}
          <Input
            type="text"
            placeholder="Search User"
            className="border-[#727272] w-[193px]"
          />
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>
          <SelectContent className="shadow-md">
            <SelectItem value={"user"}>User</SelectItem>
            <SelectItem value={"admin"}>Admin</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              USER
            </th>
            <th scope="col" className="px-6 py-3">
              EMAIL
            </th>
            <th scope="col" className="px-6 py-3">
              ROLE
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
          {users.map((item) => (
            <tr
              key={item.email}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-5"
              >
                {/* Picture */}
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                {/* Name */}
                <span className="flex flex-col">
                  {item.name}{" "}
                  <span className="text-[#6D6777] text-sm font-light">
                    {item.userName}
                  </span>
                </span>
              </th>

              {/* Email */}
              <td className="px-6 py-4">{item.email}</td>

              {/* Role */}
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
                <Eye className="w-5 h-5" />

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
