import { motion } from "framer-motion";
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
        <motion.h1
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: .6, ease: 'easeInOut'}}
        className="xl:text-4xl lg:text-7xl md:text-5xl text-4xl capitalize font-main mb-4 font-bold">
          The Road Less Traveled
        </motion.h1>
        <motion.p 
        initial={{y: 100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: .6, delay: .6, ease: 'easeInOut'}}
        className=" text-md font-secondary mb-6 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Ut congue pellentesque amet, mi, aenean suspendisse. <br /> Amet, in
          est dictum tellus cursus.
        </motion.p>
        <motion.button
        initial={{y: 100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: .6, delay: 1.2, ease: 'easeInOut'}}
        className="px-4 py-2 bg-black text-white font-main capitalize text-md">
          Read now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
