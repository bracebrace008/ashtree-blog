import { MenuIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex h-[52px] items-center justify-between bg-[#EEEEEE] px-5 py-5">
      <h1 className="font-inter text-lg font-bold text-[#1A1A1A]">
        Brace's Blog
      </h1>
      <button className="text-[#1A1A1A]">
        <MenuIcon size={28} />
      </button>
    </nav>
  );
};

export default Navbar;
