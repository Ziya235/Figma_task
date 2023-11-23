import Footer from "./footer"
import Header from "./header"
import './destination_italy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBagShopping,faSun,faGlobe,faDollarSign,faLanguage,faStar } from '@fortawesome/free-solid-svg-icons'
import { MuseumData, available_trips } from "./data"
import { MiniImage } from "./main"
import map from '../img/Map.png'
import './destination_italy.css'
import { Italy_experts } from "./data"

import mini_image from '../img/why_1.png';
function Italy() {
    return(
        <>
    <Header/>
        <main>
            <div className="destination_italy">
                <div className="italy_plan">
                    <h1>Italy</h1>
                    <p id="italy_plan_trip">Trips you couldn't plan, even if you wanted to.</p>
                    <h3 id="italy_plan_create">Create a trip</h3>
                </div>




                <div className="italy_icons">
                    <div>
                        
                        <div className="italy_icon_item">
                        <FontAwesomeIcon icon={faBagShopping} />
                        <h3>BEST TIME TO VISIT</h3>
                        </div>
                        <p>High s/May-Sept</p>
                    </div>

                    <div>
                        <div className="italy_icon_item">
                            <FontAwesomeIcon icon={faSun} />    
                            <h3>CLIMATE</h3>
                        </div>
                        
                        <p>High 32 C</p>
                        <p>Low 0 C</p>
                    </div>
                    <div>
                        <div className="italy_icon_item">
                            <FontAwesomeIcon icon={faGlobe} />
                            <h3>TIMEZONE</h3>
                        </div>
                  
                        <p>Central European</p>
                        <p>Time(UTC+1)</p>
                    </div>
                    <div>
                        <div className="italy_icon_item">
                            <FontAwesomeIcon icon={faDollarSign} />
                            <h3>Currency</h3>
                        </div>
                 
                        <p>Euro</p>
                        <p>Dollar</p>
                    </div>
                    <div>
                        <div className="italy_icon_item">
                            <FontAwesomeIcon icon={faLanguage} />
                            <h3>Local Language</h3>
                        </div>
                        <p>Italian</p>
                        <p>English</p>
                    </div>
                </div>
            
            </div>

            <div>
            </div>
                
            <h1 className="available_trips">Available Trips</h1>
            <div className="italy_mini_image">
                {available_trips.map((trip) =>(
                      <MiniImage
                      image={trip.image}
                      trip={trip.trip}
                      expression={trip.expression}
                      days={trip.days}
                      price={trip.price}
                    />
                ))}
            </div>
            <img src={map} id="map_image"></img>

            <h1 style={{textAlign:"center"}}>Must-see attractions for your itinerary</h1>

                
                <div id="museum_for_flex">
                {MuseumData.map((data) =>(
                        <Museums
                        image = {data.image}
                        museum_name = {data.museum_name}
                        expression = {data.expression}

                        />
                    ))
                    }
                </div>

                <div className="italy_last_image">
                    <div className="last_image_container">
                        <p>We have a very good time all 
                            the way. The Capri boat ride 
                            is excellent and so much fun
                             with the crew! They are awesome.</p>
                    </div>
                    <div className="last_image_container_2">
                        <img src={mini_image}></img>
                        <div>
                            <h3>Vivian Lim</h3>
                            <div style={{margin:"20px 0 ", color: "blue"}}>
                            <FontAwesomeIcon icon={faStar} /> 
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            </div>

                        </div>
                        <h4>18June 2024</h4>
                    </div>
                </div>
                <h1 id="expert_basliq">Expert guidance to help you </h1>
                <h1 id="expert_basliq">plan your trip</h1>

                <div className="last_pard_grid">

                {Italy_experts.map((item) => (
                    <ItalyExperts
                    image = {item.image}
                    basliq = {item.basliq}
                    expression = {item.expression}
                    />
                    ))}
                </div>
        </main>

        <Footer/>


        </>
    )}

export function ItalyExperts(props) {
    return(
        <div className="italy_lastpart">
        <img src={props.image} id="last_part_image" ></img>
        <div>
            <h2>{props.basliq}</h2> <br></br>
            <p> {props.expression}</p>
        </div>

    </div>


    )
}


export function Museums(props) {
    return( 
        
        <div className="must_see">
                <img src={props.image} id="italy_mini_image" ></img>
                <div className="muzey_expression">      
                        <h2>{props.museum_name}</h2> <br></br>
                        <p >{props.expression}</p>
                </div>

        </div>
        
        )
}

export default Italy