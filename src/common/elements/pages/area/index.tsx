import { PropertyBooking } from "@/common/elements/property/page/_booking";
import { Feature } from "@/common/elements/property/page/_feature";
import { Gallery } from "@/common/elements/property/page/_gallery";
import { Location } from "@/common/elements/property/page/_location";
import { Overview } from "@/common/elements/property/page/_overview";
import { Payment } from "@/common/elements/property/page/_payment";
import { Property } from "@/common/elements/property/page/_property";
import { Showcase } from "@/common/elements/property/page/_showcase";
import { Breadcrumb } from "../../breadcrumb";

export const AreaPage = ({ area, slug }: { area: any; slug: string }) => {
  return (
    <>
      <Showcase
        name={area?.Name}
        coverImage={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          area?.CoverImage?.data?.attributes?.url
        }
        description={area?.Description}
        coverVideo={
          area?.CoverVideo?.data?.attributes?.url
            ? process.env.NEXT_PUBLIC_STRAPI_URL +
              area?.CoverVideo?.data?.attributes?.url
            : null
        }
      />
      <Overview
        title={area?.OverviewTitle}
        description={area?.OverviewDescription}
        image={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          area?.OverviewSideImage?.data?.attributes?.url
        }
        startingPrice={area?.StartingPrice}
        bedrooms={area?.Bedrooms}
        OverviewFeature={area?.OverviewFeature}
      />
      <Payment
        description={area?.PaymentPlanDescription}
        image={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          area?.PaymentPlanSideImage?.data?.attributes?.url
        }
        downPaymentPercentage={area?.DownPaymentPercentage}
        duringConstructionPercentage={area?.DuringConstructionPercentage}
        onHandoverPercentage={area?.OnHandoverPercentage}
      />
      <Feature
        title={area?.FeatureTitle}
        description={area?.FeatureDescription}
        higlights={area?.Highlights?.data}
      />
      <Gallery
        title={area?.GalleryTitle}
        description={area?.GalleryDescription}
        interior={area?.GalleryInterior?.data}
        exterior={area?.GalleryExterior?.data}
      />
      <Location
        title={area?.LocationTitle}
        description={area?.LocationDescription}
        highlightDescription={area?.LocationHighlightsDescription}
        nearBy={area?.NearBy}
      />
      <PropertyBooking />
      {area?.properties?.length > 0 && (
        <Property
          title={`${area?.Name} Properties`}
          properties={area.properties}
        />
      )}
      <Breadcrumb
        items={[
          {
            name: "Home",
            link: "/",
          },
          {
            name: "Dubai Real Estate",
            link: "/real-estate-dubai",
          },
          {
            name: area?.Name,
            link: `/${slug}`,
          },
        ]}
      />
    </>
  );
};
