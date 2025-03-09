export default function Home({ posts }) {
    console.log(posts);
    return (
        <>
            {/* <div className=" items-center min-h-screen mt-6 p-7">
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
            </div> */}

            {/* pos customer dashboard */}
            <section className="bg-white h-screen mt-10">
                <div className="container mx-auto px-4 md:px-32 lg:px-[300px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className="flex flex-col items-center space-y-5">
                            <div className="bg-[#f2f2f2] p-10 shadow-xl rounded-lg hover:-translate-y-2 transition-transform duration-500">
                                <a className="" href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="50"
                                        height="50"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 50 50"
                                        style={{
                                            enableBackground: "new 0 0 512 512",
                                        }}
                                        xmlSpace="preserve"
                                        className=""
                                    >
                                        <g>
                                            <path
                                                fill="#81e7fa"
                                                d="M19 49H3c-1.1 0-2-.9-2-2V21c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v26c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#81e7fa"
                                            ></path>
                                            <path
                                                fill="#f1ce85"
                                                d="M19 15H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#f1ce85"
                                            ></path>
                                            <path
                                                fill="#bb9cf1"
                                                d="M47 49H27c-1.1 0-2-.9-2-2V29c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#bb9cf1"
                                                className=""
                                            ></path>
                                            <path
                                                fill="#fb8098"
                                                d="M47 23H27c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#fb8098"
                                                className=""
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                            <p className="text-[#333333]">Dashboard</p>
                        </div>

                        <div className="flex flex-col items-center space-y-5">
                            <div className="bg-[#f2f2f2] p-10 shadow-xl rounded-lg hover:-translate-y-2 transition-transform duration-500">
                                <a className="" href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="50"
                                        height="50"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 512 512"
                                        style={{
                                            enableBackground: "new 0 0 512 512",
                                        }}
                                        xmlSpace="preserve"
                                        className=""
                                    >
                                        <g>
                                            <linearGradient
                                                id="a"
                                                x1="256"
                                                x2="256"
                                                y1="-2.801"
                                                y2="509.199"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop
                                                    offset="0"
                                                    stopColor="#01f1fe"
                                                ></stop>
                                                <stop
                                                    offset="1"
                                                    stopColor="#4fadfe"
                                                ></stop>
                                            </linearGradient>
                                            <path
                                                fill="url(#a)"
                                                d="M512 86.401V177.6c0 17.673-14.327 32-32 32h-91.199c-17.673 0-32-14.327-32-32s14.327-32 32-32h24.45C377.916 94.955 320.007 64 256 64c-79.639 0-149.848 47.913-178.866 122.063-6.442 16.458-25.006 24.577-41.462 18.137-16.458-6.441-24.578-25.004-18.137-41.461 18.559-47.423 50.547-87.906 92.506-117.073C153.018 15.791 203.489 0 256 0s102.982 15.791 145.959 45.665c17.076 11.87 32.501 25.616 46.041 40.94v-.203c0-17.673 14.327-32 32-32s32 14.326 32 31.999zm-35.672 221.4c-16.457-6.442-35.02 1.68-41.462 18.137C405.848 400.088 335.639 448 256 448c-62.647 0-119.454-29.654-154.97-78.4h22.169c17.673 0 32-14.327 32-32s-14.327-32-32-32H32c-17.673 0-32 14.327-32 32v91.2c0 17.673 14.327 32 32 32s32-14.327 32-32v-3.404c13.54 15.324 28.965 29.069 46.041 40.939C153.018 496.209 203.489 512 256 512s102.982-15.791 145.959-45.665c41.959-29.167 73.947-69.65 92.506-117.073 6.441-16.457-1.679-35.02-18.137-41.461z"
                                                opacity="1"
                                                data-original="url(#a)"
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                            <p className="text-[#333333]">Sync with POS </p>
                        </div>

                        <div className="flex flex-col items-center space-y-5">
                            <div className="bg-[#f2f2f2] p-10 shadow-xl rounded-lg hover:-translate-y-2 transition-transform duration-500">
                                <a className="" href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="50"
                                        height="50"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 50 50"
                                        style={{
                                            enableBackground: "new 0 0 512 512",
                                        }}
                                        xmlSpace="preserve"
                                        className=""
                                    >
                                        <g>
                                            <path
                                                fill="#81e7fa"
                                                d="M19 49H3c-1.1 0-2-.9-2-2V21c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v26c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#81e7fa"
                                            ></path>
                                            <path
                                                fill="#f1ce85"
                                                d="M19 15H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#f1ce85"
                                            ></path>
                                            <path
                                                fill="#bb9cf1"
                                                d="M47 49H27c-1.1 0-2-.9-2-2V29c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#bb9cf1"
                                                className=""
                                            ></path>
                                            <path
                                                fill="#fb8098"
                                                d="M47 23H27c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#fb8098"
                                                className=""
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                            <p className="text-[#333333]">Inventory</p>
                        </div>

                        <div className="flex flex-col items-center space-y-5">
                            <div className="bg-[#f2f2f2] p-10 shadow-xl rounded-lg hover:-translate-y-2 transition-transform duration-500">
                                <a className="" href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="50"
                                        height="50"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 50 50"
                                        style={{
                                            enableBackground: "new 0 0 512 512",
                                        }}
                                        xmlSpace="preserve"
                                        className=""
                                    >
                                        <g>
                                            <path
                                                fill="#81e7fa"
                                                d="M19 49H3c-1.1 0-2-.9-2-2V21c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v26c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#81e7fa"
                                            ></path>
                                            <path
                                                fill="#f1ce85"
                                                d="M19 15H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#f1ce85"
                                            ></path>
                                            <path
                                                fill="#bb9cf1"
                                                d="M47 49H27c-1.1 0-2-.9-2-2V29c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#bb9cf1"
                                                className=""
                                            ></path>
                                            <path
                                                fill="#fb8098"
                                                d="M47 23H27c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#fb8098"
                                                className=""
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                            <p className="text-[#333333]">Use POS </p>
                        </div>

                        <div className="flex flex-col items-center space-y-5">
                            <div className="bg-[#f2f2f2] p-10 shadow-xl rounded-lg hover:-translate-y-2 transition-transform duration-500">
                                <a className="" href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="50"
                                        height="50"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 50 50"
                                        style={{
                                            enableBackground: "new 0 0 512 512",
                                        }}
                                        xmlSpace="preserve"
                                        className=""
                                    >
                                        <g>
                                            <path
                                                fill="#81e7fa"
                                                d="M19 49H3c-1.1 0-2-.9-2-2V21c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v26c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#81e7fa"
                                            ></path>
                                            <path
                                                fill="#f1ce85"
                                                d="M19 15H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#f1ce85"
                                            ></path>
                                            <path
                                                fill="#bb9cf1"
                                                d="M47 49H27c-1.1 0-2-.9-2-2V29c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#bb9cf1"
                                                className=""
                                            ></path>
                                            <path
                                                fill="#fb8098"
                                                d="M47 23H27c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2z"
                                                opacity="1"
                                                data-original="#fb8098"
                                                className=""
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                            <p className="text-[#333333]">HRM</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
