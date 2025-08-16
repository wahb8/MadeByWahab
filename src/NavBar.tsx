import { useState, useEffect} from 'react';

export function NavBar() {
 return (
    <nav className="text-white min-h-screen w-64 p-6 flex flex-col rounded-lg rounded-l-none bg-[url('/Bg.png')] bg-cover bg-center bg-no-repeat">
      {/* Logo */}
      <div className="text-2xl font-bold mb-8"></div>

      {/* Links */}
      <ul className="space-y-4">
        <li><a href="/home" className="hover:text-blue-400">  </a></li>
        <li><a href="/projects" className="hover:text-blue-400 text-4xl">Projects</a></li>
        <li><a href="/writing" className="hover:text-blue-400 text-2xl"> Writing</a></li>
        <li><a href="/mission" className="hover:text-blue-400 text-2xl">Mission</a></li>
      </ul>
    </nav>
  );
}
