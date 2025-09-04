/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { fetchProfileImage } from "@/app/_actions/profile";
import { User2Icon } from "lucide-react";

const UserIcon = async () => {
  const profileImage = await fetchProfileImage();

  if (profileImage)
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    );

  return <User2Icon className="w-6 h-6 bg-primary rounded-full text-white" />;
};

export default UserIcon;
