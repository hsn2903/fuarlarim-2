import { getBlogById, updateBlog, updateBlogImage } from "@/app/_actions/blogs";
import { SubmitButton } from "@/components/form/buttons";
import CheckboxInput from "@/components/form/checkbox-input";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import ImageInputContainer from "@/components/form/image-input-container";
import TextAreaInput from "@/components/form/textarea-input";
import { TiptapEditor } from "@/components/shared/tip-tap-editor";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Blog } from "@/lib/generated/prisma";
import { notFound } from "next/navigation";

const DashboardBlogEditPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const blogId = (await params).id;
  const blog = (await getBlogById(blogId)) as Blog;

  if (!blog) return notFound();

  const {
    title,
    slug,
    content,
    category,
    isFeatured,
    isPublished,
    tags,
    summary,
  } = blog;

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Blog Yazısı Güncelle
      </h1>

      <div className="">
        {/* Image Input Container */}
        <ImageInputContainer
          action={updateBlogImage}
          name={title}
          image={blog.image as string}
          text="Blog Resmi Güncelle"
        >
          <input type="hidden" name="id" value={blogId} />
          <input type="hidden" name="url" value={blog.image as string} />
        </ImageInputContainer>

        <FormContainer action={updateBlog}>
          <input type="hidden" name="id" value={blogId} />

          <div className="grid gap-4 md:grid-cols-2 my-4">
            {/* <ImageInput name="image" /> */}
            <FormInput
              label="Başlık"
              name="title"
              type="text"
              defaultValue={title}
            />
            <FormInput
              label="Slug"
              name="slug"
              type="text"
              defaultValue={slug}
            />
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="category">Kategori</Label>
                <Select name="category" defaultValue={category}>
                  <SelectTrigger className="w-full" id="category">
                    <SelectValue placeholder="Bir konu seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Genel Bilgi">Genel Bilgi</SelectItem>
                    <SelectItem value="Haberler">Haberler</SelectItem>
                    <SelectItem value="Gezi Rehberi">Gezi Rehberi</SelectItem>
                    <SelectItem value="Bilgi Bankası">Bilgi Bankası</SelectItem>
                    <SelectItem value="Diğer">Diğer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="col-span-2 space-y-2">
              <Label>İçerik</Label>
              <TiptapEditor name="content" defaultValue={content} />
            </div>

            <TextAreaInput
              label="Etiketler"
              name="tags"
              defaultValue={tags as string}
            />
            <TextAreaInput
              label="Özet"
              name="summary"
              defaultValue={summary as string}
            />
            <CheckboxInput
              name="isFeatured"
              label="Öne çıkatılsın mı?"
              defaultChecked={isFeatured}
            />

            <CheckboxInput
              name="isPublished"
              label="Yayınlansın mı?"
              defaultChecked={isPublished}
            />
          </div>

          <SubmitButton text="Güncelle" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default DashboardBlogEditPage;
