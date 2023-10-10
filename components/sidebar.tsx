"use client";
import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const routes = [
  {
    icon: Home,
    href: "/",
    label: "Home",
    pro: false,
  },
  {
    icon: Plus,
    href: "/companion/new",
    label: "Create",
    pro: true,
  },
  {
    icon: Settings,
    href: "/settings",
    label: "Settings",
    pro: false,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const onNavigate = (url: string, pro: boolean) => {
    return router.push(url);
  };

  return (
    <div className="space-y-4 bg-secondary min-w-[5rem]">
      {routes.map((route) => (
        <div
          key={route.href}
          className={cn(
            "text-muted-foreground text-xs group flex p-3 items-center justify-center font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition ",
            pathname === route.href && "bg-primary/10 text-primary"
          )}
        >
          <div className="flex flex-col gap-y-2 items-center">
            <route.icon className="w-5 h-5" />
            {route.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
