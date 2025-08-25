import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <section className="flex items-center justify-center bg-stone-800 min-h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-6xl tracking-tight font-extrabold text-red-500">
            401
          </h1>
          <p className="mb-4 text-2xl tracking-tight font-bold text-orange-100">
            Unauthorized Access
          </p>
          <p className="mb-6 text-lg font-light text-orange-200">
            You must be logged in to view this page. Please sign in to continue.
          </p>
          <Link
            to="/login"
            className="inline-flex text-white bg-amber-600 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-150 ease-in-out"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Unauthorized;
