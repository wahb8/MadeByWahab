import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { MissionPage } from './Mission.tsx'
import { LandingPage } from './LandingPage.tsx'
import { ProjectsPage } from './ProjectsPage.tsx'
import { BlogsPage } from './BlogsPage.tsx'
import { LoginPage } from './LoginPage.tsx'

function App() {

  return (
	<div className="min-h-screen w-full bg-[url('/FlintLab.webp')] bg-cover bg-center bg-no-repeat bg-fixed">
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage/>} />
				<Route path="/mission" element={< MissionPage/>} />
				<Route path="/projects" element={< ProjectsPage/>} />
				<Route path="/blogs" element={< BlogsPage/>} />
				<Route path="/login" element={< LoginPage/>} />
			</Routes>
		</Router>
	</div>
  )
}

export default App

