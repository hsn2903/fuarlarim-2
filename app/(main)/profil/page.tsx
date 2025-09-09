import {
  fetchProfile,
  updateProfileAction,
  updateProfileImageAction,
} from "@/app/_actions/profile";
import { SubmitButton } from "@/components/form/buttons";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import ImageInputContainer from "@/components/form/image-input-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil",
};

const ProfilPage = async () => {
  const profile = await fetchProfile();

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Profilim</h1>
      <div className="border p-8 rounded-md">
        {/* image input container */}
        <ImageInputContainer
          name={profile.userName}
          image={profile.profileImage}
          action={updateProfileImageAction}
          text="Resmi Güncelle"
        />

        <FormContainer action={updateProfileAction}>
          <div className="grid gap-4 md:grid-cols-2 mt-4 ">
            <FormInput
              type="text"
              name="firstName"
              label="Adınız:"
              defaultValue={profile.firstName}
            />
            <FormInput
              type="text"
              name="lastName"
              label="Soyadınız:"
              defaultValue={profile.lastName}
            />
            <FormInput
              type="text"
              name="userName"
              label="Kullanıcı Adınız:"
              defaultValue={profile.userName}
            />
          </div>
          <SubmitButton text="Profili Güncelle" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default ProfilPage;
