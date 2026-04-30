import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";
import Banner from "./Banner";
import FeaturedAnimals from "./Component/FeaturedAnimals";

export default function Home() {
  return (
   <div>
     <Banner></Banner>
     <FeaturedAnimals></FeaturedAnimals>
   </div>
  );
}
