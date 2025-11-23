import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gray-900 text-white py-4 px-6 flex gap-6">
      <Link href="/home" className="hover:text-gray-300">
        Home
      </Link>
      <Link href="/about" className="hover:text-gray-300">
        About
      </Link>
      <Link href="/posts" className="hover:text-gray-300">
        Posts
      </Link>
    </header>
  );
};

export default Header;

