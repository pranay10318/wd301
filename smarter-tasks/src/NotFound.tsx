import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center text-3xl font-extrabold">
      <h1>404 error page not found</h1>
      <button id="backToHomeButton">
        <Link to="/" className="ml-6 text-blue-300 hover:text-black">
          Go Home
        </Link>
      </button>
    </div>
  );
};
export default NotFound;
