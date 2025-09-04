import { Label } from "@/components/ui/label";
import { createHotel } from "@/app/_actions/hotels";
import ImageUploader from "../_components/image-uplaoder";
import FormInput from "@/components/form/form-input";
import TextAreaInput from "@/components/form/textarea-input";
import { SubmitButton } from "@/components/form/buttons";

export default function DashboardNewHotelPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Yeni Otel</h1>

      <form action={createHotel}>
        <FormInput
          label="Otel Adı"
          name="name"
          type="text"
          placeholder="Otel adı giriniz..."
        />

        <TextAreaInput label="Otel Açıklaması" name="description" />

        <div className="space-y-2 mb-10">
          <Label>Resimler</Label>
          <ImageUploader />
        </div>

        <SubmitButton text="Otel Oluştur" size="lg" />
      </form>
    </div>
  );
}
