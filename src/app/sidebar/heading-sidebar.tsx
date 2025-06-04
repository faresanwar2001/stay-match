import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeadingSidebar() {
  return (
    <div className="flex items-center justify-center gap-33 py-2 border-b">
      {/* Content */}
      <p className="font-base text-sm">Welcome...</p>

      {/* Avatar */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
