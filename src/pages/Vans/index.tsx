import Badge from "../../components/Badge/Badge";
import Card from "../../components/Card";
import { Link, useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { getVans } from "../../utils/getVans";
import { cn } from "../../helpers/cn";

const Vans = () => {
  const { vans, loading, error } = getVans();
  const [searchParams, setSearchParams] = useSearchParams();

  const types = Array.from(new Set(vans.map((van) => van.type)));

  const typeFilter = searchParams.get("type");

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const handleFilter = (type: string | null) => {
    setSearchParams((prevParams: URLSearchParams) => {
      const newParams = new URLSearchParams(prevParams); // clone it

      if (type === null) {
        newParams.delete("type"); // remove the filter
      } else {
        newParams.set("type", type); // set type=...
      }

      return newParams;
    });
  };

  const clearFilter = () => {
    setSearchParams({});
  };

  return (
    <section className="vans bg-[#FFF7ED] min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 p-8">
          <h1 className="font-bold text-4xl mt-6">Explore our van options</h1>

          <div className="flex flex-wrap py-4 justify-between items-center">
            <div className="flex flex-wrap gap-4">
              {types.map((type, index) => {
                const typeClasses = cn(
                  "py-2 px-4 rounded-md font-medium capitalize transition-all duration-300",
                  typeFilter === type
                    ? type === "simple"
                      ? "bg-amber-700 text-orange-100"
                      : type === "rugged"
                      ? "bg-emerald-700 text-orange-100"
                      : type === "luxury"
                      ? "bg-zinc-700 text-orange-100"
                      : ""
                    : "bg-orange-200 text-zinc-700"
                );

                return (
                  <button
                    key={index}
                    onClick={() => handleFilter(type)}
                    className={typeClasses}
                  >
                    {type}
                  </button>

                  // <Link to={`?type=${type}`}>{type}</Link>
                );
              })}
            </div>

            {typeFilter ? (
              <button
                onClick={clearFilter}
                className="font-medium text-zinc-700 tracking-wide border-b border-zinc-500 cursor-pointer"
              >
                clear filter
              </button>
            ) : null}
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {filteredVans.map((van) => (
              <Link
                key={van.id}
                to={van.id}
                state={{
                  search: searchParams.toString(),
                  type: typeFilter,
                }}
              >
                <Card className="w-full">
                  <Card.Header className="p-0 shadow-none rounded-t-sm">
                    <img
                      src={van.imageUrl}
                      alt={van.name}
                      className="rounded-t-md"
                    />
                  </Card.Header>
                  <Card.Body>
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-medium text-xl">{van.name}</h3>
                        <Badge
                          className={`capitalize w-[100px] text-md text-center px-0 py-2 text-orange-100 ${
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
                      </div>
                      <div className="flex flex-col items-end">
                        <strong className="text-xl font-medium">
                          ${van.price}
                        </strong>
                        <span>/per day</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vans;
