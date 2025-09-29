import React from "react";
import {
  faMapMarkerAlt,
  faHiking,
  faSearch,
  faCalendar,
  faMinusCircle,
  faPlusCircle,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSection: React.FC = () => {
  return (
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
                <label className="block text-sm text-gray-500">Location</label>
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
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-gray-400 text-xl ml-4"
              />
            </div>

            {/* Type Field */}
            <div className="flex items-center justify-between p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="custom-select-wrapper w-full text-left relative">
                <label className="block text-sm text-gray-500">Type</label>
                <div className="custom-select-trigger cursor-pointer">
                  <span className="text-base font-semibold">Booking Type</span>
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
              <FontAwesomeIcon
                icon={faHiking}
                className="text-gray-400 text-xl ml-4"
              />
            </div>

            {/* Date From Field */}
            <div
              id="date-picker-trigger"
              className="relative flex items-center justify-between p-4 border-b lg:border-b-0 lg:border-r border-gray-200 cursor-pointer"
            >
              <div className="text-left w-full">
                <label className="block text-sm text-gray-500">Date From</label>
                <span id="date-display" className="text-base font-semibold">
                  Select Date
                </span>
              </div>
              <FontAwesomeIcon
                icon={faCalendar}
                className="text-gray-400 text-xl ml-4"
              />

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
                <label className="block text-sm text-gray-500">Guests</label>
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
                  <FontAwesomeIcon
                    icon={faMinusCircle}
                    className="text-gray-500"
                  />
                </button>
                <button id="increment-guests">
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    className="text-gray-500"
                  />
                </button>
                <div className="border-l h-6 border-gray-200"></div>
                <FontAwesomeIcon icon={faSlidersH} className="cursor-pointer" />
              </div>
            </div>
          </div>

          {/* On mobile, the button now stacks below the form fields */}
          <button className="hero-search-btn bg-brand-primary text-white px-8 py-4 lg:py-0 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none transition-colors">
            <FontAwesomeIcon icon={faSearch} className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
