import Image from "next/image";

const LandmarksCard = ({ landmark }) => {
  const { name, image } = landmark;
  return (
    <article className="group relative">
      <div className="relative h-[300px]">
        <Image 
        alt ={name} 
        src={image} 
        sizes="(max-width:769px) 100vw ,50vw" className="object-cover" 
        fill
        />
        {landmark.name}
      </div>
    </article>
  );
};
export default LandmarksCard;
