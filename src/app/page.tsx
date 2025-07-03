import { Showcase } from "./(home)/_showcase";
import { Expertise } from "./(home)/_expertise";
import { Expert } from "./(home)/_expert";
import { Property } from "./(home)/_property";
import { Development } from "./(home)/_development";
import { Services } from "./(home)/_services";
import { WhyDubai } from "./(home)/_whyDubai";
import { Partner } from "./(home)/_partner";
import { Awards } from "./(home)/_awards";
import { FAQ } from "./(home)/_faq";
import Booking from "./(home)/_booking";
import { Blogs } from "./(home)/_blogs";
import RealEstateHero from "./(home)/hero";
import LuxuryNavbar from "./(home)/_navbar";
import { Search } from "./(home)/_search";
import { FeaturedProperty } from "./(home)/featuredProperty";
import { Testinomial } from "./(home)/_testinomial";

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
  try {
  } catch (error) {
    console.log("error", error);
  }
  return data;
};

export default async function Home() {
  const data = await fetchData();

  console.log("data.pageContent", data.pageContent);

  return (
    <div>
      {/* <RealEstateHero /> */}
      {/* <LuxuryNavbar /> */}
      <Showcase />
      <Search />
      <FeaturedProperty />
      <Services />
      <Expert />
      <Testinomial />
      <FAQ />
      <Blogs />
      {/* <Expertise />
      <Expert />
      <Property /> */}
      {/* <Development
        slides={data.developments}
        title={data.pageContent?.DevelopmentTitle}
        description={data.pageContent?.DevelopmentDescription}
        features={data.pageContent?.DevelopmentFeature}
      /> */}
      {/* <Services />
      <WhyDubai />
      <Partner />
      <Awards />
      <FAQ />
      <Booking />
      <Blogs /> */}
    </div>
  );
}
