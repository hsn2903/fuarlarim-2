import { Button } from "@/components/ui/button";
import { PlaneIcon } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <PlaneIcon className="w-6 h-6" />
      </Link>
    </Button>
  );
};

export default Logo;
