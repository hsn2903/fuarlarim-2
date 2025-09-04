import { Label } from "@/components/ui/label";
import ImageUploader from "../_components/image-uplaoder";
import FormInput from "@/components/form/form-input";
import TextAreaInput from "@/components/form/textarea-input";
import { SubmitButton } from "@/components/form/buttons";
import { createTourImage } from "@/app/_actions/tour-images";

export default function DashboardNewHotelPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Yeni Fuar Görseli</h1>

      <form action={createTourImage} className="flex flex-col gap-2">
        <FormInput
          label="Görsel Adı"
          name="name"
          type="text"
          placeholder="Görsel adı giriniz..."
        />

        <TextAreaInput label="Açıklama" name="description" />

        <div className="space-y-2 mb-10">
          <Label>Resimler</Label>
          <ImageUploader />
        </div>

        <SubmitButton text="Tur Görseli Oluştur" size="lg" />
      </form>
    </div>
  );
}
