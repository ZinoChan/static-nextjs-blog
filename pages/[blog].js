import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";



const BlogDetails = () => {
  return (
    <>
    <motion.h1
      initial={{x: -100, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: .6, ease: 'easeInOut'}}
    className="text-2xl font-bold font-main underline p-4">
      <Link href="/">
        <a>Back to Posts</a>
      </Link>
    </motion.h1>
      <section className="h-full max-w-screen-xl px-2 py-20 ">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center my-10">
            <motion.h2
              initial={{y: -100, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: .6, delay: .6, ease: 'easeInOut'}}
            className="font-main font-bold text-2xl mb-6 capitalize">
              Lorem ipsum dolar
            </motion.h2>
            <motion.div
             initial={{y: 100, opacity: 0}}
             animate={{y: 0, opacity: 1}}
             transition={{duration: .6, delay: 1, ease: 'easeInOut'}}
            >
            <Image src="/blog2.jpg" width={900} height={500} />
            </motion.div>
          </div>
          <p className=" text-gray-400 font-secondary">10min read</p>
          <p className="mt-16 text-md font-secondary text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            pellentesque pellentesque consequat cursus metus quis enim etiam
            bibendum. Suspendisse euismod adipiscing nunc, amet dui velit vel,
            suspendisse. Lacus, tellus tempus enim, habitant. Morbi in elit
            mauris non eu sit. Sit vitae auctor est eget et sit vitae. Varius
            ultrices diam mauris molestie cras diam nunc aliquet. Amet tellus
            dignissim aliquet pellentesque dapibus at sit sem eget. Dui quisque
            cras praesent orci, fames. Ipsum mauris. in suscipit lacus viverra
            blandit interdum non. Id at massa, diam eget. <br /> <br />
            Id quisque dui enim mattis tincidunt iaculis facilisis. Posuere
            suscipit ipsum massa amet tincidunt. Eget dignissim aliquam id
            mauris justo pulvinar auctor ultricies. Nisl nunc tortor, imperdiet
            a vehicula tortor consequat vitae euismod. Egestas cursus laoreet
            libero nunc. Orci eget proin placerat in nulla est fermentum. Justo
            porttitor in venenatis pellentesque malesuada felis sem tempus,
            purus. Odio at amet, lobortis nisi rhoncus volutpat justo, lobortis.
            Neque sit morbi arcu risus, turpis. Pharetra tellus a,
            <br /> <br />
            bibendum amet justo, quisque massa, a. Pulvinar sed et maecenas
            lectus. Egestas tellus a lacus risus feugiat erat congue. Eget sed
            egestas orci, cursus mi tincidunt eget. Ligula consequat purus purus
            purus. Nisl aliquam arcu a, rhoncus.
          </p>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default BlogDetails;
