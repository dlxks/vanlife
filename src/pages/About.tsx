import Card from "../components/Card";
import aboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="about bg-[#FFF7ED]">
      <div className="container mx-auto">
        <img src={aboutImg} className="object-cover w-full h-70" />
        <div className="flex flex-col gap-8 p-8">
          <h1 className="font-bold text-4xl">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>

          <Card className="min-w-sm w-full mx-auto p-6 bg-orange-300">
            <Card.Body>
              <p className="flex flex-col font-bold text-3xl">
                <span>Your destination is waiting.</span>
                <span> Your van is ready.</span>
              </p>
              <button className="px-8 py-4 bg-zinc-900 text-white font-medium rounded-xl mt-8 cursor-pointer">
                Explore our vans
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
