import { LandmarkCardProps } from "@/util/types";

const OtherInfo = ({ landmark }: { landmark: LandmarkCardProps }) => {
  return (
    <div className="text-white">
      <p className="mt-4">{landmark.province}</p>
      <p className="text-4lx font-semibold md:my-3 md:text-6xl md:leading-[70px]">
        {landmark.name}
      </p>
      <p className="text-lg">{landmark.description.substring(0,40)+'...'}</p>
    </div>
  );
};
export default OtherInfo;
