import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 bg-gray-800 text-white">
      <nav className="flex justify-center space-x-6">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
