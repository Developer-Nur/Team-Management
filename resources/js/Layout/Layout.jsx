


import { Link } from '@inertiajs/react';

const Layout = ({ children }) => {
  return (
    <>
      {/* nav menu */}
      <div className="bg-gray-800 text-white p-4 border-b-2 border-gray-700 flex justify-between items-center">
        {/* Logo on the left */}
        <img className="rounded-full" src="/images/T.png" alt="Logo" width={60} />

        {/* Links and Login on the right */}
        <div className="flex items-center space-x-6">
          <nav className="space-x-6">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/posts/create" className="hover:text-gray-400">Create</Link>
            <Link href="/" className="hover:text-gray-400">Contact</Link>
          </nav>

          <div className="ml-6">
            <Link href="/login" className="hover:text-gray-400 bg-gray-50 px-4 py-2 rounded-lg text-black "> Login</Link>
          </div>
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
