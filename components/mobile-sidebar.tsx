"use client";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Menu onClick={() => setIsOpen(!isOpen)} className=" cursor-pointer" />
      <div
        className={
          isOpen ? "fixed bottom-0 right-0 top-16 left-0 blur-none" : "hidden"
        }
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      <div
        className={cn(
          "transition-all fixed w-32 bg-secondary bottom-0 top-16 ",
          isOpen === false ? "-ml-36" : "-ml-4"
        )}
      >
        <div className="text-center">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
