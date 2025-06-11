import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from "use-intl";

export default function HeadingSidebar() {
  // Translation
  const t =useTranslations()

  return (
    <div className="flex items-center justify-center gap-33 py-2 border-b">
      {/* Content */}
      <p className="font-base text-sm">{t("welcome")}....</p>

      {/* Avatar */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
