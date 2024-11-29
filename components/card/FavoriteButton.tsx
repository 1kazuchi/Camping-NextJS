import { Heart } from "lucide-react";
import { Button } from "../ui/button";


const FavoriteButton = ({ landmarkId }: { landmarkId: string }) => {
  return (
    <Button size='icon' variant="outline" >
      <Heart fill="red"/>
    </Button>
  );
};
export default FavoriteButton;
