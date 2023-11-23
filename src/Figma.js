import Header from './figma_task/header'
import  Main from './figma_task/main'
import Footer from './figma_task/footer'
import './figma_task/header.css'
import './figma_task/main.css'
import './figma_task/footer.css'
import Italy from './figma_task/destination-italy'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './figma_task/AboutUs'
import FAQ from './figma_task/FAQ'
import Destination from './figma_task/destination'
import Blog from './figma_task/Blog'
import Contact_us from './figma_task/Contact_us'
import LoginPage from './figma_task/login_page'

function Figma () {

    return (
<>
        <BrowserRouter>
            <Routes>
                <Route index element = {
                    <>
                        <Header></Header>
                        <Main></Main>
                        <Footer></Footer> 
                    </>
    }>          
    </Route>
            <Route path='/home' element = {
                      <>
                      <Header></Header>
                      <Main></Main>
                      <Footer></Footer> 
                  </>
            }>

            </Route>
            <Route path='/about' element = {
                    <>
                        <About></About>
                    </>
    }>          
    </Route>

    <Route path='/FAQ' element = {
                    <>
                        <FAQ></FAQ>
                    </>
    }>          
    </Route>

    
    <Route path='/Blog' element = {
        <Blog/>
    }>

    </Route>
    
    <Route path='/ContactUs' element = {
        <Contact_us/>
    }>

    </Route>

    <Route path='/Destination'> 
        <Route index element = {
            <Destination/>
        }
        />
    </Route>

    <Route path='/Destination/Italy' element = {
        <Italy/>
    }>
    </Route>

    <Route path='/Login' element = {
        <LoginPage/>
    }>

    </Route>

    

    
            </Routes>
        
        </BrowserRouter>
</>    
    )
}

export default Figma


