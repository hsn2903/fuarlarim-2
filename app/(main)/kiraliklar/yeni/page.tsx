import { createProperty } from "@/app/_actions/properties";
import { SubmitButton } from "@/components/form/buttons";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import PriceInput from "@/components/form/price-input";
import React from "react";
import CategoriesInput from "../_components/categories-input";
import TextAreaInput from "@/components/form/textarea-input";
import CountriesInput from "../_components/countries-input";
import ImageInput from "@/components/form/image-input";
import CounterInput from "../_components/counter-input";
import AmenitiesInput from "../_components/amenities-input";

const YeniKiralikPage = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Kiralık Oluştur
      </h1>

      <div className="border p-8 rounded-md">
        <h3 className="text-lg mb-4 font-medium">Genel Bilgi</h3>
        <FormContainer action={createProperty}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in Latvia"
            />
            <FormInput
              name="tagline"
              type="text "
              label="Tagline (30 limit)"
              defaultValue="Dream Getaway Awaits You Here!"
            />
            <PriceInput name="price" />
            <CategoriesInput />
          </div>
          <TextAreaInput
            name="description"
            label="Description (10 - 1000 Words)"
          />

          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <CountriesInput />
            <ImageInput name="image" />
          </div>

          <>
            <h3 className="text-lg mt-8 mb-4 font-medium">
              Accommodation Details
            </h3>
            <CounterInput detail="guests" />
            <CounterInput detail="bedrooms" />
            <CounterInput detail="beds" />
            <CounterInput detail="baths" />
          </>

          <>
            <h3 className="text-lg mt-10 mb-6 font-medium">Amenities</h3>
            <AmenitiesInput />
          </>

          <SubmitButton text="Oluştur" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
};

export default YeniKiralikPage;
