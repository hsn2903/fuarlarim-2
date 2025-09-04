import {
  MessageSquareIcon,
  ShareIcon,
  ImagesIcon,
  LockIcon,
  BugIcon,
  BookOpenIcon,
  HomeIcon,
  PlaneIcon,
  GlobeIcon,
} from "lucide-react";

type NavLink = {
  href: string;
  label: string;
};

export const MAIN_NAV_LINKS: NavLink[] = [
  { href: "/", label: "Anasayfa" },
  { href: "/favorites ", label: "favorites" },
  { href: "/bookings ", label: "bookings" },
  { href: "/reviews ", label: "reviews" },
  { href: "/kiraliklar/yeni ", label: "Kiralık Oluştur" },
  { href: "/kiraliklar", label: "Kiralıklarım" },
  { href: "/profil", label: "Profil" },
];

type DashboardNavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export const DASHBOARD_NAV_LINKS: DashboardNavLink[] = [
  {
    href: "/dashboard",
    label: "Ana Sayfa",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  // {
  //   href: "/dashboard/rentals",
  //   label: "Rentals",
  //   icon: <LayersIcon />,
  // },
  {
    href: "/dashboard/fairs",
    label: "Fuarlar",
    icon: <PlaneIcon className="h-4 w-4" />,
  },
  // {
  //   href: "/dashboard/tours",
  //   label: "Turlar",
  //   icon: <Compass className="h-4 w-4" />,
  // },
  {
    href: "/dashboard/blogs",
    label: "Blog",
    icon: <BookOpenIcon className="h-4 w-4" />,
  },
  {
    href: "/dashboard/issues",
    label: "Sorun Bildir",
    icon: <BugIcon className="h-4 w-4" />,
  },
  {
    href: "/dashboard/hotels",
    label: "Oteller",
    icon: <ImagesIcon className="h-4 w-4" />,
  },
  {
    href: "/dashboard/fair-images",
    label: "Fuar Görselleri",
    icon: <ImagesIcon className="h-4 w-4" />,
  },
  {
    href: "/dashboard/tour-images",
    label: "Tur Görselleri",
    icon: <ImagesIcon className="h-4 w-4" />,
  },
  // {
  //   href: "/dashboard/stats",
  //   label: "İstatistikler",
  //   icon: <BarChart2Icon className="h-4 w-4" />,
  // },
  {
    href: "/dashboard/messages",
    label: "Mesajlar",
    icon: <MessageSquareIcon className="h-4 w-4" />,
  },
  {
    href: "/dashboard/seo",
    label: "SEO",
    icon: <GlobeIcon className="h-4 w-4" />,
  },
  {
    href: "/dashboard/super-admin",
    label: "Yönetici",
    icon: <LockIcon className="h-4 w-4" />,
  },
  {
    href: "/",
    label: "Siteye Git",
    icon: <ShareIcon className="h-4 w-4" />,
  },
];
