/* eslint-disable @typescript-eslint/no-unused-vars */
import { getAllFairs } from "@/app/_actions/fairs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaCheck,
  FaGlobe,
  FaLayerGroup,
  FaLocationArrow,
} from "react-icons/fa";
import ServicesSection from "./_components/services";
import HotelsSection from "./_components/hotels-section";
import ShortcutsSection from "./_components/shortcuts-section";
import TurProgramlari from "./_components/tour-programs";
import FairImagesSection from "./_components/fair-images-section";
import ContactForm from "../../_components/contact-form";
import { Button } from "@/components/ui/button";
import { Images } from "lucide-react";
import ImageGalleryButton from "./_components/image-gallery-button";
import SectionTitle from "./_components/section-title";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const fairSlug = (await params).slug;

  const fair = await prisma.fair.findFirst({
    where: { slug: fairSlug },
  });

  return {
    title: fair?.name,
    description: fair?.displayedProducts,
    openGraph: {
      title: fair?.name,
      description: fair?.description,
      images: fair?.coverImage,
    },
  };
};

export const generateStaticParams = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const fairs = await getAllFairs();

  return fairs.map((fair) => ({
    slug: fair.slug,
  }));
};

const FuarDetayPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const fairSlug = (await params).slug;

  const fair = await prisma.fair.findFirst({
    where: { slug: fairSlug },
    include: {
      hotel: true,
      fairImage: true,
      tourImage: true,
    },
  });

  if (!fair) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-2xl font-bold text-red-500">
          Böyle bir fuar bulunamadı
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="relative w-full h-80">
        <Image
          src={fair?.coverImage || "/images"}
          alt={fair?.name || ""}
          layout="fill"
          // objectFit="cover"
        />

        <ImageGalleryButton />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-20">
        <div className="lg:w-2/3 flex flex-col gap-12 mb-20">
          <div className="flex flex-col gap-4 py-12">
            <h2 className="text-4xl font-bold text-primary/80">{fair.name}</h2>
            <p>{fair.description}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-4">
              <div className="flex items-center group gap-2">
                <FaLayerGroup className="text-gray-500 text-xl group-hover:text-gray-700 transition-colors" />

                <div className="text-gray-700 ml-2 font-medium flex items-center gap-2">
                  <p className="font-semibold w-32">Fuar Sektörü: </p>
                  <p>{fair?.category}</p>
                </div>
              </div>

              <div className="flex items-center group gap-2">
                <FaCalendarAlt className="text-gray-500 text-xl group-hover:text-gray-700 transition-colors" />

                <div className="text-gray-700 ml-2 font-medium flex items-center gap-2">
                  <p className="font-semibold w-32">Fuar Tarihi: </p>
                  <p>{fair?.date}</p>
                </div>
              </div>
              <div className="flex items-center group gap-2">
                <FaLocationArrow className="text-gray-500 text-xl group-hover:text-gray-700 transition-colors" />

                <div className="text-gray-700 ml-2 font-medium flex items-center gap-2">
                  <p className="font-semibold w-32">Fuar Yeri: </p>
                  <p>{fair?.venue}</p>
                </div>
              </div>

              <div className="flex items-center group gap-2">
                <FaGlobe className="text-gray-500 text-xl group-hover:text-gray-700 transition-colors" />

                <div className="text-gray-700 ml-2 font-medium flex items-center gap-2">
                  <p className="font-semibold w-32">Fuar Websitesi: </p>
                  <a
                    href={`http://${fair?.website}`}
                    className="text-blue-600 hover:text-blue-700 hover:underline transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fuar Linki
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle title="Sergilenen Ürünler" />

            <section className="py-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                {fair?.displayedProducts?.split(",").map((product, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-4 bg-gray-50 p-3 rounded-md"
                    >
                      <FaCheck className="text-green-500 flex-shrink-0" />
                      <p className="text-gray-700 text-sm capitalize">
                        {" "}
                        {product.trim()}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          <ServicesSection />
          <TurProgramlari />
          <HotelsSection />
          <FairImagesSection venue={fair?.venue || "Belirtilmemiş"} />

          <div className="" id="fuar-haritası">
            <div>
              <SectionTitle title="Fuar Haritası" />

              <div className="w-full h-96 mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10120.177751010599!2d28.97843277830672!3d41.05265939065575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x179cb600b76fc273!2s%C3%87in+Vizesi!5e0!3m2!1str!2str!4v1545996546542"
                  // allowFullScreen=true
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  aria-hidden="false"
                  // tabIndex="0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 relative py-12">
          <div className="sticky top-4  flex flex-col gap-8">
            <ContactForm from={`${fair.name} Fuarı`} />

            {/* <ShortcutsSection /> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FuarDetayPage;
