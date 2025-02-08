import { Link } from '@inertiajs/react';


const Layout = ({children}) => {
    return (
        <>
            {/* nav menu */}
            <div className="bg-gray-800 text-white text-center p-4 border-b-2 border-gray-700">
                <img className='rounded-full' src="/images/T.png" alt="Logo" width={60}/>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </nav>
                <div>
                    <Link href="/login">Login</Link>
                </div>
            </div>

            {/* main content */}
            <main>
                {children} 
            </main>


            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center p-4 mt-4 border-t-2 border-gray-700">
                &copy; {new Date().getFullYear()} Team Task Manager. All rights reserved.
            </footer>
        </>
    );
};

export default Layout;