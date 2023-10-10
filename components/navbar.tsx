import Link from "next/link";
import Button from "./ui/button";
import ModeToggle from "./mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="fixed w-full flex justify-between h-16 py-2 px-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-3xl font-bold text-primary",
              font.className
            )}
          >
            eCompanion
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <button className="bg-gradient-to-r from-cyan-500 to-emerald-500 px-3 py-1 rounded-lg flex items-center text-white font-semibold">
          Upgrade
          <Sparkles className="fill-white text-white m-2 h-4 w-4" />
        </button>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
