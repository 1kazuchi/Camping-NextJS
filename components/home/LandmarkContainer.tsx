import { fetchLandmarksData, fetchLandmarksHero } from "@/action/action";
import LandmarksList from "./LandmarksList";
import { LandmarkCardProps } from "@/util/types";
import Hero from "../hero/Hero";
import CategoriesList from "./CategoriesList";
import EmptyList from "./EmptyList";

const LandmarkContainer = async ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarksData({
    search,
    category,
  });
  const landmarksHero: LandmarkCardProps[] = await fetchLandmarksHero();

  // if (landmarks.length === 0) {
  //   return <EmptyList />;
  // }

  return (
    <div>
      <Hero landmarks={landmarksHero} />
      <CategoriesList category={category} search={search} />

      {landmarks.length === 0 ? (
        <EmptyList  heading="No Results" btnText="Clear Filters"/>
      ) : (
        <LandmarksList landmarks={landmarks} />
      )}
    </div>
  );
};
export default LandmarkContainer;
