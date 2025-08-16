import { useState, useEffect} from 'react';

export function NavBar() {
 return (
    <nav className="text-white min-h-screen w-80 p-6 flex flex-col rounded-lg rounded-l-none bg-[url('/Bg.png')] bg-cover bg-center bg-no-repeat">
      {/* Logo */}
      <div className="text-2xl font-bold mb-8"></div>

      {/* Links */}
      <ul className="space-y-4">
        <li><a href="/" className="hover:text-blue-400 text-6xl hover:scale-110 hover:translate-x-2 transition-transform duration-300 inline-block">Main</a></li>
        <li><a href="/projects" className="hover:text-blue-400 text-2xl hover:scale-110 hover:translate-x-2 transition-transform duration-300 inline-block">Projects</a></li>
        <li><a href="/blogs" className="hover:text-blue-400 text-2xl hover:scale-110 hover:translate-x-2 transition-transform duration-300 inline-block"> Writing</a></li>
        <li><a href="/mission" className="hover:text-blue-400 text-2xl hover:scale-110 hover:translate-x-2 transition-transform duration-300 inline-block">Mission</a></li>
      </ul>
    </nav>
  );
}
