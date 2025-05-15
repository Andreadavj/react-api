import { Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import Pizza from "../components/Pizza"
import Cart from "../components/Cart"

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
