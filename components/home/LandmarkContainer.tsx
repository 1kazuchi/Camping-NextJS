import { fetchLandmarksData } from "@/action/action";
import LandmarksList from "./LandmarksList";
import {LandmarkCardProps} from "@/util/types"
import Hero from "../hero/Hero";

const LandmarkContainer = async ({search}: {search?:string}) => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarksData({search});
 
  return (
    <div>
      <Hero landmarks = {landmarks}/>
      <LandmarksList  landmarks = {landmarks}/>
    </div>
  );
};
export default LandmarkContainer;
