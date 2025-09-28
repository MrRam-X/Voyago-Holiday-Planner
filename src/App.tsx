import "./App.css";
import "./assets/css/custom.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="font-outfit">
      <Header />
      <main>
       {/* Hero Section */}
        <section
          id="hero"
          className="hero-section relative h-screen flex items-center justify-center text-white p-4 z-10"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              id="hero-bg"
              className="absolute inset-0 bg-cover bg-center hero-bg-animate"
            ></div>
          </div>
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="relative z-10 text-center w-full max-w-6xl">
            <div className="hero-text-animate">
              <p className="text-4xl font-light tracking-widest font-shadows">
                Beauty and Discovery
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold my-4">
                Explore the World
              </h1>
            </div>

            {/* Booking Form */}
            <div className="hero-form-animate bg-white text-gray-600 rounded-lg shadow-2xl flex flex-col lg:flex-row items-stretch w-full mx-auto mt-12">
              {/* On mobile, the form fields now stack vertically inside this container */}
              <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {/* Location Field */}
                <div className="flex items-center justify-between p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
                  <div className="custom-select-wrapper w-full text-left relative">
                    <label className="block text-sm text-gray-500">
                      Location
                    </label>
                    <div className="custom-select-trigger cursor-pointer">
                      <span className="text-base font-semibold">
                        Where To Next?
                      </span>
                      <input type="hidden" name="location" value="" />
                    </div>
                    <ul className="custom-select-options hidden absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
                      <li
                        className="p-2 hover:bg-brand-primary hover:text-white cursor-pointer"
                        data-value="paris"
                      >
                        Paris, France
                      </li>
                      <li
                        className="p-2 hover:bg-brand-primary hover:text-white cursor-pointer"
                        data-value="kyoto"
                      >
                        Kyoto, Japan
                      </li>
                    </ul>
                  </div>
                  <i className="fas fa-map-marker-alt text-gray-400 text-xl ml-4"></i>
                </div>

                {/* Type Field */}
                <div className="flex items-center justify-between p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
                  <div className="custom-select-wrapper w-full text-left relative">
                    <label className="block text-sm text-gray-500">Type</label>
                    <div className="custom-select-trigger cursor-pointer">
                      <span className="text-base font-semibold">
                        Booking Type
                      </span>
                      <input type="hidden" name="type" value="" />
                    </div>
                    <ul className="custom-select-options hidden absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
                      <li
                        className="p-2 hover:bg-brand-primary hover:text-white cursor-pointer"
                        data-value="adventure"
                      >
                        Adventure
                      </li>
                      <li
                        className="p-2 hover:bg-brand-primary hover:text-white cursor-pointer"
                        data-value="beach"
                      >
                        Beach
                      </li>
                    </ul>
                  </div>
                  <i className="fas fa-hiking text-gray-400 text-xl ml-4"></i>
                </div>

                {/* Date From Field */}
                <div
                  id="date-picker-trigger"
                  className="relative flex items-center justify-between p-4 border-b lg:border-b-0 lg:border-r border-gray-200 cursor-pointer"
                >
                  <div className="text-left w-full">
                    <label className="block text-sm text-gray-500">
                      Date From
                    </label>
                    <span id="date-display" className="text-base font-semibold">
                      Select Date
                    </span>
                  </div>
                  <i className="fas fa-calendar-alt text-gray-400 text-xl ml-4"></i>

                  <div
                    id="date-picker-container"
                    className="date-picker-container absolute left-0 top-full mt-2 w-full lg:w-[32rem] bg-white rounded-lg border border-gray-200 p-4 z-20 hidden transform scale-95 opacity-0"
                  >
                    <div
                      id="calendars-container"
                      className="flex flex-col sm:flex-row justify-around"
                    ></div>
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 pt-4 border-t border-gray-200 gap-4">
                      <span
                        id="date-range-display"
                        className="text-sm text-gray-600"
                      ></span>
                      <div className="flex space-x-2">
                        <button
                          id="cancel-date-btn"
                          className="px-4 py-2 bg-brand-dark text-white rounded-md text-sm"
                        >
                          Cancel
                        </button>
                        <button
                          id="apply-date-btn"
                          className="px-4 py-2 bg-brand-primary text-white rounded-md text-sm"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guests Field */}
                <div className="flex items-center justify-between p-4">
                  <div className="text-left">
                    <label className="block text-sm text-gray-500">
                      Guests
                    </label>
                    <input
                      type="number"
                      id="guests-input"
                      className="font-semibold text-base w-12 border-none focus:ring-0 p-0"
                      value="2"
                      min="1"
                    />
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <button id="decrement-guests">
                      <i className="fas fa-minus-circle text-gray-500"></i>
                    </button>
                    <button id="increment-guests">
                      <i className="fas fa-plus-circle text-gray-500"></i>
                    </button>
                    <div className="border-l h-6 border-gray-200"></div>
                    <i className="fas fa-sliders-h cursor-pointer"></i>
                  </div>
                </div>
              </div>

              {/* On mobile, the button now stacks below the form fields */}
              <button className="bg-brand-primary text-white px-8 py-4 lg:py-0 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none hover:bg-red-600 transition-colors">
                <i className="fas fa-search text-2xl"></i>
              </button>
            </div>
          </div>
        </section>

        {/* Destination List Section */}
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
                  {/* Added tour-count-btn className and removed hover: classNamees */}
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
                  {/* Added tour-count-btn className and removed hover: classNamees */}
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
                  {/* Added tour-count-btn className and removed hover: classNamees */}
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
                  {/* Added tour-count-btn className and removed hover: classNamees */}
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
                  {/* Added tour-count-btn className and removed hover: classNamees */}
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
                <h3 className="font-bold text-3xl mt-2">
                  Summer Hottest Deals
                </h3>
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
      </main>
    </div>
  );
}

export default App;
