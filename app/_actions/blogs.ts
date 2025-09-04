"use server";

import prisma from "@/lib/prisma";
import { blogSchema, imageSchema, validateWithZodSchema } from "@/lib/schemas";
import { deleteImage, uploadImage } from "@/lib/supabase";
import { renderError } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export const createBlog = async (prevState: unknown, formData: FormData) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(blogSchema, rawData);
    const file = formData.get("image") as File;

    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await prisma.blog.create({
      data: {
        ...validatedFields,
        image: fullPath,
      },
    });
    return { message: "Blog oluşturuldu!" };
  } catch (error) {
    return renderError(error);
  }
};

export const getAllBlogs = async () => {
  const blogs = await prisma.blog.findMany();

  return blogs;
};

// Get blog by id
export const getBlogById = async (id: string) => {
  const blog = await prisma.blog.findFirst({ where: { id: id } });
  return blog;
};

// Get blog by slug
export const getBlogBySlug = async (slug: string) => {
  const blog = await prisma.blog.findFirst({ where: { slug: slug } });

  return blog;
};

export const updateBlog = async (prevState: unknown, formData: FormData) => {
  try {
    const id = formData.get("id") as string;
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(blogSchema, rawData);

    await prisma.blog.update({
      where: { id },
      data: { ...validatedFields },
    });

    revalidatePath(`/dashboard/blogs/${id}/edit`);
    return { message: "Blog güncellendi!" };
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
};

export const updateBlogImage = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const image = formData.get("image") as File;
    const blogpostId = formData.get("id") as string;
    const oldImageUrl = formData.get("url") as string;

    const validatedFile = validateWithZodSchema(imageSchema, { image });
    const fullPath = await uploadImage(validatedFile.image);
    await deleteImage(oldImageUrl);
    await prisma.blog.update({
      where: {
        id: blogpostId,
      },
      data: {
        image: fullPath,
      },
    });
    revalidatePath(`/admin/blogs/${blogpostId}/edit`);
    return { message: "Görsel güncellendi." };
  } catch (error) {
    return renderError(error);
  }
};

export const deleteBlog = async (prevState: unknown, formData: FormData) => {
  const id = formData.get("id") as string;
  try {
    await prisma.blog.delete({ where: { id } });

    revalidatePath("/dashboard/blogs");
    return { message: "Blog silindi." };
  } catch (error) {
    return renderError(error);
  }
};
