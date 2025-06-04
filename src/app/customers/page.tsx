import { Suspense } from "react"
import TableCustomers from "./_components/table-customers"

export default function Customers() {
  // Variables
  const ownersData:ownersDataTypes[]=[
    {id:1, name:"Yvonne Emberton", user:"yemberton2j@blog.com",phone:"010000",generatedDate:"02/13/2021",revenues:"EGP17,558",noProperties:"5 Properties",status:"Active"},
    {id:2, name:"Yvonne Emberton", user:"yemberton2j@blog.com",phone:"010000",generatedDate:"02/13/2021",revenues:"EGP17,558",noProperties:"5 Properties",status:"Active"},
    {id:3, name:"Yvonne Emberton", user:"yemberton2j@blog.com",phone:"010000",generatedDate:"02/13/2021",revenues:"EGP17,558",noProperties:"5 Properties",status:"Active"},
    {id:4, name:"Yvonne Emberton", user:"yemberton2j@blog.com",phone:"010000",generatedDate:"02/13/2021",revenues:"EGP17,558",noProperties:"5 Properties",status:"Active"},
    {id:5, name:"Yvonne Emberton", user:"yemberton2j@blog.com",phone:"010000",generatedDate:"02/13/2021",revenues:"EGP17,558",noProperties:"5 Properties",status:"Active"},
    {id:6, name:"Yvonne Emberton", user:"yemberton2j@blog.com",phone:"010000",generatedDate:"02/13/2021",revenues:"EGP17,558",noProperties:"5 Properties",status:"Active"},
    {id:7, name:"Yvonne Emberton", user:"yemberton2j@blog.com",phone:"010000",generatedDate:"02/13/2021",revenues:"EGP17,558",noProperties:"5 Properties",status:"Active"},
    {id:8, name:"Yvonne Emberton", user:"yemberton2j@blog.com",phone:"010000",generatedDate:"02/13/2021",revenues:"EGP17,558",noProperties:"5 Properties",status:"Active"},
    {id:9, name:"Yvonne Emberton", user:"yemberton2j@blog.com",phone:"010000",generatedDate:"02/13/2021",revenues:"EGP17,558",noProperties:"5 Properties",status:"Active"},
    {id:10, name:"Yvonne Emberton", user:"yemberton2j@blog.com",phone:"010000",generatedDate:"02/13/2021",revenues:"EGP17,558",noProperties:"5 Properties",status:"Active"},
    {id:11, name:"Yvonne Emberton", user:"yemberton2j@blog.com",phone:"010000",generatedDate:"02/13/2021",revenues:"EGP17,558",noProperties:"5 Properties",status:"Active"},
    {id:12, name:"Yvonne Emberton", user:"yemberton2j@blog.com",phone:"010000",generatedDate:"02/13/2021",revenues:"EGP17,558",noProperties:"5 Properties",status:"Active"},
    {id:13, name:"Yvonne Emberton", user:"yemberton2j@blog.com",phone:"010000",generatedDate:"02/13/2021",revenues:"EGP17,558",noProperties:"5 Properties",status:"Active"},
  ]

  return (
    <Suspense fallback={"loading........."}>
      {/* Table owners */}
      <TableCustomers customers={ownersData}/>
    </Suspense>
  )
}