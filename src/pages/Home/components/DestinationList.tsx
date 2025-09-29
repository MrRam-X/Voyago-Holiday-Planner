import React from "react";

const DestinationList: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Grid container for the destination cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 1. Title Block */}
          <div className="flex flex-col justify-center lg:pr-8 mb-8 lg:mb-0">
            <p className="text-brand-primary font-semibold tracking-widest mb-2">
              DESTINATION LIST
            </p>
            <h2 className="text-4xl font-bold text-brand-dark leading-tight">
              Explore the Beautiful Places Around the World
            </h2>
          </div>

          {/* 2. Spain Card (Rectangle) */}
          <div className="group relative rounded-2xl overflow-hidden h-72">
            <img
              src="./assets/images/spain-cliffs.jpg"
              alt="Cliffs of Spain"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-white text-center">
              <span className="tour-count-btn bg-brand-primary text-white px-3 py-1 rounded-md text-xs font-semibold inline-block transition-all duration-700 transform translate-x-6 group-hover:translate-x-0 cursor-pointer">
                8 TOURS
              </span>
              <h3 className="text-2xl font-bold mt-2 destination-name cursor-pointer">
                Spain
              </h3>
            </div>
          </div>

          {/* 3. Thailand Card (Wide Rectangle) */}
          <div className="group relative rounded-2xl overflow-hidden md:col-span-2 h-72">
            <img
              src="./assets/images/thailand-mountains.jpg"
              alt="Woman taking photo in Thailand mountains"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-white text-center">
              <span className="tour-count-btn bg-brand-primary text-white px-3 py-1 rounded-md text-xs font-semibold inline-block transition-all duration-700 transform translate-x-8 group-hover:translate-x-0 cursor-pointer">
                7 TOURS
              </span>
              <h3 className="text-2xl font-bold mt-2 destination-name cursor-pointer">
                Thailand
              </h3>
            </div>
          </div>

          {/* 4. Dubai Card (Circle) */}
          <div className="group relative rounded-full overflow-hidden w-full h-0 pb-[100%]">
            <img
              src="./assets/images/camping-in-tent.jpg"
              alt="Camping tents in the mountains"
              className="absolute w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-white text-center">
              <span className="tour-count-btn bg-brand-primary text-white px-3 py-1 rounded-md text-xs font-semibold inline-block transition-all duration-700 transform translate-x-6 group-hover:translate-x-0 cursor-pointer">
                6 TOURS
              </span>
              <h3 className="text-2xl font-bold mt-2 destination-name cursor-pointer">
                Dubai
              </h3>
            </div>
          </div>

          {/* 5. Australia Card (Rectangle) */}
          <div className="group relative rounded-2xl overflow-hidden h-72">
            <img
              src="./assets/images/mountain-side-lake.jpg"
              alt="Wooden pier in Australia"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-white text-center">
              <span className="tour-count-btn bg-brand-primary text-white px-3 py-1 rounded-md text-xs font-semibold inline-block transition-all duration-700 transform translate-x-8 group-hover:translate-x-0 cursor-pointer">
                13 TOURS
              </span>
              <h3 className="text-2xl font-bold mt-2 destination-name cursor-pointer">
                Australia
              </h3>
            </div>
          </div>

          {/* 6. Italy Card (Circle) */}
          <div className="group relative rounded-full overflow-hidden w-full h-0 pb-[100%]">
            <img
              src="./assets/images/boating-around-islands.jpg"
              alt="Person looking over a lake in Italy"
              className="absolute w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-white text-center">
              <span className="tour-count-btn bg-brand-primary text-white px-3 py-1 rounded-md text-xs font-semibold inline-block transition-all duration-700 transform translate-x-6 group-hover:translate-x-0 cursor-pointer">
                2 TOURS
              </span>
              <h3 className="text-2xl font-bold mt-2 destination-name cursor-pointer">
                Italy
              </h3>
            </div>
          </div>

          {/* 7. Deals Card */}
          <div className="deals-card bg-brand-primary rounded-2xl text-white p-8 flex flex-col justify-center items-center text-center">
            <p className="font-shadows text-3xl">20% Off</p>
            <h3 className="font-bold text-3xl mt-2">Summer Hottest Deals</h3>
            <a
              href="#"
              className="view-deals-btn bg-white text-brand-primary font-semibold px-6 py-2 rounded-lg mt-6"
            >
              View Deals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationList;
