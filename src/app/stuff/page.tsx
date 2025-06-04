import { lazy, Suspense } from "react";
const TableInformation = lazy(()=>import ("./_components/table-information"));
const Information = lazy(()=>import ("./_components/information"));

export default function Stuff() {
   // Variables
  const DataTable = [
    {
      name: "Zsazsa McCleverty",
      userName: "@zmcclevertye",
      email: "zmcclevertye@soundcloud.com",
      role: "Maintainer",
      status: "Active",
    },
    {
      name: "Yoko Pottie",
      userName: "@ypottiec",
      email: "ypottiec@privacy.gov.au",
      role: "Subscriber",
      status: "Inactive",
    },
    {
      name: "Yoko Pottie",
      userName: "@ypottiec",
      email: "ypottiec@privacy.gov.au",
      role: "Subscriber",
      status: "Inactive",
    },
    {
      name: "Yoko Pottie",
      userName: "@ypottiec",
      email: "ypottiec@privacy.gov.au",
      role: "Subscriber",
      status: "Inactive",
    },
    {
      name: "Yoko Pottie",
      userName: "@ypottiec",
      email: "ypottiec@privacy.gov.au",
      role: "Subscriber",
      status: "Inactive",
    },
    {
      name: "Yoko Pottie",
      userName: "@ypottiec",
      email: "ypottiec@privacy.gov.au",
      role: "Subscriber",
      status: "Inactive",
    },
  ];

  return (
    <Suspense fallback={"Loading....."}>
      {/* Information */}
      <Information/>

      {/* Table information */}
      <TableInformation users={DataTable}/>
    </Suspense>
  )
}
