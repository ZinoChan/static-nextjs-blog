import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="max-w-screen-xl px-2 mx-auto h-screen bg-cover bg-center xl:grid xl:grid-cols-2 flex items-center"
    >
      <div className="z-20 absolute h-screen top-0 left-0 w-full">
        <Image  src="/road.jpg" layout="fill" />
      </div>
      <div className="relative z-30 w-full">
        <h1 className="xl:text-4xl lg:text-7xl md:text-5xl text-4xl capitalize font-main mb-4 font-bold">
          The Road Less Traveled
        </h1>
        <p className=" text-md font-secondary mb-6 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Ut congue pellentesque amet, mi, aenean suspendisse. <br /> Amet, in
          est dictum tellus cursus.
        </p>
        <button className="px-4 py-2 bg-black text-white font-main capitalize text-md">
          Read now
        </button>
      </div>
    </section>
  );
};

export default Hero;
