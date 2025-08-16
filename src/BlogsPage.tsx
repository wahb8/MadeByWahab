import { useState, useEffect } from 'react';
import { NavBar } from './NavBar.tsx';

// Mock data - this will be replaced with API calls later
const mockBlogs = [
	{
		id: 1,
		title: "Getting Started with React Development",
		description: "A comprehensive guide for beginners looking to dive into React development. Learn the fundamentals, setup your environment, and build your first component.",
		image: "/FlintLab.webp"
	},
	{
		id: 2,
		title: "Modern CSS Techniques for Better UX",
		description: "Explore advanced CSS techniques including Grid, Flexbox, and custom properties to create stunning user interfaces and improve user experience.",
		image: "/FlintLab.webp"
	},
	{
		id: 3,
		title: "Building Scalable APIs with Node.js",
		description: "Learn how to design and implement robust APIs using Node.js, Express, and best practices for handling authentication, validation, and error handling.",
		image: "/FlintLab.webp"
	},
	{
		id: 4,
		title: "The Future of Web Development",
		description: "Discover emerging trends in web development including AI integration, WebAssembly, and the evolution of frontend frameworks shaping the future of the web.",
		image: "/FlintLab.webp"
	},
	{
		id: 5,
		title: "Optimizing Performance in React Applications",
		description: "Deep dive into React performance optimization techniques including code splitting, lazy loading, memoization, and bundle size optimization strategies.",
		image: "/FlintLab.webp"
	}
];

export function BlogsPage(){
	// State for blogs - will be populated from API later
	const [blogs, setBlogs] = useState(mockBlogs);

	// useEffect for future API integration
	useEffect(() => {
		// TODO: Replace with actual API call
		// fetch('/api/blogs')
		//   .then(response => response.json())
		//   .then(data => setBlogs(data))
		//   .catch(error => console.error('Error fetching blogs:', error));
	}, []);

	return (
		<>
		<div className="flex min-h-screen">
			<NavBar />
			<main className="flex-1 p-16 bg-transparent">
				<div className="space-y-8 max-w-4xl mx-auto">
					{blogs.map((blog) => (
						<div
							key={blog.id}
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
								{/* Blog Image */}
								<div className="flex-shrink-0">
									<img
										src={blog.image}
										alt={blog.title}
										className="w-48 h-48 object-cover rounded-lg"
										style={{
											border: '1px solid rgb(20, 21, 23)',
										}}
									/>
								</div>
								
								{/* Blog Content */}
								<div className="flex-1">
									<h2 className="text-3xl font-bold mb-3 text-white">
										{blog.title}
									</h2>
									<p className="text-gray-300 leading-relaxed">
										{blog.description}
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

