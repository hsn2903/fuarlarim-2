import {
  getCampanyById,
  updateCampaign,
  updateCampaignImage,
} from "@/app/_actions/campaign";
import { SubmitButton } from "@/components/form/buttons";
import CheckboxInput from "@/components/form/checkbox-input";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import ImageInputContainer from "@/components/form/image-input-container";
import EmptyList from "@/components/shared/empty-list";
import { TiptapEditor } from "@/components/shared/tip-tap-editor";
import { Label } from "@/components/ui/label";

const KampanlarDuzenlePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const campaignId = (await params).id;
  const campaign = await getCampanyById(campaignId);

  if (!campaign) return <EmptyList />;

  const { name, description, isPublished } = campaign;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Kampanya Güncelle
      </h1>

      <div>
        {/* Image Input Container */}
        <ImageInputContainer
          action={updateCampaignImage}
          name={name}
          image={campaign.image as string}
          text="Kampanya Resmi Güncelle"
        >
          <input type="hidden" name="id" value={campaignId} />
          <input type="hidden" name="url" value={campaign.image as string} />
        </ImageInputContainer>

        <FormContainer action={updateCampaign}>
          <input type="hidden" name="id" value={campaignId} />

          <div className="grid gap-4 md:grid-cols-2 my-4">
            {/* <ImageInput name="image" /> */}
            <FormInput
              label="Başlık"
              name="name"
              type="text"
              defaultValue={name}
            />

            <div className="col-span-2 space-y-2">
              <Label>Açıklama</Label>
              <TiptapEditor name="description" defaultValue={description} />
            </div>

            <CheckboxInput
              name="isPublished"
              label="Yayınlansın mı?"
              defaultChecked={isPublished}
            />
          </div>

          <SubmitButton text="Güncelle" className="mt-8" />
        </FormContainer>
      </div>
    </div>
  );
};

export default KampanlarDuzenlePage;
