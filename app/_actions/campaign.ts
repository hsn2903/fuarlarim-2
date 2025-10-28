"use server";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import {
  campanySchema,
  imageSchema,
  validateWithZodSchema,
} from "@/lib/schemas";
import { deleteImage, uploadImage } from "@/lib/supabase";
import { renderError } from "@/lib/utils";
import { redirect } from "next/navigation";

export const getAllCampaigns = async () => {
  try {
    const campaigns = await prisma.campany.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return campaigns;
  } catch (error) {
    console.log(error);
  }
};

export const getCampanyById = async (id: string) => {
  const campaign = await prisma.campany.findUnique({
    where: { id: id },
  });
  if (!campaign) redirect("/dashboard/kampanyalar");
  return campaign;
};

export const createCampaign = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    const validatedFields = validateWithZodSchema(campanySchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await prisma.campany.create({
      data: {
        ...validatedFields,
        image: fullPath,
      },
    });

    return { message: "Kampanya başarı ile oluşturuldu." };
  } catch (error) {
    return renderError(error);
  }
};

export const updateCampaign = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const id = formData.get("id") as string;
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(campanySchema, rawData);

    await prisma.campany.update({
      where: { id },
      data: { ...validatedFields },
    });
    revalidatePath(`/dashboard/kampanyalar/${id}/duzenle`);
    return { message: "Kampanya güncellendi!" };
  } catch (error) {
    return renderError(error);
  }
};

export const updateCampaignImage = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const image = formData.get("image") as File;
    const campaignId = formData.get("id") as string;
    const oldImageUrl = formData.get("url") as string;

    const validatedFile = validateWithZodSchema(imageSchema, { image });
    const fullPath = await uploadImage(validatedFile.image);
    await deleteImage(oldImageUrl);
    await prisma.campany.update({
      where: {
        id: campaignId,
      },
      data: {
        image: fullPath,
      },
    });
    revalidatePath(`/dashboard/kampanyalar/${campaignId}/duzenle`);
    return { message: "Görsel güncellendi." };
  } catch (error) {
    return renderError(error);
  }
};

export const deleteCampaignAction = async (prevState: {
  campaignId: string;
}) => {
  const { campaignId } = prevState;

  try {
    const campaign = await prisma.campany.delete({
      where: {
        id: campaignId,
      },
    });

    await deleteImage(campaign.image);
    revalidatePath("/dashboard/kampanyalar");
    return { message: "Kampanya kaldırıldı." };
  } catch (error) {
    return renderError(error);
  }
};
