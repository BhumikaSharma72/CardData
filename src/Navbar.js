import { NavLink } from 'react-router-dom'
import { Routes,Route } from "react-router-dom";
// import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Home from './Home'
import Item from './Item';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Brand /> */}
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path = "/" element = {<Home></Home>}></Route>

          <Route path = "/item" element = {<Item></Item>}></Route>
        </Routes>
          
      </div>
    </nav>
  )
}

export default Navbar