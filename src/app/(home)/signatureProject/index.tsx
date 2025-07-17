import React from "react";
import PropertyCarousel from "../propertyCarousel";
// components/data/slides.ts

export const slides = [
  { image: "/images/burj-khalifa-view.jpg", label: "OWNER'S ASSOCIATION" },
  { image: "/images/atlantis.jpg", label: "LEASING SERVICES" },
  { image: "/images/burj-al-arab.jpg", label: "COMMUNITY MANAGEMENT" },
  { image: "/images/burj-khalifa-view.jpg", label: "OWNER'S ASSOCIATION" },
  { image: "/images/atlantis.jpg", label: "LEASING SERVICES" },
  { image: "/images/atlantis.jpg", label: "LEASING SERVICES" },
  { image: "/images/atlantis.jpg", label: "LEASING SERVICES" },
];
const content = {
  title: "Our SERVICES",
  heading: "BUILT ON TRUST. <br />DESIGNED FOR WHAT’S NEXT.",
  description:
    "esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
};

const SignatureProject = ({}) => {
  return (
    <div>
      <PropertyCarousel slides={slides} content={content} />
    </div>
  );
};

export default SignatureProject;



