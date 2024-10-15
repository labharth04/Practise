import { HashRouter as Router, Route, Routes, Link } from "react-router-dom"
import HeadFoot from "./components/HeadFoot"
import Body from "./components/Body"
import Footer from "./components/Footer"
import AboutusPage from "./Pages/AboutusPage"
import Investors from "./Pages/Investors"
import Solutions from "./Pages/Solutions"
import Home from "./Pages/Home"
import Sustainability from "./Pages/Sustainability"
import Newsroom from "./Pages/Newsroom"
import Career from "./Pages/Career"
import Contactus from "./Pages/Contactus"
import Layout from "./Layout"


function App() {

  return (
      <>
      
        <Routes>
          <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutusPage/>}/>
          <Route path="/investors" element={<Investors/>}/>
          <Route path="/solutions" element={<Solutions/>}/>
          <Route path="/sustainability" element={<Sustainability/>}/>
          <Route path="/newsroom" element={<Newsroom/>}/>
          <Route path="/career" element={<Career/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          </Route>
        </Routes>
 
      </>
  )
}

export default App
