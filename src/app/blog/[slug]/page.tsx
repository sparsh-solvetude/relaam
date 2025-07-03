import LuxuryNavbar from "@/app/(home)/_navbar";
import { Gallery } from "./_gallery";
import { Info } from "./_info";
import { Listing } from "./_listing";

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
      {/* <LuxuryNavbar dark staticPosition /> */}
      <div className={"w-full z-50 h-20 bg-dark-2 shadow-lg"}></div>
      <Gallery />
      <Info />
      <Listing
        list={[
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: 4,
          },
        ]}
      />
    </div>
  );
}
