
import BlogPost from './BlogPost'

const RecentPosts = () => {
    return (
        <div className="rounded border border-gray-200 p-4 xl:block grid sm:grid-cols-2 grid-cols-1">
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
        </div>
    )
}

export default RecentPosts
