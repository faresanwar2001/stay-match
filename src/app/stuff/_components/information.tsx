export default function Information() {
    // variables
    const info =[
        {total:"Total 4 users", title:"Administrator", desc:"Full Access"},
        {total:"Total 7 users", title:"Editor", desc:"Can Manage Properties & Users"},
        {total:"Total 3 users", title:"Support", desc:"Access To Customer Support & View Order Only &  View Customer Details Only"},
        {total:"Total 2 users", title:"Users Control", desc:"Edit Customers Credentials "},
    ]

  return (
    <section className="grid grid-cols-2 gap-6 w-full">
        {info.map(({total, title, desc})=><div key={total} className="shadow-md rounded-md p-5">
            {/* Total */}
            <h5 className="text-[#6D6777] mb-6">{total}</h5>

            {/* Title */}
            <h4 className="font-medium mb-2">{title}</h4>

            {/* Description */}
            <p className="text-[#8C57FF]">{desc}</p>

        </div>)}
    </section>
  )
}
