import { useState, useEffect } from 'react';
import { NavBar } from './NavBar.tsx';

// Mock data - this will be replaced with API calls later
const mockProjects = [
	{
		id: 1,
		title: "E-Commerce Platform",
		description: "A modern e-commerce platform built with React and Node.js, featuring user authentication, product management, and secure payment processing.",
		image: "/FlintLab.webp"
	},
	{
		id: 1,
		title: "E-Commerce Platform",
		description: "A modern e-commerce platform built with React and Node.js, featuring user authentication, product management, and secure payment processing.",
		image: "/FlintLab.webp"
	},
	
];

export function ProjectsPage(){
	// State for projects - will be populated from API later
	const [projects, setProjects] = useState(mockProjects);

	// useEffect for future API integration
	useEffect(() => {
		// TODO: Replace with actual API call
		// fetch('/api/projects')
		//   .then(response => response.json())
		//   .then(data => setProjects(data))
		//   .catch(error => console.error('Error fetching projects:', error));
	}, []);

	return (
		<>
		<div className="flex min-h-screen">
			<NavBar />
			<main className="flex-1 p-16 bg-transparent">
				<div className="space-y-8 max-w-4xl mx-auto">
					{projects.map((project) => (
						<div
							key={project.id} // this gives each list item a unique ID so React can track and update the right element when the list changes.
							style={{
								backgroundColor: 'rgba(0, 0, 0, 0.5)',
								backdropFilter: 'blur(4px)',
								borderRadius: '16px',
								padding: '32px',
								boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
								border: '1px solid rgb(20, 21, 23)',
							}}
							className="rounded-2xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
						>
							<div className="flex gap-8 items-start">
								{/* Project Image */}
								<div className="flex-shrink-0">
									<img
										src={project.image}
										alt={project.title}
										className="w-48 h-48 object-cover rounded-lg"
										style={{
											border: '1px solid rgb(20, 21, 23)',
										}}
									/>
								</div>
								
								{/* Project Content */}
								<div className="flex-1">
									<h2 className="text-3xl font-bold mb-3 text-white">
										{project.title}
									</h2>
									<p className="text-gray-300 leading-relaxed">
										{project.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
		</>
	)
}

