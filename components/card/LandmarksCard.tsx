/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { LandmarkCardProps } from "@/util/types";
import LandmarkRating from "./LandmarkRating";
import FavoriteToggleButton from "./FavoriteToggleButton";

const LandmarksCard = ({ landmark }: { landmark: LandmarkCardProps }) => {
  const { id, name, description, category, image, province, lat, lng, price } =
    landmark;
  return (
    <article className="group relative">
      <div className="relative h-[300px] rounded-md mb-2">
        <Image
          alt={name}
          src={image}
          sizes="(max-width:769px) 100vw ,50vw"
          className="object-cover rounded-md group-hover:scale-105 transition-transform duration-400"
          fill
        />
      </div>
      <div className="flex item-center justify-between">
        <h3 className="text-sm font-semibold my-2">{name.substring(0, 30)}</h3>
        <LandmarkRating />
      </div>
      <p className="text-sm mt-1 text-muted-foreground">
        {description.substring(0, 40)}
      </p>
      <div className="mt-1 flex items-center justify-between font-semibold text-sm">
        <span>
          THB {price}
        </span>
        <p>{province}</p>
      </div>
      <div className="absolute top-5 right-5">
        <FavoriteToggleButton landmarkId={id}/>
      </div>
    </article>
  );
};
export default LandmarksCard;
