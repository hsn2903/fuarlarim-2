import { createCampaign } from "@/app/_actions/campaign";
import { SubmitButton } from "@/components/form/buttons";
import CheckboxInput from "@/components/form/checkbox-input";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import ImageInput from "@/components/form/image-input";
import TextAreaInput from "@/components/form/textarea-input";

const YeniKampanyaPage = () => {
  return (
    <main>
      <h1 className="text-2xl font-semibold mb-4 capitalize">
        Yeni Kampanya Oluştur
      </h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createCampaign}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput type="text" name="name" label="Kampanya Başlığı" />

            <ImageInput name="image" />
          </div>
          <TextAreaInput name="description" label="Kampanya Açıklaması" />
          <div className="mt-6">
            <CheckboxInput name="isPublished" label="Yayında mı?" />
          </div>

          <SubmitButton text="Yeni Kampanya" className="mt-8" />
        </FormContainer>
      </div>
    </main>
  );
};

export default YeniKampanyaPage;
