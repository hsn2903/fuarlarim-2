import { getFeaturedFairs } from "@/app/_actions/fairs";
import { Button } from "@/components/ui/button";
import { FAIR_SECTORS } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FairCard } from "../fairs/fair-card";

export default async function FeaturedFairs({
  fuarKategori,
}: {
  fuarKategori?: string;
}) {
  const currentCategory = fuarKategori || "tümü";

  const featuredFairs = await getFeaturedFairs();

  const filteredFairs =
    currentCategory === "tümü"
      ? featuredFairs
      : featuredFairs.filter((fair) => fair.category === currentCategory);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Sektörel Fuarlar
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Sektörünüze özel fuar ve etkinlikleri keşfedin
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="hover:shadow-md transition-shadow"
          >
            <Link href="/fuarlar">
              Tümünü Gör
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button
            variant={currentCategory === "tümü" ? "default" : "outline"}
            asChild
            className="transition-all duration-200"
          >
            <Link href={`?fuarKategori=tümü`} scroll={false}>
              Tümü
            </Link>
          </Button>
          {FAIR_SECTORS.map((cat) => (
            <Button
              key={cat.label}
              variant={currentCategory === cat.label ? "default" : "outline"}
              asChild
              className="transition-all duration-200"
            >
              <Link href={`?fuarKategori=${cat.label}`} scroll={false}>
                {cat.label}
              </Link>
            </Button>
          ))}
        </div>

        {filteredFairs.length === 0 ? (
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4">
              <div className="text-center text-gray-600 dark:text-gray-400">
                <p className="mb-4">
                  Şu anda bu kategoride bir fuar bulunmamaktadır.
                </p>
                <p>Diğer kategorilere göz atabilirsiniz.</p>
              </div>
            </div>
          </section>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFairs.map((fair) => (
              <FairCard key={fair.id} fair={fair} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
