"use server";

import prisma from "@/lib/prisma";
import {
  imageSchema,
  profileSchema,
  validateWithZodSchema,
} from "@/lib/schemas";
import { uploadImage } from "@/lib/supabase";
import { renderError } from "@/lib/utils";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/////////////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////////////

export const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("Bu alana erişmek için giriş yapmalısınız.");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profil/yeni");
  return user;
};

export const createProfile = async (prevState: unknown, formData: FormData) => {
  try {
    const client = await clerkClient();
    const user = await currentUser();
    if (!user) throw new Error("Profil oluşturmak için lütfen giriş yapınız.");

    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);

    await prisma.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validatedFields,
      },
    });
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });

    return { message: "Profil oluşturuldu!" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchProfileImage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const profile = await prisma.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });
  return profile?.profileImage;
};

export const fetchProfile = async () => {
  const user = await getAuthUser();

  const profile = await prisma.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });
  if (!profile) return redirect("/profil/yeni");
  return profile;
};

export const updateProfileAction = async (
  prevState: unknown,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);

    await prisma.profile.update({
      where: {
        clerkId: user.id,
      },
      data: validatedFields,
    });
    revalidatePath("/profil");
    return { message: "Profil başarı ile güncellendi." };
  } catch (error) {
    return renderError(error);
  }
};

export const updateProfileImageAction = async (
  prevState: unknown,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const image = formData.get("image") as File;
    const validatedFields = validateWithZodSchema(imageSchema, { image });
    const fullPath = await uploadImage(validatedFields.image);

    await prisma.profile.update({
      where: {
        clerkId: user.id,
      },
      data: {
        profileImage: fullPath,
      },
    });
    revalidatePath("/profile");

    return { message: "Profil resmi güncellendi." };
  } catch (error) {
    return renderError(error);
  }
};
