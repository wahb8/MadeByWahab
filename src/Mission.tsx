import {useState, useEffect} from 'react';
import {NavBar} from './NavBar.tsx';

export function MissionPage(){
	return (
		<div className="flex min-h-screen">
			<NavBar />
			<main className="flex-1 p-16 bg-transparent">
				<div style={{
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					backdropFilter: 'blur(4px)',
					borderRadius: '16px',
					padding: '32px',
					boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
					border: '1px solid rgb(20, 21, 23)',
					maxWidth: '800px',
					margin: '0 auto'
				}} className="rounded-2xl">
					<h1 className="text-3xl font-bold mb-4 text-white text-center">My mission</h1>
					<h2 className="text-xl text-white text-lg text-left mb-6"> I believe my main purpose in this life is to create and build things that can help people, and that's what I'm trying to do. Everything project I work on and every skill I attempt to gain is done solely with the thought that one day this is going to help people in some shape or form. Maybe some day in the future I might sell a product or a service, just know however that the reason I'm doing this is to gain more capital to fund the project I'm working on or to help build bigger ones that I believe will be benifit people ultimately. And even then, I will try to make the costs of my services/product as cheap as possible to satisfy. </h2>
					
					<h2 className="text-xl text-white text-lg text-left mb-6"> (I am human after all). Otherwise, I will try to make everything I build open and for free to all people to use. I also think I'm not going to build anything that requires me to sell for money anytime soon (at least in the next two years) so chances are all of my current projects/apps are for free and open to use.</h2>
					<h2 className="text-xl text-white text-lg text-left mb-6"> (I am human after all). Otherwise, I will try to make everything I build open and for free to all people to use. I also think I'm not going to build anything that requires me to sell for money anytime soon (at least in the next two years) so chances are all of my current projects/apps are for free and open to use.</h2>

					<h2 className="text-xl text-white text-lg text-left mb-6"> :) </h2>	
					<h4 className="text-l text-white text-center">P.S. Yes, I know my UI skills are insane</h4>
				</div>
			</main>
		</div>
	)
}
