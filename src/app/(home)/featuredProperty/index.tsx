import { Item } from "@/common/elements/property/item";

export const FeaturedProperty = () => {
  return (
    <div className="bg-white relative">
      <div className="">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 pt-10 pb-20 ">
          <div className="text-black flex flex-col justify-center items-center text-center gap-2">
            <h2 className="text-5xl font-bold mb-6 leading-base">
              Featured Property
            </h2>
            <p className="font-light opacity-80 max-w-4xl">
              Discover our exclusive featured property that offers unparalleled
              luxury and comfort. This stunning residence is designed to meet
              the highest standards of modern living, providing a perfect blend
              of elegance and functionality.
            </p>
            {/* <button
              className="bg-[#9f3517] text-white px-8 py-2 mt-8 rounded-lg font-semibold text-lg"
              onClick={() => showSet(true)}
            >
              Start Your Journey
            </button> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Item
            // image, slug, name, location, price
                image="/images/burj-khalifa-view.jpg"
                slug="property-1"
                name="Luxury Villa in Dubai"
                location="Dubai, UAE"
                price="AED 5,000,000"
            />
            <Item
                image="/images/atlantis.jpg"
                slug="property-2"
                name="Modern Apartment in Marina"
                location="Dubai Marina, UAE"
                price="AED 3,500,000"
            />
            <Item 
                image="/images/burj-al-arab.jpg"
                slug="property-3"
                name="Elegant Villa in Abu Dhabi"
                location="Abu Dhabi, UAE"
                price="AED 4,200,000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
