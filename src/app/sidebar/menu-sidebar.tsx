import { NavLink } from "react-router-dom";
import HeadingSidebar from "./heading-sidebar";
import { Play } from "lucide-react";

export default function MenuSidebar() {
  // Variables
  const links = [
    { title: "Dashboard", href: "/" },
    { title: "Stuff", href: "stuff" },
    { title: "Owners", href: "owners" },
    { title: "Customers", href: "customers" },
    { title: "Wallet", href: "wallet" },
    { title: "Support", href: "support" },
    { title: "Commission", href: "Commission" },
    { title: "Owner Reviews", href: "ownerReviews" },
    { title: "Customers Reviews", href: "customersReviews" },
  ];

  return (
    <aside className="min-h-screen w-[246px] text-white bg-[#A7E92F]">
      <HeadingSidebar />

      <div className="flex flex-col">
        {links.map(({ title, href }) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              `border-b p-1.5 text-2xl flex items-center justify-between ${
                isActive && "bg-white text-[#A7E92F] pl-3" 
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>{title}</span>
                {isActive && <Play />}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
