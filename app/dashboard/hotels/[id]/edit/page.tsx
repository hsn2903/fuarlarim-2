import { notFound } from "next/navigation";
import { Label } from "@/components/ui/label";
import prisma from "@/lib/prisma";
import ImageUploader from "../../_components/image-uplaoder";
import { updateHotel } from "@/app/_actions/hotels";
import FormInput from "@/components/form/form-input";
import TextAreaInput from "@/components/form/textarea-input";
import { SubmitButton } from "@/components/form/buttons";

export default async function HotelEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const hotelId = (await params).id;

  const hotel = await prisma.hotel.findUnique({
    where: { id: hotelId },
  });

  if (!hotel) {
    notFound();
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Hotel</h1>

      <form action={updateHotel} className="space-y-6">
        <input type="hidden" name="id" value={hotel.id} />
        <FormInput
          label="Otel Adı"
          name="name"
          type="text"
          placeholder="Otel adı giriniz..."
          defaultValue={hotel.name}
        />

        <TextAreaInput
          label="Otel Açıklaması"
          name="description"
          defaultValue={hotel.description}
        />

        <div className="space-y-2 mb-10">
          <Label>Resimler</Label>
          <ImageUploader initialImages={hotel.images} />
        </div>

        <div></div>
        <SubmitButton text="Oteli Güncelle" size="lg" />
      </form>
    </div>
  );
}
