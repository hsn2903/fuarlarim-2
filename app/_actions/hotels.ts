"use server";

import prisma from "@/lib/prisma";
import { renderError } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const hotelSchema = z.object({
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

export async function getHotels() {
  try {
    return await prisma.hotel.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Fetch Hotels Error:", error);
    return [];
  }
}

export async function createHotel(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const images = formData.get("images") as string;

  try {
    await prisma.hotel.create({
      data: {
        name,
        description,
        images: images ? JSON.parse(images) : [],
      },
    });

    revalidatePath("/dashboard/hotels");
  } catch (error) {
    renderError(error);
  }
  redirect("/dashboard/hotels");
}

export const updateHotel = async (formData: FormData) => {
  const rawData = {
    id: formData.get("id") as string,
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    images: formData.get("images") as string,
  };

  try {
    const data = hotelSchema.parse(rawData);

    await prisma.hotel.update({
      where: { id: data.id },
      data: {
        name: data.name,
        description: data.description,
        images: data.images,
      },
    });

    revalidatePath("/dashboard/hotels");
    revalidatePath(`/dashboard/hotels/${data.id}`);
  } catch (error) {
    renderError(error);
  }
  redirect("/dashboard/hotels");
};

export const deleteHotel = async (prevState: unknown, formData: FormData) => {
  const id = formData.get("id") as string;
  try {
    await prisma.hotel.delete({ where: { id } });
    revalidatePath("/dashboard/hotels");
    return { message: "Otel başarıyla silindi." };
  } catch (error) {
    console.log(error);
    return { message: "Otel silinirken bir hata oluştu." };
  }
};
