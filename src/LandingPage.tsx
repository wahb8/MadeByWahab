import { useState, useEffect } from 'react';
import { NavBar } from './NavBar.tsx';

export function LandingPage(){
	return(
		<div className="flex min-h-screen">
			<NavBar />
			<main className="flex-1 p-6 bg-transparent">
				<h1 className="text-3xl font-bold mb-4 text-white">Welcome to my website</h1>
				<h2 className="text-xl text-white">Here I showcase all my projects/writings</h2>
			</main>
		</div>
	);
}
