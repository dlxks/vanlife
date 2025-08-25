import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";
import { getHostVans } from "../../../utils/getHostVans";

const Vans = () => {
  const hostId = "123";
  const { vans, loading, error } = getHostVans(hostId);
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="font-bold text-2xl">Your listed vans</h1>

      <div className="flex flex-wrap gap-4 py-8">
        {vans.map((van) => (
          <Link
            key={van.id}
            to={van.id}
            state={{ hostId }}
            className="flex mx-auto items-center gap-4 justify-start w-full rounded-md md:max-w-md bg-white p-4"
          >
            <img
              src={van.imageUrl}
              alt={van.name}
              className="h-25 rounded-md"
            />
            <div>
              <h5 className="font-medium text-2xl">{van.name}</h5>
              <p>${van.price}/day</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Vans;
