import Link from "next/link";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Button size='default' asChild>
      <Link href="/" className=" text-2xl">
        LOGO
      </Link>
    </Button>
  );
};
export default Logo;
