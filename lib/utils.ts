import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//
import countries from "world-countries";
import { TourProgram } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Error
export const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "Bir hata meydana geldi.",
  };
};

// Countries
export const formattedCountries = countries.map((item) => ({
  code: item.cca2,
  name: item.name.common,
  flag: item.flag,
  location: item.latlng,
  region: item.region,
}));

export const findCountryByCode = (code: string) =>
  formattedCountries.find((item) => item.code === code);

// Currency
export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// Shorten UUID
export function formatId(id: string) {
  return `..${id.substring(id.length - 6)}`;
}

// lib/json-utils.ts

export function parseTourPrograms(json: any): TourProgram[] {
  if (!Array.isArray(json)) {
    throw new Error("Invalid tour programs format");
  }

  return json.map((item) => ({
    title1: item.title1 || "",
    title2: item.title2 || "",
    title3: item.title3 || "",
    description: item.description || "",
    singlePersonPrice: Number(item.singlePersonPrice) || 0,
    twoPersonPrice: Number(item.twoPersonPrice) || 0,
    programs: Array.isArray(item.programs)
      ? item.programs.map((p: any) => ({
          date: p.date || "",
          activity: p.activity || "",
        }))
      : [],
  }));
}
