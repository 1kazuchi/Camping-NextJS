import LandmarksCard from "../card/LandmarksCard";
import { LandmarkCardProps } from "@/util/types";

const LandmarksList = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      
      {landmarks.map((landmark) => {
        return <LandmarksCard key={landmark.id} landmark={landmark} />;
      })}
    </section>
  );
};
export default LandmarksList;
