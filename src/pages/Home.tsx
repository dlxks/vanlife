const Home = () => {
  return (
    <section className="home h-full p-8 text-white">
      <div className="container mx-auto w-full h-screen flex flex-col gap-4 justify-center items-center">
        <h1 className="font-bold text-4xl">
          You got the travel plans, we got the travel vans.
        </h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        <button className="w-full lg:w-2xl py-2 px-auto mt-6 rounded-sm font-medium bg-orange-600 hover:cursor-pointer">
          Find your van
        </button>
      </div>
    </section>
  );
};

export default Home;
