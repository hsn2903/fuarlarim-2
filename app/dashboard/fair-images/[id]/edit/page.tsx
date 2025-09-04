import { notFound } from "next/navigation";
import { Label } from "@/components/ui/label";
import prisma from "@/lib/prisma";
import ImageUploader from "../../_components/image-uplaoder";
import FormInput from "@/components/form/form-input";
import TextAreaInput from "@/components/form/textarea-input";
import { SubmitButton } from "@/components/form/buttons";
import { updateFairImage } from "@/app/_actions/fair-images";

export default async function HotelEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const itemId = (await params).id;

  const fairImage = await prisma.fairImages.findUnique({
    where: { id: itemId },
  });

  if (!fairImage) {
    notFound();
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Hotel</h1>

      <form action={updateFairImage} className="space-y-6">
        <input type="hidden" name="id" value={fairImage.id} />
        <FormInput
          label="Görsel Adı"
          name="name"
          type="text"
          placeholder="Görsel adı giriniz..."
          defaultValue={fairImage.name}
        />

        <TextAreaInput
          label="Otel Açıklaması"
          name="description"
          defaultValue={fairImage.description}
        />

        <div className="space-y-2 mb-10">
          <Label>Resimler</Label>
          <ImageUploader initialImages={fairImage.images} />
        </div>

        <div></div>
        <SubmitButton text="Fur Görseli Güncelle" size="lg" />
      </form>
    </div>
  );
}
