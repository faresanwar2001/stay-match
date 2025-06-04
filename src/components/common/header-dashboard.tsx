import AvatarInfo from "./avatar-info";
import NavLinksDashboard from "./navLinks-dashboard";

export default function HeaderDashboard() {
  return (
    <header className="w-full flex justify-between px-4 py-2 items-center lg:hidden block">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Logo picture"
        className="lg:hidden block text-white w-15"
      />

      <div className="flex items-center gap-3 cursor-pointer text-[#A7E92F]">
        {/* Avatar */}
        <AvatarInfo />

        {/* Menu */}
        <NavLinksDashboard />
      </div>
    </header>
  );
}
