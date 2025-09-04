import { getAllProperties } from "@/app/_actions/properties";
import { PropertyCardProps } from "@/lib/types";
import React from "react";
import EmptyList from "./empty-list";
import PropertiesList from "./properties-list";

const PropertiesContainer = async ({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) => {
  const properties: PropertyCardProps[] = await getAllProperties({
    category,
    search,
  });

  if (properties.length === 0) {
    return (
      <EmptyList
        heading="Sonuç bulunamadı."
        message="Filtreleri değiştirmeyi veya bazılarını kaldırmayı deneyiniz."
        btnText="Filtreleri Temizle"
      />
    );
  }

  return <PropertiesList properties={properties} />;
};

export default PropertiesContainer;
