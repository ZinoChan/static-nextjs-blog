import {  motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';



const BlogPost = () => {

  const [ref, inView] = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: .6, ease: 'easeInOut'
        }
      });
    }
  },[inView])

  return (
    <motion.div
    ref={ref}
    initial={{y: 100, opacity: 0}}
    animate={animation}
    className="rounded border border-gray-200">
      <Link href="/blog">
        <a
        >
          <img src="/blog1.jpg" alt="blog" />
          <div className="px-2 py-4">
            <p className="my-2 text-md font-secondary text-gray-300">10min read</p>
            <h3 className="text-xl font-main mb-4 capitalize">Lorem ipsum dolar</h3>
            <p className="text-md font-secondary text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
              egestas sit amet sed platea dui enim consequat. Nec, viverra sed
              sodales senectus tincidunt in.
            </p>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default BlogPost;
