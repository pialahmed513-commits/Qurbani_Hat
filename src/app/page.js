import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";
import Banner from "./Banner";
import FeaturedAnimals from "./Component/FeaturedAnimals";
import QurbaniTips from "./Component/QurbaniTips";
import TopBreeds from "./Component/TopBreeds";

export default function Home() {
  return (
   <div>
     <Banner></Banner>
     <FeaturedAnimals></FeaturedAnimals>
     <QurbaniTips></QurbaniTips>
     <TopBreeds></TopBreeds>
   </div>
  );
}
