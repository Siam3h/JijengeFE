
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogIn from "./components/LogIn"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
