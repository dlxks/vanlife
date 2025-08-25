import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import type { Van } from "../../types/van";
import Badge from "../../components/Badge/Badge";
import Loader from "../../components/Loader";
import PageNotFound from "../../components/Redirects/PageNotFound";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { getVans } from "../../api/api";

const VanDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const search = location.state?.search || "";
  const filterType = location.state?.type || "all";

  const [van, setVan] = useState<Van | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    getVans(id)
      .then((data) => {
        setVan(data as Van);
      })
      .catch((err) => {
        console.error("Failed to fetch data: ", err);
        setError(err.message || "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <section className="vans bg-[#FFF7ED]">
        <PageNotFound />
      </section>
    );
  }

  if (!van) {
    return (
      <section className="vans bg-[#FFF7ED]">
        <div className="container mx-auto p-8">
          <p className="text-lg text-gray-600">No van found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="vans bg-[#FFF7ED] min-h-screen">
      <div className="container mx-auto px-8 py-16">
        <Link
          to={`..?${search}`}
          relative="path"
          className="flex w-fit text-center items-center font-medium text-zinc-600 "
        >
          <span className="flex items-center ">
            <ChevronLeftIcon className="size-5" />
            <span className="border-b border-b-zinc-600">
              Back to {filterType} vans
            </span>
          </span>
        </Link>
        <div className="flex flex-col gap-4 pb-8">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="my-4 rounded-lg shadow-md"
          />
          <Badge
            className={`capitalize w-fit px-3 py-1 text-md text-orange-100 rounded-md
              ${
                van.type === "rugged"
                  ? "bg-emerald-800"
                  : van.type === "simple"
                  ? "bg-amber-700"
                  : van.type === "luxury"
                  ? "bg-zinc-800"
                  : ""
              }`}
          >
            {van.type}
          </Badge>

          <h1 className="text-4xl font-bold">{van.name}</h1>
          <p className="text-2xl font-semibold">
            <strong>${van.price}</strong>/day
          </p>
          <p className="text-lg text-gray-700">{van.description}</p>

          <button className="px-8 py-2 bg-orange-700 text-white font-medium rounded-md mt-8 cursor-pointer">
            Rent this van
          </button>
        </div>
      </div>
    </section>
  );
};

export default VanDetail;
