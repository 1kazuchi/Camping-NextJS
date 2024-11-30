import { fetchFavorites } from "@/action/action";
import LandmarksList from "@/components/home/LandmarksList";

const FavoritePage = async () => {
  const favorites = await fetchFavorites();

  return <LandmarksList landmarks={favorites} />;
};
export default FavoritePage;
