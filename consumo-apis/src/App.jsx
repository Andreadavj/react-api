import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cart from "./components/Cart";
// import Pizza from "./components/Pizza";
// import Login from "./components/Login";
// import Register from "./components/Register";


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Pizza /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      <Footer />
    </div>
  )
}

export default App

