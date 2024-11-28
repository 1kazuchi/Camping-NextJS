import { fetchLandmarksData } from "@/action/action";
import LandmarksList from "./LandmarksList";

const LandmarkContainer = async () => {
  const landmarks = await fetchLandmarksData();
  console.log(landmarks);

  return (
    <div>
      <LandmarksList  landmarks = {landmarks}/>
    </div>
  );
};
export default LandmarkContainer;
