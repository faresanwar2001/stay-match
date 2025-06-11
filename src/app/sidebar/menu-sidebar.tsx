import { NavLink, useParams } from "react-router-dom";
import HeadingSidebar from "./heading-sidebar";
import { Play } from "lucide-react";
import { useTranslations } from "use-intl";

export default function MenuSidebar() {
  // Translation
  const t = useTranslations();
  const { lang } = useParams();

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
                {isActive && (
                  <Play className={`${lang === "ar" ? "scale-x-[-1]" : ""}`} />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
