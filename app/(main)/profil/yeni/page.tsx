import { createProfile } from "@/app/_actions/profile";
import { SubmitButton } from "@/components/form/buttons";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const YeniProfilOlusturPage = async () => {
  const user = await currentUser();
  if (user?.privateMetadata?.hasProfile) redirect("/");

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Yeni Kullanıcı</h1>

      <div className="border p-8 rounded-md max-w-lg">
        <FormContainer action={createProfile}>
          <div className="grid gap-4 mt-4 ">
            <FormInput type="text" name="firstName" label="Adınız:" />
            <FormInput type="text" name="lastName" label="Soyadınız:" />
            <FormInput type="text" name="userName" label="Kullanıcı Adı:" />
          </div>

          <SubmitButton text="Profil Oluştur" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default YeniProfilOlusturPage;
