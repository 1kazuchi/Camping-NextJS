import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
//import { useEffect } from "react";
const HomePage = async ({
  searchParams,
}: {
  searchParams: { search?: string; category?: string };
}) => {
  // useEffect(() => {
  //   document.title = "Home Page";
  // }, []);

  //search
  const { search, category } = await searchParams;
  console.log(search);
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search} category={category} />
      </Suspense>
    </section>
  );
};
export default HomePage;
