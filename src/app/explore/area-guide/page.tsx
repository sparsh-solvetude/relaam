import { Luxury } from "./_luxury";
import { Property } from "./_property";

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
      <Property /><Luxury />
    </div>
  );
}
