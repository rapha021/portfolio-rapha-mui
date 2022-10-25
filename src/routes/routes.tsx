import { Routes, Route, Navigate } from "react-router-dom"
import About from "../Pages/About"
import Home from "../Pages/Home"
import Projects from "../Pages/Projects"

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<>404</>} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default MainRoutes