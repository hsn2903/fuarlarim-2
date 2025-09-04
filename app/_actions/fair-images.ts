"use server";

import prisma from "@/lib/prisma";
import { renderError } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const fairImageSchema = z.object({
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

export async function getFairImages() {
  try {
    return await prisma.fairImages.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Fuar resimleri alınırken hata oluştu:", error);
    return [];
  }
}

export async function createFairImage(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const images = formData.get("images") as string;

  try {
    await prisma.fairImages.create({
      data: {
        name,
        description,
        images: images ? JSON.parse(images) : [],
      },
    });

    revalidatePath("/dashboard/fair-images");
  } catch (error) {
    renderError(error);
  }
  redirect("/dashboard/fair-images");
}

export const updateFairImage = async (formData: FormData) => {
  const rawData = {
    id: formData.get("id") as string,
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    images: formData.get("images") as string,
  };

  try {
    const data = fairImageSchema.parse(rawData);

    await prisma.fairImages.update({
      where: { id: data.id },
      data: {
        name: data.name,
        description: data.description,
        images: data.images,
      },
    });

    revalidatePath("/dashboard/fair-images");
    revalidatePath(`/dashboard/fair-images/${data.id}`);
  } catch (error) {
    renderError(error);
  }
  redirect("/dashboard/fair-images");
};

export const deleteFairImage = async (
  prevState: unknown,
  formData: FormData
) => {
  const id = formData.get("id") as string;
  try {
    await prisma.fairImages.delete({ where: { id } });
    revalidatePath("/dashboard/fair-images");
    return { message: "Fuar görseli başarıyla silindi." };
  } catch (error) {
    console.log(error);
    return { message: "Fuar görseli silinirken bir hata oluştu." };
  }
};
