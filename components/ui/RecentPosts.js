
import BlogPost from './BlogPost'

const RecentPosts = () => {
    return (
        <div className=" border border-gray-200 px-4 py-2  grid lg:grid-col-1 sm:grid-col-2 grid-col-1 gap-8">
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
        </div>
    )
}

export default RecentPosts
