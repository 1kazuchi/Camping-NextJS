import { fetchLandmarksData } from "@/action/action";
import LandmarksList from "./LandmarksList";
import {LandmarkCardProps} from "@/util/types"
import Hero from "../hero/Hero";

const LandmarkContainer = async () => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarksData();
 
  return (
    <div>
      <Hero landmarks = {landmarks}/>
      <LandmarksList  landmarks = {landmarks}/>
    </div>
  );
};
export default LandmarkContainer;
