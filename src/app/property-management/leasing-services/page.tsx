import LuxuryNavbar from "../../(home)/_navbar";
import { Info } from "./_info";
import { InfoSecond } from "./_infoSecond";
import { Luxury } from "./_luxury";
import { Showcase } from "./_showcase";
import { Specialization } from "./_specialization";

export const fetchCache = "force-no-store";

const fetchData = async () => {
  let data: any = {
    banner: [],
    partners: [],
    blogs: [],
    faqs: [],
    awards: [],
    developments: [],
    properties: [],
    pageContent: null,
  };
  return data;
};

export default async function Home() {
  const data = await fetchData();

  return (
    <div>
      {/* <LuxuryNavbar dark /> */}
      <Showcase />
      <Info />
      <InfoSecond />
      <Specialization />
      <Luxury />
    </div>
  );
}
