import { z, ZodSchema } from "zod";

// const profileSchema = z.string().min(2,{message:"อักขระต้องมากกว่า 2 อักขระ"})

export const profileSchema = z.object({
  firstName: z.string().min(2, { message: "ชื่อ ต้องมากกว่า 2 อักขระ" }),
  lastName: z.string().min(2, { message: "นามสกุล ต้องมากกว่า 2 อักขระ" }),
  userName: z.string().min(2, { message: "username ต้องมากกว่า 2 อักขระ" }),
});

const validadteImage = () => {
  const maxFileSize = 1024 * 1024;
  return z.instanceof(File).refine((file) => {
    return file.size <= maxFileSize;
  }, "File size must be lest than 1MB");
};

export const imageSchema = z.object({
  image: validadteImage(),
});

// const tam :string = 'tam'

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    // code
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};
