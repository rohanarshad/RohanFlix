import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6">
        {moviesData &&
          moviesData.Search.map((currMovie) => {
            return <Card key={currMovie.imdbID} currMovie={currMovie} />;
          })}
      </ul>
    </>
  );
};
