/* eslint-disable @typescript-eslint/no-unused-vars */
import { createClient } from "@supabase/supabase-js";

const bucket_name = "landmark-bucket";
const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

// Create Supabase client
const supabase = createClient(url, key);

// Upload file using standard upload
export async function uploadFile(image: File) {
  const timeStamp = Date.now();
  const newName = `ikazuchi-${timeStamp}-${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket_name)
    .upload(newName, image);
  if (!data) throw new Error("Upload fialed!");
  return supabase.storage.from(bucket_name).getPublicUrl(newName).data
    .publicUrl;
}
