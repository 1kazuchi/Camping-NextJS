import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
//import { useEffect } from "react";
const HomePage = async({ searchParams }: { searchParams: { search?: string } }) => {
  // useEffect(() => {
  //   document.title = "Home Page";
  // }, []);

  //search
  const {search} = await searchParams;
  console.log(search);
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search = {search}/>
      </Suspense>
    </section>
  );
};
export default HomePage;
