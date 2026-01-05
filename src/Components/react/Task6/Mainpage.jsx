import React from 'react'
import { BrowserRouter ,Link, Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './Mainpage.css'

const Mainpage = () => {
  return (
    <div>
        {/* <h2>main pages</h2> */}
        <BrowserRouter>
        <nav className='sample'>
            <Link to="/" className='hov'>Home</Link>
            <Link to="/about" className='hov'>About</Link>
            <Link to="/contact" className='hov'>Contact</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>

        </BrowserRouter>
      
    </div>
  )
}

export default Mainpage
