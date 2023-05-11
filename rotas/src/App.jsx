import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Header from "./components/Header/Header"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 
