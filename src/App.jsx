import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'
import Admin from './pages/Admin'
import Login from './pages/Login'
import PostEditor from './pages/PostEditor'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Post />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/posts/new" element={<PostEditor />} />
        <Route path="/admin/posts/edit/:id" element={<PostEditor />} />
      </Routes>
    </div>
  )
}

export default App
