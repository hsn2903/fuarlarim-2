import React from "react";
import { Button } from "../ui/button";
import { Info } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Hakkımızda
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Fuarlarım olarak, seyahat hayallerinizi gerçeğe dönüştürmeye
              tutkuyla bağlıyız. Uzman rehberlerimiz ve özenle hazırlanmış
              rotalarımızla, her yolculuğunuzun harika ve heyecan verici
              olmasını sağlıyoruz.
            </p>
            <Button variant="outline">
              <Info className="mr-2 h-6 w-6" /> Daha Fazla Bilgi
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="aspect-video relative rounded-sm overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/hero.jpg')`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
