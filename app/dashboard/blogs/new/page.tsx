import { createBlog } from "@/app/_actions/blogs";
import { SubmitButton } from "@/components/form/buttons";
import CheckboxInput from "@/components/form/checkbox-input";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import ImageInput from "@/components/form/image-input";
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
import { BLOG_CATEGORIES } from "@/lib/constants";

const DashboardNewBlogPage = () => {
  return (
    <main>
      <h1 className="text-2xl font-semibold mb-4 capitalize">
        Yeni Post Oluştur
      </h1>

      <div className="border p-8 rounded-md">
        <FormContainer action={createBlog}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <ImageInput name="image" />
            <FormInput label="Başlık" name="title" type="text" />
            <FormInput label="Slug" name="slug" type="text" />

            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="category" className="mb-1.5">
                  Kategori
                </Label>
                <Select name="category">
                  <SelectTrigger className="w-full" id="category">
                    <SelectValue placeholder="Bir konu seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {BLOG_CATEGORIES.map((category) => {
                      return (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="col-span-2 space-y-2">
              <Label className="mb-1.5">İçerik</Label>
              <TiptapEditor name="content" />
            </div>

            {/* Tag & Summary */}
            <TextAreaInput label="Etiketler" name="tags" />
            <TextAreaInput label="Özet" name="summary" />

            {/* Checkboxes */}
            <CheckboxInput name="isFeatured" label="Öne çıkatılsın mı?" />
            <CheckboxInput name="isPublished" label="Yayınlansın mı?" />
          </div>

          <SubmitButton text="Kaydet" className="mt-8" />
        </FormContainer>
      </div>
    </main>
  );
};

export default DashboardNewBlogPage;
