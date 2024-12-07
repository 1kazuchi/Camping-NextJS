import { fetchLandmarkDetail } from "@/action/action";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import Breadcrumbs from "@/components/landmark/Breadcrumbs";
import Description from "@/components/landmark/Description";
import ImageContainer from "@/components/landmark/ImageContainer";
import ShareButton from "@/components/landmark/ShareButton";
import MapLandmark from "@/components/map/MapLandmark";
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
        <div className="flex gap-x-2 items-center">
          <ShareButton
            landmarkId={landmarkDetail.id}
            name={landmarkDetail.name}
          />
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
          <Description description={landmarkDetail.description} />

          <MapLandmark
            location={{ lat: landmarkDetail.lat, lng: landmarkDetail.lng }}
          />
        </div>
      </section>
    </section>
  );
};
export default LandmarkDetail;
