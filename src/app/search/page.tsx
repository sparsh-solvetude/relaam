import { Highlight } from "./_highlight";
import { Listing } from "./_listing";
import { Luxury } from "./_luxury";
import { Property } from "./_property";
import { QuickLink } from "./_quick";
import { Recent } from "./_recent";
import { Showcase } from "./_showcase";
import { Trusted } from "./_trusted";

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
      <Showcase
        slides={data.banner}
        title={data.pageContent?.BannerTitle}
        description={data.pageContent?.BannerDescription}
      />
      <Trusted />
      <Property />
      <Listing
        title="Trending"
        list={[
          {
            image: "/images/listing/property-1.jpg",
            title: "Emirates Hills Dubai",
            description:
              "We ensure efficiency and quality from start to finish, providing complete support through every step of the process.",
            price: "AED 3,500,000",
          },
          {
            image: "/images/listing/property-2.jpg",
            title: "Emirates Hills Dubai",
            description:
              "We ensure efficiency and quality from start to finish, providing complete support through every step of the process.",
            price: "AED 3,500,000",
          },
          {
            image: "/images/listing/property-3.jpg",
            title: "Emirates Hills Dubai",
            description:
              "We ensure efficiency and quality from start to finish, providing complete support through every step of the process.",
            price: "AED 3,500,000",
          },
          {
            image: "/images/listing/property-1.jpg",
            title: "Emirates Hills Dubai",
            description:
              "We ensure efficiency and quality from start to finish, providing complete support through every step of the process.",
            price: "AED 3,500,000",
          },
          {
            image: "/images/listing/property-2.jpg",
            title: "Emirates Hills Dubai",
            description:
              "We ensure efficiency and quality from start to finish, providing complete support through every step of the process.",
            price: "AED 3,500,000",
          },
          {
            image: "/images/listing/property-3.jpg",
            title: "Emirates Hills Dubai",
            description:
              "We ensure efficiency and quality from start to finish, providing complete support through every step of the process.",
            price: "AED 3,500,000",
          },
        ]}
      />
      <Listing
        title="New to the Market"
        list={[
          {
            image: "/images/listing/property-1.jpg",
            title: "Emirates Hills Dubai",
            description:
              "We ensure efficiency and quality from start to finish, providing complete support through every step of the process.",
            price: "AED 3,500,000",
          },
          {
            image: "/images/listing/property-2.jpg",
            title: "Emirates Hills Dubai",
            description:
              "We ensure efficiency and quality from start to finish, providing complete support through every step of the process.",
            price: "AED 3,500,000",
          },
          {
            image: "/images/listing/property-3.jpg",
            title: "Emirates Hills Dubai",
            description:
              "We ensure efficiency and quality from start to finish, providing complete support through every step of the process.",
            price: "AED 3,500,000",
          },
          {
            image: "/images/listing/property-1.jpg",
            title: "Emirates Hills Dubai",
            description:
              "We ensure efficiency and quality from start to finish, providing complete support through every step of the process.",
            price: "AED 3,500,000",
          },
          {
            image: "/images/listing/property-2.jpg",
            title: "Emirates Hills Dubai",
            description:
              "We ensure efficiency and quality from start to finish, providing complete support through every step of the process.",
            price: "AED 3,500,000",
          },
          {
            image: "/images/listing/property-3.jpg",
            title: "Emirates Hills Dubai",
            description:
              "We ensure efficiency and quality from start to finish, providing complete support through every step of the process.",
            price: "AED 3,500,000",
          },
        ]}
      />
      <Highlight />
      <Recent />
      <QuickLink />
      <Luxury />
    </div>
  );
}
