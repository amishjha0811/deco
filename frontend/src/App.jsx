import './index.css'
import Homepage from './pages/Homepage'
import Decorations from './pages/Decorations'
import Explore from './pages/Explore'
import Contact from './pages/Contact'
import Birthday from './pages/Birthday'
import Anniversary from './pages/Anniversary'
import BabyShower from './pages/BabyShower'
import Terms from './pages/Terms'
import About from './pages/About'
import Disclaimer from './pages/Disclaimer'
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Decorations' element={<Decorations/>}/>
        <Route path='/Explore' element={<Explore/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Birthday' element={<Birthday/>}/>
        <Route path='/Anniversary' element={<Anniversary/>}/>
        <Route path='/BabyShower' element={<BabyShower/>}/>
        <Route path='/Terms' element={<Terms/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Disclaimer' element={<Disclaimer/>}/>
      </Routes> 
    </div>
  )
}

export default App