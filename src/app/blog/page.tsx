import { Luxury } from "./_luxury";
import { BlogList } from "./_listing";
import LuxuryNavbar from "../(home)/_navbar";

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
      {/* <Showcase
        slides={data.banner}
        title={data.pageContent?.BannerTitle}
        description={data.pageContent?.BannerDescription}
      /> */}
      {/* <LuxuryNavbar dark staticPosition /> */}
      <div className={"w-full z-50 h-20 bg-dark-2 shadow-lg"}></div>
      <BlogList />
      {/* <Luxury /> */}
    </div>
  );
}
