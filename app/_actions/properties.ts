"use server";

import {
  imageSchema,
  propertySchema,
  validateWithZodSchema,
} from "@/lib/schemas";
import { renderError } from "@/lib/utils";
import { redirect } from "next/navigation";
import { getAuthUser } from "./profile";
import { uploadImage } from "@/lib/supabase";
import prisma from "@/lib/prisma";

export const createProperty = async (
  prevState: unknown,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

    // Validation
    const validatedFields = validateWithZodSchema(propertySchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await prisma.property.create({
      data: {
        ...validatedFields,
        image: fullPath,
        profileId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }

  redirect("/");
};

export const getAllProperties = async ({
  search = "",
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const properties = await prisma.property.findMany({
    where: {
      category,
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { tagline: { contains: search, mode: "insensitive" } },
      ],
    },
    select: {
      id: true,
      name: true,
      tagline: true,
      country: true,
      image: true,
      price: true,
    },
  });
  return properties;
};
