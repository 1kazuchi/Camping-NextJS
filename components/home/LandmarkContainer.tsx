import { fetchLandmarksData } from "@/action/action";
import LandmarksList from "./LandmarksList";
import {LandmarkCardProps} from "@/util/types"

const LandmarkContainer = async () => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarksData();
 
  return (
    <div>
      <LandmarksList  landmarks = {landmarks}/>
    </div>
  );
};
export default LandmarkContainer;
