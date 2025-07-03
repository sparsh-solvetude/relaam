import { QuickLink } from "./_quick";
import { Gallery } from "./_gallery";
import { Info } from "./_info";
import { Listing } from "./_listing";
import { Luxury } from "./_luxury";

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
      <Gallery />
      <Info />
      <Listing
        title={
          <>
            Trending
            <span className="hidden md:inline">
              {" "}
              Properties in Jumeriah Park
            </span>
          </>
        }
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
      <Luxury />
    </div>
  );
}
