import { Link } from "react-router-dom";
import { getVans } from "../../utils/getVans";
import { StarIcon } from "@heroicons/react/16/solid";
import Loader from "../../components/Loader";

// Define Van type
interface Van {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export default function Dashboard() {
  const { vans, loading, error } = getVans(3);
  if (loading) return <Loader />;
  if (error) return <h1>Error: {error}</h1>;

  function renderVanElements(vans: Van[]) {
    return (
      <section className="flex flex-wrap gap-4">
        {vans.map((van) => (
          <div
            className="flex mx-auto items-center gap-4 justify-start w-full h-fit rounded-md md:max-w-md bg-white p-4"
            key={van.id}
          >
            <img
              src={van.imageUrl}
              alt={`Photo of ${van.name}`}
              className="h-25 rounded-md"
            />
            <div className="w-full flex items-center justify-between">
              <div className="host-van-info">
                <h5 className="font-medium text-2xl">{van.name}</h5>
                <p>${van.price}/day</p>
              </div>
              <Link to={`vans/${van.id}`} className="hover:border-b">
                View
              </Link>
            </div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section className="container mx-auto flex flex-col gap-4 py-8 px-4">
      <section className="bg-[#ffead0] flex justify-between items-center p-6 rounded-md text-zinc-900">
        <div className="info">
          <h1 className="text-4xl font-medium mb-4">Welcome!</h1>
          <p className="mb-2">
            Income last{" "}
            <span className="underline font-medium mb-2">30 days</span>
          </p>
          <h2 className="text-4xl font-black tracking-wide">$2,260</h2>
        </div>
        <Link to="income" className="hover:border-b">
          Details
        </Link>
      </section>

      <section className="bg-[#ffddb2] flex items-center justify-between p-6 rounded-md text-zinc-900">
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl font-medium">Review score</h2>

          <StarIcon className="size-6 text-yellow-500" />
          <p>
            <span className="font-bold">5.0</span>/5
          </p>
        </div>
        <Link to="reviews" className="hover:border-b">
          Details
        </Link>
      </section>

      <section className="p-6 text-zinc-900">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-medium">Your listed vans</h2>
          <Link to="vans" className="hover:border-b">
            View all
          </Link>
        </div>
        {loading ? <Loader /> : renderVanElements(vans)}
      </section>
    </section>
  );
}
