import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import { Aboutus } from "./pages/about_us"
import {Events_pg} from "./pages/events"
import { Contact_us } from "./pages/contact_us"
import { Start_ups } from "./pages/startups_pg"
import { Privacy } from "./pages/privacy"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/events" element={<Events_pg/>} />
        <Route path="/contact" element={<Contact_us/>} />
        <Route path="/startups" element={<Start_ups/>} />
        <Route path="/privacy" element={<Privacy/>} />
      </Routes>
    </div>
  )
}

export default App