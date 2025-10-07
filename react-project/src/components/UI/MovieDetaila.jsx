import { NavLink, useLoaderData } from "react-router-dom";

export const MovieDetails = ({}) => {
  const movieData = useLoaderData();
  console.log(movieData);

  const { Poster, imdbID } = movieData;

  return (
    <li className="w-full m-auto flex mt-[3.2rem]">
      <div className="relative w-64 h-[550px] ml-4">
        {/* Poster */}
        <div className="absolute top-3 left-3/5 -translate-x-1/2 z-10 w-70">
          <img
            src={Poster}
            alt={imdbID}
            className="w-full h-[25rem] object-cover shadow-[0 5px 20px 3px rgba(0, 0, 0, 0.6)] rounded"
          />
        </div>

        {/* Ticket Background */}
        <div className="absolute top-6 left-0 w-77 h-[30rem] bg-white rounded-md shadow-lg flex flex-col justify-end bg-white">
          <div className="text-center">
            <NavLink to={`/movie/${imdbID}`}>
              <button className="w-full bg-[#2f2f2f] text-white py-3 font-bold uppercase rounded-b-md hover:bg-[#444] transition cursor-pointer">
                Watch Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </li>
  );
};
