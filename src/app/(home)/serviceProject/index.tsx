"use client";

import PropertyCarousel from "../propertyCarousel";


export const slides = [
  { image: "/images/burj-khalifa-view.jpg", label: "KHALIFA CITY" },
  { image: "/images/atlantis.jpg", label: "MBZ CITY" },
  { image: "/images/burj-al-arab.jpg", label: "AL RAHAH" },
  { image: "/images/burj-khalifa-view.jpg", label: "BANO YAS CITY" },
  // { image: "/images/atlantis.jpg", label: "LEASING SERVICES" },
  // { image: "/images/atlantis.jpg", label: "LEASING SERVICES" },
  // { image: "/images/atlantis.jpg", label: "LEASING SERVICES" },
];

const content = {
  title: "FEATURED DISTRICTS",
  heading: "MAPPING ABU DHABI <br />ONE DISTRICT AT A TIME",
  description:""
    // "esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
};

const ServiceProject = () => {
  const isButton = "false"
  return (
    <div>
      <PropertyCarousel slides={slides} content={content} isButton={isButton}  />
    </div>
  );
};

export default ServiceProject;
