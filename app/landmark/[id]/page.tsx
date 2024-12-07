import { fetchLandmarkDetail } from "@/action/action";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import Breadcrumbs from "@/components/landmark/Breadcrumbs";
import Description from "@/components/landmark/Description";
import ImageContainer from "@/components/landmark/ImageContainer";
import { redirect } from "next/navigation";

const LandmarkDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const landmarkDetail = await fetchLandmarkDetail({ id });

  if (!landmarkDetail) {
    redirect("/");
  }

  return (
    <section>
      <Breadcrumbs name={landmarkDetail.name} />
      <header className="flex justify-between mt-4">
        <h1 className="text-4xl font-bold">{landmarkDetail.name}</h1>
        <div className="flex gap-x-4 items-center">
          <span>share</span>
          <FavoriteToggleButton landmarkId={landmarkDetail.id} />
        </div>
      </header>

      {/* image */}
      <ImageContainer
        mainImage={landmarkDetail.image}
        name={landmarkDetail.name}
      />

      {/* detail */}
      <section>
        <div>
          <Description description={landmarkDetail.description}/>
        </div>
      </section>
    </section>
  );
};
export default LandmarkDetail;
