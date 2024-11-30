import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
//import { useEffect } from "react";
const HomePage = () => {
  // useEffect(() => {
  //   document.title = "Home Page";
  // }, []);

  //search
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer />
      </Suspense>
    </section>
  );
};
export default HomePage;
