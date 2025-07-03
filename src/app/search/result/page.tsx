import LuxuryNavbar from "@/app/(home)/_navbar";
import { Filter } from "./_filter";
import { Property } from "./_property";
import { QuickLink } from "./_quick";

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
      
      <Property />
      {/* <QuickLink /> */}
    </div>
  );
}
