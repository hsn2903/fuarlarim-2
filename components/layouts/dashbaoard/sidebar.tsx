"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Package2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { DASHBOARD_NAV_LINKS } from "@/lib/links";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/admin" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Fuarlarım</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>

        <div className="flex flex-1 flex-col space-y-1 p-4">
          {DASHBOARD_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center rounded-sm px-3 py-2 text-sm font-medium hover:bg-gray-600 hover:text-white dark:text-white",
                pathname === link.href
                  ? "bg-gray-600 dark:text-gray-900 text-white"
                  : "text-gray-700"
              )}
            >
              {link.icon}
              <span className="ml-3">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
