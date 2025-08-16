import { useState, useEffect } from 'react';
import { NavBar } from './NavBar.tsx';

// Type definition for timeline items
interface TimelineItem {
	id: number;
	title: string;
	content: string;
	image: string;
	date: string;
	type: 'project' | 'blog';
}

// Mock data - this will be replaced with API calls later
const mockProjects: TimelineItem[] = [
	{
		id: 1,
		title: "E-Commerce Platform",
		content: "A modern e-commerce platform built with React and Node.js, featuring user authentication, product management, and secure payment processing.",
		image: "/FlintLab.webp",
		date: "2024-01-15",
		type: "project"
	},
	{
		id: 2,
		title: "Task Management App",
		content: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
		image: "/FlintLab.webp",
		date: "2024-02-20",
		type: "project"
	}
];

const mockBlogs: TimelineItem[] = [
	{
		id: 1,
		title: "Getting Started with React Development",
		content: "A comprehensive guide for beginners looking to dive into React development. Learn the fundamentals, setup your environment, and build your first component.",
		image: "/FlintLab.webp",
		date: "2024-03-10",
		type: "blog"
	},
	{
		id: 2,
		title: "Modern CSS Techniques for Better UX",
		content: "Explore advanced CSS techniques including Grid, Flexbox, and custom properties to create stunning user interfaces and improve user experience.",
		image: "/FlintLab.webp",
		date: "2024-01-25",
		type: "blog"
	},
	{
		id: 3,
		title: "Building Scalable APIs with Node.js",
		content: "Learn how to design and implement robust APIs using Node.js, Express, and best practices for handling authentication, validation, and error handling.",
		image: "/FlintLab.webp",
		date: "2024-02-05",
		type: "blog"
	},
	{
		id: 4,
		title: "The Future of Web Development",
		content: "Discover emerging trends in web development including AI integration, WebAssembly, and the evolution of frontend frameworks shaping the future of the web.",
		image: "/FlintLab.webp",
		date: "2024-03-15",
		type: "blog"
	},
	{
		id: 5,
		title: "Optimizing Performance in React Applications",
		content: "Deep dive into React performance optimization techniques including code splitting, lazy loading, memoization, and bundle size optimization strategies.",
		image: "/FlintLab.webp",
		date: "2024-01-30",
		type: "blog"
	}
];

export function LandingPage(){
	// State for combined timeline - will be populated from API later
	const [timeline, setTimeline] = useState<TimelineItem[]>([]);

	// useEffect for future API integration and sorting
	useEffect(() => {
		// TODO: Replace with actual API calls
		// fetch('/api/projects')
		//   .then(response => response.json())
		//   .then(projects => {
		//     fetch('/api/blogs')
		//       .then(response => response.json())
		//       .then(blogs => {
		//         const combined = [...projects, ...blogs];
		//         const sorted = combined.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
		//         setTimeline(sorted);
		//       });
		//   });

		// For now, use mock data
		const combined = [...mockProjects, ...mockBlogs];
		const sorted = combined.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
		setTimeline(sorted);
	}, []);

	return(
		<div className="flex min-h-screen">
			<NavBar />
			<main className="flex-1 p-16 bg-transparent">
				<div className="space-y-8 max-w-4xl mx-auto">
					{timeline.map((item) => (
						<div
							key={`${item.type}-${item.id}`}
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
								{/* Item Image */}
								<div className="flex-shrink-0">
									<img
										src={item.image}
										alt={item.title}
										className="w-48 h-48 object-cover rounded-lg"
										style={{
											border: '1px solid rgb(20, 21, 23)',
										}}
									/>
								</div>
								
								{/* Item Content */}
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-2">
										<h2 className="text-3xl font-bold text-white">
											{item.title}
										</h2>
										<span className={`px-3 py-1 rounded-full text-sm font-medium ${
											item.type === 'project' 
												? 'bg-blue-500 text-white' 
												: 'bg-red-500 text-white'
										}`}>
											{item.type === 'project' ? 'Project' : 'Blog'}
										</span>
									</div>
									<p className="text-gray-400 text-sm mb-3">
										{new Date(item.date).toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'long',
											day: 'numeric'
										})}
									</p>
									<p className="text-gray-300 leading-relaxed">
										{item.content}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
