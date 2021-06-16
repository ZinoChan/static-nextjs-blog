import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import BlogPost from "../components/ui/BlogPost";
import RecentPosts from "./ui/RecentPosts";


const Posts = () => {
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
    <section
      id="posts"
      className="max-w-screen-xl px-2 mx-auto h-full grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 py-20"
    >
      <div className="col-span-2">
        <motion.h2 
         ref={ref}
        initial={{y: -100, opacity: 0}}
        animate={animation}
        className="text-2xl capitalize font-main font-bold mb-6">
          All posts
        </motion.h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
      </div>
      <div className="xl:col-span-1 col-span-2">
        <motion.h2
         ref={ref}
        initial={{y: -100, opacity: 0}}
        animate={animation}
        className="text-2xl capitalize font-main font-bold mb-6">
          Recent posts
        </motion.h2>
        <RecentPosts />
      </div>
    </section>
  );
};

export default Posts;
