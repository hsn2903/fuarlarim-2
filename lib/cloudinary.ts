import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(file: File | string) {
  // Handle base64 string or File object
  let buffer: Buffer;

  if (typeof file === "string") {
    // If it's a base64 string, convert it
    const base64Data = file.split(",")[1];
    buffer = Buffer.from(base64Data, "base64");
  } else {
    // If it's a File object
    const arrayBuffer = await file.arrayBuffer();
    buffer = Buffer.from(arrayBuffer);
  }

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "hotels", // Specify your folder
          allowed_formats: ["jpg", "png", "jpeg", "webp"],
          max_file_size: 5 * 1024 * 1024, // 5MB max file size
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Upload Error:", error);
            reject(error);
          } else {
            resolve({
              url: result?.secure_url,
              publicId: result?.public_id,
            });
          }
        }
      )
      .end(buffer);
  });
}

export async function deleteFromCloudinary(publicId: string) {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error("Cloudinary Delete Error:", error);
    throw error;
  }
}
