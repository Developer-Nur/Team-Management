export default function Home({ posts }) {
    console.log(posts);
    return (
        <>
            <div className=" items-center min-h-screen mt-6 p-7">
                <h1 className="text-3xl font-bold text-blue-500">Welcome to Team task management!</h1>

                <div className="mt-10">
                    {posts.map(post =>
                        <div key={post.id} className="p-4 border-b">
                            <div className="text-gray-400 text-sm">
                                <span>Posted at: </span>
                                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                            </div>
                            <p>{post.body}</p>
                        </div>)}
                </div>
            </div>
        </>
    )
}