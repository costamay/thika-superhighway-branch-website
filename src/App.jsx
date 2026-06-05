import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BranchBanner from './components/BranchBanner'
import LandingPage from './pages/LandingPage'
import BlogPage from './pages/BlogPage'
import MembersPage from './pages/MembersPage'

export default function App() {
  return (
    <>
      <Navbar />
      {/* <BranchBanner /> */}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/members" element={<MembersPage />} />
        </Routes>
      </main>
    </>
  )
}
