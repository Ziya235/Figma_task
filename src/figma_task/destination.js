import Footer from "./footer"
import Header from "./header"
import './destination.css'
import { MiniImage } from "./main"
import {trips}  from './data.js'
import why_1 from '../img/why_1.png';
import { SixthPart } from "./main"
import { Link } from "react-router-dom"

function Destination() {
    return(
        <>
        <Header/>
        <main>
            <div className="destiantion_first_photo">
            </div>

            <div className="countries">
                <div>
                <h1>Europe</h1>    <br></br>
                <ul>
                    <li>Azores</li>
                    <li>Croatia</li>
                    <li>Georgia</li>
                    <li>Germany</li>
                    <li>Greece</li>
                    <li>Iceland</li>
                    <li>Ireland</li>
                    <li><Link to= "/Destination/Italy" className='link_1' style={{color:'#3A4D5A'}}>Italy</Link></li>
                    <li>Portugal</li>
                    <li>Scotland</li>
                    <li>Spain</li>
                    <li>Unites Kingdom</li>
                </ul>

                </div>
                
                <div>
                <h1>Asia</h1>   <br></br>
                <ul>
                    <li>Cambodia</li>
                    <li>China</li>
                    <li>India</li>
                    <li>Japan</li>
                    <li>Jordan</li>
                    <li>South Korea</li>
                    <li>Sri Lanka</li>
                    <li>Taiwan</li>
                    <li>Thailand</li>
                    <li>Turkey</li>
                    <li>Vietnam</li>
                </ul>
                </div>

                <div>
                    <h1>Africa</h1>  <br></br>
                    <ul>
                        <li>Egypt</li>
                        <li>Ethiopia</li>
                        <li>Kenya</li>
                        <li>Ghana</li>
                        <li>Madagascar</li>
                        <li>Mauritius</li>
                        <li>Morocco</li>
                        <li>Namibia</li>
                        <li>Rwanda</li>
                        <li>South Africa</li>
                        <li>Uganda</li>
                        <li>Tanzania</li>
                    </ul>
                </div>

                <div>
                    <h1>C/America</h1> <br></br>
                    <ul>
                        <li>Belize</li>
                        <li>Costa Rica</li>
                        <li>Cuba</li>
                        <li>Domincan Rebupblic</li>
                        <li>Guatemela</li>
                        <li>Honduras</li>
                        <li>Jamaica</li>
                        <li>Nicaragua</li>
                        <li>Mexico</li>
                        <li>Panama</li>
                        <li>Panama</li>
                        <li>Puerto Rico</li>
                        <li>Tobago</li>
                    </ul>
                </div>

                <div>
                    <h1>S/America</h1> <br></br>
                    <ul>
                        <li>Argentina</li>
                        <li>Bolivia</li>
                        <li>Brazil</li>
                        <li>Chile</li>
                        <li>Colombia</li>
                        <li>Ecudor</li>
                        <li>Peru</li>
                    </ul>
                </div>
     

            </div>

            <div>
                <h1 style={{textAlign:"center", margin:"0 0 70px 0"}}>Top Destination</h1>
            
            <div className="seventhPart">
                
            {trips.map((trip) => (
                <MiniImage
                    image={trip.image}
                    trip={trip.trip}
                    expression={trip.expression}
                    days={trip.days}
                    price={trip.price}
                />
                ))}
                </div>

                <div className="seventhPart">
                
                {trips.map((trip) => (
                    <MiniImage
                        image={trip.image}
                        trip={trip.trip}
                        expression={trip.expression}
                        days={trip.days}
                        price={trip.price}
                    />
                    ))}
                    </div>

            </div>

               
    <div className = "destination_last_part">

<div className="sixContainer">
    <p>“Tiago put together an epic itinerary for me
        and my friends. He showed us some hidden
        hiking trails and amazing local food spots.
        He even met us for a coffee to make sure we
        had everything we needed.</p>
    <h3 style= {{color: "blue",height:"24px"}}>Thanks Tiago!”</h3>
    <p className="carli">Charlie, rappelling down a 370-foot waterfall</p>
    <p className="azour">The Azores</p>
</div>
<div className="sixContainer_2">
                  <img src={why_1}></img>
                  <div className='tiago_yazilar'>
                    <p>Trip crafted by</p> 
                    <div className='tiago'>
                      <h3>Tiago</h3>
                      <h5>Local expert in Portugal</h5>
                    </div>
                  </div>
                 
              </div>

</div>
        </main>
        <Footer/>
        </>
    )
}

export default Destination