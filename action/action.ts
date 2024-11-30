/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import {
  imageSchema,
  landmarkSchema,
  profileSchema,
  validateWithZod,
} from "@/util/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/util/db";
import { redirect } from "next/navigation";
import { uploadFile } from "@/util/supabase";
import { revalidatePath } from "next/cache";

const getAuthUser = async () => {
  // code body
  const user = await currentUser();
  if (!user) {
    throw new Error("You must logged!!!");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};

const renderError = (error: unknown): { message: string } => {
  //code body
  return {
    message: error instanceof Error ? error.message : "An Error!!!",
  };
};
export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please Login!!!");

    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(profileSchema, rawData);
    console.log("validated", validateField);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validateField,
      },
    });
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
    // return { message: "Create Profile Success!!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  redirect("/");
};

export const createLandmarkAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const user = await getAuthUser();

    const rawData = Object.fromEntries(formData);

    const file = formData.get("image") as File;

    const validadteFile = validateWithZod(imageSchema, { image: file });
    const validadteField = validateWithZod(landmarkSchema, rawData);

    //validated data
    // console.log("validated", validadteFile);
    // console.log("validated", validadteField);
    // const validateField = validateWithZod(profileSchema, rawData);

    //upload supabase
    const fullPath = await uploadFile(validadteFile.image);
    console.log("fullPath", fullPath);

    //insert to database
    await db.landmark.create({
      data: {
        ...validadteField,
        image: fullPath,
        profileId: user.id,
      },
    });

    //return { message: "Create Landmark Success!!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  redirect("/");
};

export const fetchLandmarksData = async () => {
  const landmarks = db.landmark.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return landmarks;
};

export const fetchFavoriteId = async ({
  landmarkId,
}: {
  landmarkId: string;
}) => {
  const user = await getAuthUser();
  const favorite = await db.favorite.findFirst({
    where: {
      landmarkId: landmarkId,
      profileId: user.id,
    },
    select: {
      id: true,
    },
  });
  return favorite?.id || null;
};

export const toggleFavoriteAction = async (prevState: {
  favoriteId: string | null;
  landmarkId: string;
  pathName: string;
}) => {
  const { favoriteId, landmarkId, pathName } = prevState;
  const user = await getAuthUser();
  try {
    //if favorited go to delete
    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    } else {
      await db.favorite.create({
        data: {
          landmarkId: landmarkId,
          profileId: user.id,
        },
      });
    }
    revalidatePath(pathName);
    return {
      message: favoriteId
        ? "Remove Favorite Success..."
        : "Add Favorite Success...",
    };
  } catch (error) {
    return renderError(error);
  }
};

// -----------------------v2-----------------------------
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// "use server";

// import { profileSchema, validateWithZod } from "@/util/schemas";
// import { clerkClient, currentUser } from "@clerk/nextjs/server";
// import db from "@/util/db";
// import { redirect } from "next/navigation";

// import { regions } from "@/util/provinces";

// const getAuthUser = async () => {
//   const user = await currentUser();
//   if (!user) {
//     throw new Error("You must be logged in!");
//   }
//   if (!user.privateMetadata.hasProfile) redirect("/profile/create");
//   return user;
// };

// const renderError = (error: unknown): { message: string } => {
//   return {
//     message: error instanceof Error ? error.message : "An Error occurred!",
//   };
// };

// // Create Profile Action
// export const createProfileAction = async (
//   prevState: Record<string, string | File>,
//   formData: FormData
// ) => {
//   try {
//     const user = await getAuthUser();

//     const rawData = Object.fromEntries(formData) as Record<string, string>;

//     // Validate data against schema
//     const validatedData = validateWithZod(profileSchema, rawData);
//     console.log("Validated", validatedData);

//     // Create profile in the database
//     await db.profile.create({
//       data: {
//         clerkId: user.id,
//         email: user.emailAddresses[0].emailAddress,
//         profileImage: user.imageUrl ?? "",
//         ...validatedData, // Merge validated fields
//       },
//     });

//     // Update the user's metadata
//     const client = await clerkClient();
//     await client.users.updateUserMetadata(user.id, {
//       privateMetadata: {
//         hasProfile: true,
//       },
//     });

//     return { message: "Profile Created Successfully!" };
//   } catch (error) {
//     return renderError(error);
//   }
// };

// // Create Landmark Action
// export const createLandmarkAction = async (
//   prevState: Record<string, string | File>,
//   formData: FormData
// ): Promise<{ message: string }> => {
//   try {
//     const rawData = Object.fromEntries(formData) as Record<string, string>;

//     // Convert province ID to province name
//     const provinceName = getProvinceName(rawData.province);

//     // Update rawData to include the province name
//     const updatedData = {
//       ...rawData,
//       province: provinceName,
//     };

//     console.log("Updated Data with Province Name:", updatedData);

//     // You would likely perform further actions like saving to the database here

//     return { message: "Create Landmark Success!!!" };
//   } catch (error) {
//     return renderError(error);
//   }
// };

// // Get province name by ID
// const getProvinceName = (provinceId: string): string => {
//   for (const region of Object.values(regions)) {
//     const province = region.find((p) => p.PROVINCE_ID.toString() === provinceId);
//     if (province) {
//       return province.PROVINCE_NAME;
//     }
//   }
//   return '';
// };
