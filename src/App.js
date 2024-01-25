import {BrowserRouter, Routes , Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./About"
import About from "./Home"
import Contact from "./Contact"
import Service from "./Service"

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}   />
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="service" element={<Service/>}/>

    </Route>
   </Routes>
   </BrowserRouter>
  )
}









