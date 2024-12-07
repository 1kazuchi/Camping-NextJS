import { fetchFavorites } from "@/action/action";
import EmptyList from "@/components/home/EmptyList";
import LandmarksList from "@/components/home/LandmarksList";

const FavoritePage = async () => {
  const favorites = await fetchFavorites();

  if (favorites.length === 0) {
    return <EmptyList heading="No favorite items" />;
  }
  return <LandmarksList landmarks={favorites} />;
};
export default FavoritePage;
