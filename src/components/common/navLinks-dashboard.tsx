import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlignJustify } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function NavLinksDashboard() {
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
    <Dialog>
      <DialogTrigger>
        {/* Add user button */}
        <AlignJustify />
      </DialogTrigger>
      <DialogContent className="top-0 left-0 rounded-none m-0 translate-x-0 translate-y-0 fixed w-[500px]"

>
        <DialogHeader>
          {/* Heading */}
          <DialogTitle>
            {/* Logo */}
            <img
              src="/logo.png"
              alt="Logo picture"
              className="lg:hidden block text-white w-20"
            />
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col">
        {links.map(({ title, href }) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              `p-1.5 font-medium flex items-center justify-between hover:text-[#A7E92F] ${
                isActive && "bg-white text-[#A7E92F] pl-3" 
              }`
            }
          >
                <span>{title}</span>
          </NavLink>
        ))}
      </div>
      </DialogContent>
    </Dialog>
  );
}
