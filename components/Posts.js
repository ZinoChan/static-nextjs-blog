import BlogPost from "../components/ui/BlogPost";
import RecentPosts from "./ui/RecentPosts";

const Posts = () => {
  return (
    <section
      id="posts"
      className="max-w-screen-xl px-2 mx-auto h-full grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 py-20"
    >
      <div className="col-span-2">
        <h2 className="text-2xl capitalize font-main font-bold mb-6">
          All posts
        </h2>
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
        <h2 className="text-2xl capitalize font-main font-bold mb-6">
          Recent posts
        </h2>
        <RecentPosts />
      </div>
    </section>
  );
};

export default Posts;
