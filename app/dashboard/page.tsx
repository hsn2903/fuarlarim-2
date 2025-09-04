import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Users,
  Building2,
  MapPin,
  Compass,
  BookOpen,
  Briefcase,
} from "lucide-react";

const stats = [
  {
    name: "Toplam Kullanıcı",
    value: "12,345",
    icon: Users,
    change: "+12%",
    changeType: "positive",
  },
  {
    name: "Aktif Fuar",
    value: "23",
    icon: MapPin,
    change: "+8%",
    changeType: "positive",
  },
  {
    name: "Aktif Tur",
    value: "45",
    icon: Compass,
    change: "+23%",
    changeType: "positive",
  },
  {
    name: "Blog Yazıları",
    value: "234",
    icon: BookOpen,
    change: "+4%",
    changeType: "positive",
  },
  {
    name: "İş İlanları",
    value: "78",
    icon: Briefcase,
    change: "-2%",
    changeType: "negative",
  },
  {
    name: "Oteller",
    value: "56",
    icon: Building2,
    change: "+16%",
    changeType: "positive",
  },
];

export default async function AdminHome() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl dark:text-gray-100 font-bold tracking-tight">
          Hoş Geldiniz
        </h2>
        <p className="text-muted-foreground ">
          İşte yönetim panelinizin genel bir görünümü
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.name}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </p>
                    <span
                      className={cn(
                        "text-sm",
                        stat.changeType === "positive"
                          ? "text-green-600"
                          : "text-red-600"
                      )}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="rounded-full bg-gray-100 p-3">
                  <Icon className="h-5 w-5 text-gray-600" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold">Son Aktiviteler</h3>
          <div className="mt-4 space-y-4">
            {/* Add activity items here */}
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-2">
                <Users className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm">Yeni kullanıcı kaydı</p>
                <p className="text-xs text-gray-500">2 dakika önce</p>
              </div>
            </div>
            {/* Add more activity items */}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold">Hızlı İşlemler</h3>
          <div className="mt-4 grid gap-2">
            <button className="flex items-center gap-2 rounded-lg border p-2 text-sm hover:bg-gray-50">
              <MapPin className="h-4 w-4" />
              Yeni Fuar Ekle
            </button>
            <button className="flex items-center gap-2 rounded-lg border p-2 text-sm hover:bg-gray-50">
              <Compass className="h-4 w-4" />
              Yeni Tur Ekle
            </button>
            <button className="flex items-center gap-2 rounded-lg border p-2 text-sm hover:bg-gray-50">
              <BookOpen className="h-4 w-4" />
              Blog Yazısı Ekle
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
