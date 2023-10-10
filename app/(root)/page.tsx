"use client";
import ModeToggle from "@/components/mode-toggle";
import Navbar from "@/components/navbar";
import SearchInput from "@/components/search-input";
import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
  return (
    <div className="h-full p-4">
      <SearchInput />
    </div>
  );
};

export default RootPage;
