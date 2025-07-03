import LuxuryNavbar from "../(home)/_navbar";
import { Blog } from "./_blog";
import { Guide } from "./_guide";
import { Luxury } from "./_luxury";
import { Report } from "./_report";
import { Showcase } from "./_showcase";

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
      <LuxuryNavbar />
      <Showcase />
      <Guide />
      <Blog />
      <Report />
      <Luxury />
    </div>
  );
}
