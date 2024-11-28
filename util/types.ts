/* eslint-disable @typescript-eslint/no-explicit-any */
export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type LandmarkCardProps = {
  id: string;
  name: string;
  image: string;
  description:string
  category: string;
  province: string;
  lat: number;
  lng: number;
  price: number;
};
