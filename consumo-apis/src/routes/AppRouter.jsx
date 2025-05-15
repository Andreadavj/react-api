import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Pizza from "../pages/Pizza"
import Cart from "../pages/Cart"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza/:id" element={<Pizza />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default AppRouter
