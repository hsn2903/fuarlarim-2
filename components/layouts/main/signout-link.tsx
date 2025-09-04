"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

const SignoutLink = () => {
  const handleLogout = () => {
    toast.success("Başarı ile çıkış yapıldı!");
  };

  return (
    <SignOutButton redirectUrl="/">
      <button
        onClick={handleLogout}
        className="w-full text-left cursor-pointer"
      >
        Çıkış Yap
      </button>
    </SignOutButton>
  );
};

export default SignoutLink;
