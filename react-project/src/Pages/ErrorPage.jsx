import { useNavigate, useRouteError } from "react-router-dom";

export const ErorPage = () => {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <section>
        <div className="flex justify-center items-center mt-40">
          <img
            src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
            alt="404 Page"
            className="w-150  h-100"
          />
        </div>
        <div className="text-center">
          <p className="mt-9">
            This page you are looking for could not be found
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={handleBackButton}
            className="m-4 p-4 bg-red-500 text-white"
          >
            Back to Previous page
          </button>
        </div>
      </section>
    );
  }

  return <h1 className="text-2xl font-bold">404 Error Page</h1>;
};
