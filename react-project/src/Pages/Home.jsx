import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-xl">
          <p className="uppercase tracking-wide text-sm text-red-400 mb-3">
            Explore the latest in movie industries
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Unlimited Movies, TVs <br /> Shows, & More.
          </h1>
          <p className="text-gray-300 mb-8">
            Discover the Top Best Movies and Dramas with a catchy subtitle like
            Your Ultimate Guide to Must-Watch Content.
          </p>
          <NavLink to="/movie">
            <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-md font-semibold cursor-pointer">
              Explore Now
            </button>
          </NavLink>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="movies.png"
            alt="Movie Posters"
            className="rounded-lg shadow-2xl w-[90%] md:w-[80%] lg:w-[70%]"
          />
        </div>
      </div>

      {/* Bottom Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"></div>
    </section>
  );
};
