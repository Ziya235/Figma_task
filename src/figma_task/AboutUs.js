import Header  from "./header"
import Footer from "./footer"
import { OurLocal } from "./main"
import { Whyus } from "./main"
import  img from '../img/AboutUs.png'
import "./AboutUs.css"

function About() {
    return(
        <>
        <Header/>
        <div className="aboutus_photo">
            <h1>About us</h1>
            <p>Discover Our Passion for Travel and Adventure.</p>
        </div>
        <div className="paragraph">
            <h1>Changing how the world travels</h1> <br></br>
            <p>We’re on a journey to transform ordinary trips 
                into extraordinary ones. We are your guide, bringing 
                you personal experiences. Wherever your travels take you, 
                we’ll show you the unique and unmissable things to do in 
                your destination. With GetYourGuide on your 
                (and in your pocket), creating memorable moments 
                has never been easier. Today, millions have used
                GetYourGuide to turn their travel dreams into reality. 
                And we’re just getting started. We're changing the way
                people connect to the places they visit so anyone can 
                create their dream vacation. It’s your journey, your way.</p>
        </div>
        <Whyus/>
        <OurLocal/>
        <Footer/>
        </>
    )
}

export default About