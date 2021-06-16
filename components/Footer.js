import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Footer = () => {

  const [ref, inView] =  useInView({
    threshold: 0.5,
  });
  const animation = useAnimation()
  const slide = useAnimation()

  useEffect(() => {
    if(inView){
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: .6, ease: 'easeInOut'
        }
      })
      slide.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: .6, ease: 'easeInOut', delay: 0.7
        }
      })
    }
  })

  return (
    <section id="footer" className="pt-20" ref={ref}>
      <div className="max-w-screen-sm mx-auto text-center mb-20">
        <motion.h2
        initial={{y: -100, opacity: 0}}
        animate={animation}
        className="text-3xl font-main capitalize mb-6">Join my newsLetter</motion.h2>
        <form className="flex items-center sm:flex-row flex-col justify-center sm:space-x-6 sm:space-y-0 space-y-4 px-4">
         <motion.div
         initial={{x: -100, opacity: 0}}
         animate={slide}
         className="w-full"
         >
         <input type="text" className="border border-gray-200 bg-gray-50 py-2 w-full" />
         </motion.div>
          <motion.button 
          initial={{x: 100, opacity: 0}}
          animate={slide}
          className="px-4 py-2 border border-black bg-black text-white font-main capitalize text-md">
            submit
          </motion.button>
        </form>
      </div>
      <motion.div 
       initial={{y: 100, opacity: 0}}
       animate={animation}
      className="bg-black text-center py-6">
          <p className="text-secondary text-white  text-md">
              &copy;  copy right Zinochan 2021
          </p>
      </motion.div>
    </section>
  );
};

export default Footer;
