// import { BsStarFill } from "react-icons/bs";
import { StarIcon } from "@heroicons/react/16/solid";
import chartImg from "../../assets/chart.png";

const Reviews = () => {
  const reviews = [
    {
      id: "1",
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
    },
    {
      id: "2",
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 text-zinc-900 min-h-screen">
      <div className="flex gap-8 items-center">
        <h2 className="text-3xl font-semibold">Your reviews</h2>
        <p>
          Last <span className="underline font-medium">30 days</span>
        </p>
      </div>

      <img
        className="p-6 my-6 bg-white place-self-center w-full"
        src={chartImg}
        alt="Review graph"
      />

      <h3 className="font-bold text-lg">Reviews ({reviews.length})</h3>

      {reviews.map((review) => (
        <div key={review.id}>
          <div className="py-6">
            {/* render stars */}
            <div className="flex">
              {[...Array(review.rating)].map((_, i) => (
                <StarIcon className="size-6 text-yellow-500" key={i} />
              ))}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <p className="font-bold">{review.name}</p>
              <p className="text-zinc-600">{review.date}</p>
            </div>
            <p>{review.text}</p>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
};

export default Reviews;
