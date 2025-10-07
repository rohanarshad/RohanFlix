export const getMovieDetails = async ({ params }) => {
  console.log(params);

  const id = params.movieID;
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
