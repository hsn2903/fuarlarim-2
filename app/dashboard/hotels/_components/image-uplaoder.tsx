/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface ImageUploaderProps {
  initialImages?: string[];
}

export default function ImageUploader({
  initialImages = [],
}: ImageUploaderProps) {
  const [imageUrls, setImageUrls] = useState<string[]>(initialImages);

  return (
    <div className="space-y-4">
      <input type="hidden" name="images" value={JSON.stringify(imageUrls)} />

      <CldUploadWidget
        uploadPreset="fuarlarim2025"
        onSuccess={(result: any) => {
          if (result?.event === "success" && result?.info?.secure_url) {
            setImageUrls((prev) => [...prev, result.info.secure_url]);
          }
        }}
      >
        {({ open }) => (
          <Button type="button" variant="outline" onClick={() => open()}>
            Upload Images
          </Button>
        )}
      </CldUploadWidget>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {imageUrls.map((url, index) => (
          <div key={url} className="relative group">
            <CldImage
              width="200"
              height="200"
              src={url}
              alt={`Hotel image ${index + 1}`}
              className="rounded-md object-cover h-40 w-full"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => {
                setImageUrls((prev) => prev.filter((img) => img !== url));
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
