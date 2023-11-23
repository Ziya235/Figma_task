
import "./index.css"
import {Layout} from "./components/Layout/Layout"

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import {Home} from "./pages/home/home"
import {About} from "./pages/about/about"
import {Destination} from "./pages/destination/destination"
import {Country} from "./pages/country/country"


function App() {
    return(
        <div className = "wrapper">

        <BrowserRouter>
            <Routes>
                <Route index element = { 
                    <Layout>
                       <Home/>
                    </Layout>
                    } />
                <Route path="/about" element = {
                    <Layout>
                       <About/> 
                    </Layout>
                } />     

                
            <Route path="destination">
                <Route index element = {
                    <Layout>
                        <Destination/>
                    </Layout>
            }
                />
                <Route path=":country" element = {
                    <Layout>
                        <Country/>
                    </Layout>
            }/>
            </Route>

            <Route path="*" element= {<Navigate to ="/404"/>}/>       
             

            </Routes>
        </BrowserRouter>

        </div>
    )
}

export default App