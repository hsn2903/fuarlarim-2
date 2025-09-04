import { createFair } from "@/app/_actions/fairs";
import { SubmitButton } from "@/components/form/buttons";
import CheckboxInput from "@/components/form/checkbox-input";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import ImageInput from "@/components/form/image-input";
import TextAreaInput from "@/components/form/textarea-input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FairTypesInput from "../_components/fair-types-input";
import CategoriesInput from "../_components/categories-input";
import {
  DUMMY_FAIR_IMAGES_DATA,
  DUMMY_HOTEL_DATA,
  DUMMY_TOUR_IMAGES_DATA,
} from "@/data/tour-images-data";
import TourPrograms from "../_components/tour-program";

const fairData = {
  id: "123",
  slug: "my-fair",
  name: "My Fair",
  description: "This is a description",
  summary: "This is a summary",
  website: "https://example.com",
  venue: "This is a venue",
  type: "fair",
  category: "category-1",
  logoImage: "https://example.com",
  coverImage: "https://example.com",
  displayedProducts: "product-1, product-2",
  tourGuide: "This is a tour guide",
  isPublished: true,
  isFeatured: true,
  isDefiniteDepartureTour: true,
  onBanner: true,
  isSectoralFairIndex: true,
  date: "2021-09-01",
  startDate: "2021-09-01",
  endDate: "2021-09-01",
  hotel: {
    name: "Hotel X",
    images: [
      "/images/hotel-1.jpg",
      "/images/hotel-2.jpg",
      "/images/hotel-3.jpg",
    ],
  },
  fairImages: {
    name: "Fair Image X",
    images: [
      "/images/fair-image-1.jpg",
      "/images/fair-image-2.jpg",
      "/images/fair-image-3.jpg",
    ],
  },
  tourImages: {
    name: "Tour Image X",
    images: [
      "/images/tour-image-1.jpg",
      "/images/tour-image-2.jpg",
      "/images/tour-image-3.jpg",
    ],
  },
  hotels: DUMMY_HOTEL_DATA,
  tours: DUMMY_TOUR_IMAGES_DATA,
};

const DashboardNewFairPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Fuar Oluştur</h1>
      <FormContainer action={createFair}>
        <div className="flex flex-col gap-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle>Temel Bilgiler</CardTitle>
              <CardDescription>
                Lütfen bu kısımları eksiksiz doldurunuz.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <FormInput name="name" label="Fuar Adı*" type="text" />
                <FormInput
                  name="slug"
                  label="slug (URL görünümü)*"
                  type="text"
                />
                <FormInput name="website" label="Website" type="text" />
                <FormInput
                  name="venue"
                  label="Fuarın Gerçekleşeceği Yer"
                  type="text"
                />

                <FairTypesInput />
                <CategoriesInput />
                <FormInput
                  name="displayedProducts"
                  label="Sergilenen Ürünler"
                  type="text"
                />
                <FormInput name="date" label="Tarih" type="text" />
                <FormInput
                  name="startDate"
                  label="Başlangıç Tarihi"
                  type="date"
                />
                <FormInput name="endDate" label="Bitiş Tarihi" type="date" />
              </div>
            </CardContent>
          </Card>

          {/* Texts */}
          <Card>
            <CardHeader>
              <CardTitle>Açıklamalar</CardTitle>
              <CardDescription>
                Lütfen bu kısımları eksiksiz doldurunuz.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <TextAreaInput name="description" label="Açıklama" />
                <TextAreaInput name="summary" label="Açıklama Özet" />
                <FormInput name="tourGuide" label="Tur Notu" type="text" />
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle>Hizmetler</CardTitle>
              <CardDescription>
                Lütfen hizmetlri virgül ile ayırarak belirtiniz.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 p-4">
                <TextAreaInput name="freeServices" label="Ücretsiz Hizmetler" />
                <TextAreaInput name="paidServices" label="Ücretli Hizmetler" />
              </div>
            </CardContent>
          </Card>

          {/* CheckBoxs */}
          <Card>
            <CardHeader>
              <CardTitle>Ön Bilgiler</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <CheckboxInput name="isFeatured" label="Öne Çıkartılsın" />
                <CheckboxInput name="isPublished" label="Yayına Al" />
                <CheckboxInput
                  name="isSectoralFairIndex"
                  label="Sekörel Fuar Index Yap"
                />
                <CheckboxInput
                  name="isDefiniteDepartureTour"
                  label="Kesin Kalkış Turu Olarak Belirle"
                />
                <CheckboxInput name="onBanner" label="Banner'da Göster" />
              </div>
            </CardContent>
          </Card>

          <TourPrograms />

          {/* Hotel and Other Images */}
          {/* <Card>
            <CardHeader>
              <CardTitle>Konaklame ve Fuar Görselleri</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-x-8 mb-4">
                <div className="w-full mb-4">
                  <Label className="capitalize block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Oteller
                  </Label>

                  <Select name="hotelId">
                    <SelectTrigger className="w-full cursor-pointer">
                      <SelectValue placeholder="Bir Otel Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      {DUMMY_HOTEL_DATA.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full mb-4">
                  <Label className="capitalize block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Fuar Görselleri
                  </Label>

                  <Select name="fairImagesId">
                    <SelectTrigger className="w-full cursor-pointer">
                      <SelectValue placeholder="Bir Fuar Görseli Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      {DUMMY_FAIR_IMAGES_DATA.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full mb-4">
                  <Label className="capitalize block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Tur Görselleri
                  </Label>

                  <Select name="tourImagesId">
                    <SelectTrigger className="w-full cursor-pointer">
                      <SelectValue placeholder="Bir Tur Görseli Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      {DUMMY_TOUR_IMAGES_DATA.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card> */}

          {/* Images */}
          <Card>
            <CardHeader>
              <CardTitle>Görseller</CardTitle>
              <CardDescription>
                Lütfen bu kısımları eksiksiz doldurunuz.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-x-8 mb-4">
                <ImageInput name="logoImage" label="Logo Resmi" />
                <ImageInput name="coverImage" label="Kapak Resmi" />
              </div>
            </CardContent>
          </Card>

          <SubmitButton text="Fuarı Kaydet" />
        </div>
      </FormContainer>
    </div>
  );
};

export default DashboardNewFairPage;
