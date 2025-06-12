import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlignJustify } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import { useTranslations } from "use-intl";
export default function NavLinksDashboard() {
  // Navigation
  const { lang } = useParams();

  // Translation
  const t = useTranslations();

  // Variables
  const links = [
    { title: t("dashboard"), href: "/" },
    { title: t("stuff"), href: "stuff" },
    { title: t("owners"), href: "owners" },
    { title: t("customers"), href: "customers" },
    { title: t("wallet"), href: "wallet" },
    { title: t("support"), href: "support" },
    { title: t("commission"), href: "Commission" },
    { title: t("owners-reviews"), href: "ownerReviews" },
    { title: t("customers-reviews"), href: "customersReviews" },
  ];

  return (
    <Dialog>
      <DialogTrigger>
        {/* Add user button */}
        <AlignJustify className="text-[#A7E92F]" />
      </DialogTrigger>
      <DialogContent
        className={`${
          lang === "en" ? " left-0" : ""
        } top-0 rounded-none  translate-x-0 translate-y-0 fixed w-[350px]`}
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
        <div className="flex flex-col ">
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
