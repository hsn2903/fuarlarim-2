import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import LinksDropdown from "./links-dropdown";
import ModeToggle from "../main/mode-toggle";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <LinksDropdown />

      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Fuar ara..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>

      <div className="flex items-center gap-x-4">
        <ModeToggle />
        <UserButton />
      </div>
    </header>
  );
}
export default Navbar;
