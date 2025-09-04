"use server";

import prisma from "@/lib/prisma";
import { renderError } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const tourImageSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(3).max(100),
  description: z.string().min(10).max(1000),
  images: z.string().transform((val) => {
    try {
      return JSON.parse(val) as string[];
    } catch {
      return [];
    }
  }),
});

export async function getTourImages() {
  try {
    return await prisma.tourImages.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Tur resimleri alınırken hata oluştu:", error);
    return [];
  }
}

export async function createTourImage(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const images = formData.get("images") as string;

  try {
    await prisma.tourImages.create({
      data: {
        name,
        description,
        images: images ? JSON.parse(images) : [],
      },
    });

    revalidatePath("/dashboard/tour-images");
  } catch (error) {
    renderError(error);
  }
  redirect("/dashboard/tour-images");
}

export const updateTourImage = async (formData: FormData) => {
  const rawData = {
    id: formData.get("id") as string,
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    images: formData.get("images") as string,
  };

  try {
    const data = tourImageSchema.parse(rawData);

    await prisma.tourImages.update({
      where: { id: data.id },
      data: {
        name: data.name,
        description: data.description,
        images: data.images,
      },
    });

    revalidatePath("/dashboard/tour-images");
    revalidatePath(`/dashboard/tour-images/${data.id}`);
  } catch (error) {
    renderError(error);
  }
  redirect("/dashboard/tour-images");
};

export const deleteTourImage = async (
  prevState: unknown,
  formData: FormData
) => {
  const id = formData.get("id") as string;
  try {
    await prisma.tourImages.delete({ where: { id } });
    revalidatePath("/dashboard/tour-images");
    return { message: "Tur görseli başarıyla silindi." };
  } catch (error) {
    console.log(error);
    return { message: "Tur görseli silinirken bir hata oluştu." };
  }
};
