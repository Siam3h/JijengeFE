
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Checkout from "./pages/Checkout/Checkout";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Buy from "./components/Buy";
import Sell from "./components/sell";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from "@chakra-ui/react";



function App() {


  return (

    <Router>
      <Box h="100vh">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
