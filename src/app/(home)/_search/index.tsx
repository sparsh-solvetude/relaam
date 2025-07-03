export const Search = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-20 text-black">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        <div className="relative col-span-1 md:col-span-3 flex items-center justify-center py-6 px-8">
          <img
            src="/images/bg-pattern.jpg"
            alt="Hero Image"
            className="w-full h-full object-cover rounded-lg shadow-lg absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="z-30 bg-transparent w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Property Search
            </h2>
            <p className="text-sm md:text-base lg:text-md text-white mt-2">
              Find your dream home today
            </p>
            <div className="flex items-center justify-between mt-4 rounded-full w-full p-2 bg-[#ffffff] shadow-md border border-[#9f3517]">
              {/* Location */}
              <div className="flex flex-col items-start justify-start gap-1 w-auto md:w-1/4 border-none md:border-r border-cream px-3 py-1">
                <label htmlFor="location" className="text-xs text-black px-1">
                  Location
                </label>
                {/* Select */}
                <select
                  name="location"
                  id="location"
                  className="w-full text-theme-red px-0 text-sm bg-transparent focus:outline-none focus:ring-0 focus:border-none"
                >
                  <option value="1">Location 1</option>
                  <option value="2">Location 2</option>
                  <option value="3">Location 3</option>
                </select>
              </div>
              {/* Price */}
              {/* <div className="hidden md:flex flex-col items-start justify-start gap-1 w-1/4 border-r border-cream px-3 py-1">
                <label
                  htmlFor="location"
                  className="text-xs text-gray-500 px-1"
                >
                  Price
                </label>
                <div className="px-1 text-xs">AED min - AED max</div>
              </div> */}
              {/* Property Type */}
              <div className="hidden md:flex flex-col items-start justify-start gap-1 w-1/4 px-3 py-1">
                <label
                  htmlFor="location"
                  className="text-xs text-gray-500 px-1"
                >
                  Property Type
                </label>
                {/* Select */}
                <select
                  name="location"
                  id="location"
                  className="w-full px-0 text-sm bg-transparent focus:outline-none focus:ring-0 focus:border-none"
                >
                  <option value="1">Off Plan</option>
                  <option value="2">Type 2</option>
                  <option value="3">Type 3</option>
                </select>
              </div>
              {/* Search btn */}
              <button className="bg-[#9f3517] text-white px-4 py-4 w-auto md:w-1/4 h-full rounded-full font-playfair uppercase">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="relative col-span-2 flex items-center justify-center py-6 px-8">
          <img
            src="/images/bg-pattern.jpg"
            alt="Hero Image"
            className="w-full h-full object-cover rounded-lg shadow-lg absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
          <div className="z-30 bg-transparent w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Our Portals
            </h2>
            <p className="text-sm md:text-base lg:text-md text-white mt-2">
              Manage your property needs online with ADCP Tenant and Landlord
              Portals
            </p>
            <div className="flex items-center justify-between gap-3 mt-4 rounded-full w-full flex-col md:flex-row">
              {/* Tenant Portal */}
              <button className="bg-[#9f3517] text-white px-3 py-3 w-full md:w-1/2 h-full rounded-lg font-bold uppercase">
                Tenant Portal
              </button>
              {/* Landlord Portal */}
              <button className="bg-white border border-[#9f3517] text-[#9f3517] px-3 py-3 w-full md:w-1/2 h-full rounded-lg font-bold uppercase">
                Landlord Portal
              </button>
            </div>
            {/* forgot password */}
            <div className="flex items-center justify-between flex-wrap mt-4">
              <div className="text-xs text-white mt-2">
                <a href="#" className="hover:underline text-[#ffbba9]">
                  Forgot Password?
                </a>
              </div>
              {/* Not a current user? Click here to register */}
              <div className="text-xs text-white mt-2">
                Not a current user?{" "}
                <a href="#" className="hover:underline text-[#ffbba9]">
                  Click here to register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
