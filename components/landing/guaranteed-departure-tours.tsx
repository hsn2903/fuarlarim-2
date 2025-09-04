import { getGuaranteedDepartureTours } from "@/app/_actions/fairs";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FairCard } from "../fairs/fair-card";

export default async function GuaranteedDepartureTours() {
  const guaranteedDepartureTours = await getGuaranteedDepartureTours();

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Kesin Kalkış Turları
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              En popüler fuar turlarımızı keşfedin
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="hover:shadow-md transition-shadow"
          >
            <Link href="/fuarlar" className="flex items-center">
              Tümünü Gör
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guaranteedDepartureTours.map((fair) => (
            <FairCard key={fair.id} fair={fair} />
          ))}
        </div>
      </div>
    </section>
  );
}
