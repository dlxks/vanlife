import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="flex items-center justify-center bg-stone-800 min-h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-orange-600">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-orange-900 md:text-4xl ">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-orange-200 ">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Link
            to=".."
            relative="path"
            className="inline-flex text-white bg-amber-600 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 transition-all duration-150 ease-in-out"
          >
            Back to Previous Page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
