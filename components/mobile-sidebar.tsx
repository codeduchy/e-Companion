import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";
type SidebarProps = {
  isPro: boolean;
};
const MobileSidebar = ({ isPro }: SidebarProps) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
          <Sidebar isPro={isPro} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
