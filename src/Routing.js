

import { BrowserRouter,  Route, Routes } from "react-router-dom"

import HomePage from "./HomePage"
import ServicePage from "./ServicePage"
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"
import PageNotFount from "./PageNotFount"

import Nav from "./Nav"
import Boot from "./Boot"
import Item from "./Item"
import Header from "./Header"



function Routing()
{
    return(
        <div>
            <BrowserRouter>
            {/* <Nav></Nav> */}
            <Header></Header>
            <Boot></Boot>
            
                <Routes>
                    <Route path="/" element={<HomePage></HomePage>}></Route>
                    <Route path="/service" element={<ServicePage></ServicePage>}></Route>
                    <Route path="/about" element={<AboutPage></AboutPage>}></Route>
                    <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
                    <Route path="*" element={<PageNotFount></PageNotFount>}></Route>
                    <Route path="item" element={<Item></Item>}></Route>

                </Routes>
            
            </BrowserRouter>
        </div>
    )
}
export default Routing