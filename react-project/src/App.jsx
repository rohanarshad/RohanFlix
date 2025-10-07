import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Movie } from "./Pages/Movie";
import { Contact, contactData } from "./Pages/Contact";
import AppLayout from "./components/Layout/AppLayout";
import { ErorPage } from "./Pages/ErrorPage";
import { getAPIData } from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetaila";
import { getMovieDetails } from "./api/GetMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getAPIData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
