import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import Loader from "../../../components/Loader";
import Card from "../../../components/Card";
import Badge from "../../../components/Badge/Badge";
import PageNotFound from "../../../components/Redirects/PageNotFound";
import HostVanHeader from "./HostVanHeader";
import { getHostVans } from "../../../utils/getHostVans";

const HostVanDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const search = location.state?.search || "";
  const hostId = location.state?.hostId;

  const { van, loading, error } = getHostVans(hostId, id);

  if (loading) return <Loader />;
  if (error)
    return (
      <section className="vans bg-[#FFF7ED]">
        <PageNotFound />
      </section>
    );

  if (!van)
    return (
      <section className="vans bg-[#FFF7ED]">
        <div className="container mx-auto p-8">
          <p className="text-lg text-gray-600">No van found.</p>
        </div>
      </section>
    );

  return (
    <section className="container mx-auto px-4 py-8">
      <Link
        to={`..?${search}`}
        relative="path"
        className="flex w-fit text-center items-center font-medium text-zinc-600 mb-8"
      >
        <ChevronLeftIcon className="size-5" />
        <span className="border-b border-b-zinc-600">Back to all vans</span>
      </Link>

      <Card className="my-4">
        <Card.Header className="flex mx-auto items-center gap-4 justify-start w-full shadow-none bg-white p-4">
          <img src={van.imageUrl} alt={van.name} className="h-35 rounded-md" />
          <div className="grid gap-2">
            <Badge
              className={`capitalize w-fit text-sm text-center px-6 py-2 text-orange-100 ${
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
            <h5 className="font-medium text-2xl">{van.name}</h5>
            <p>${van.price}/day</p>
          </div>
        </Card.Header>

        <Card.Body>
          <HostVanHeader />
          <Outlet context={{ van }} />
        </Card.Body>
      </Card>
    </section>
  );
};

export default HostVanDetail;
