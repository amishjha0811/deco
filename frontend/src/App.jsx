import './index.css'
import Homepage from './pages/Homepage'
import Decorations from './pages/Decorations'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Decorations' element={<Decorations/>}/>
      </Routes> 
    </div>
  )
}

export default App