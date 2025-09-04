import { notFound } from "next/navigation";
import { Label } from "@/components/ui/label";
import prisma from "@/lib/prisma";
import ImageUploader from "../../_components/image-uplaoder";
import FormInput from "@/components/form/form-input";
import TextAreaInput from "@/components/form/textarea-input";
import { SubmitButton } from "@/components/form/buttons";
import { updateTourImage } from "@/app/_actions/tour-images";

export default async function HotelEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const itemId = (await params).id;

  const item = await prisma.tourImages.findUnique({
    where: { id: itemId },
  });

  if (!item) {
    notFound();
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Tur Görseli Güncelle</h1>

      <form action={updateTourImage} className="space-y-6">
        <input type="hidden" name="id" value={item.id} />
        <FormInput
          label="Görsel Adı"
          name="name"
          type="text"
          placeholder="Görsel adı giriniz..."
          defaultValue={item.name}
        />

        <TextAreaInput
          label="Otel Açıklaması"
          name="description"
          defaultValue={item.description}
        />

        <div className="space-y-2 mb-10">
          <Label>Resimler</Label>
          <ImageUploader initialImages={item.images} />
        </div>

        <div></div>
        <SubmitButton text="Fur Görseli Güncelle" size="lg" />
      </form>
    </div>
  );
}
