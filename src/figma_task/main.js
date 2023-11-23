import expert_1 from '../img/expert_1.png';
import expert_2 from '../img/expert_2.png';
import sol from '../img/sol.png';
import sag from '../img/sag.png';
import {trips}  from './data.js'
import {whyy} from './data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

import why_1 from '../img/why_1.png';
function Main() {
    return(
    <>
    <div className='firstPart'> 
        <div className='first_part_yazi'>
          <h1>We create trips you love</h1>
          <p>Trips you couldn't plan, even if you wanted to.</p>
        </div>
        <div className="searchBox">
            <input class="searchInput" type="text" name="" placeholder="Search something"></input>
            <button class="searchButton" href="#"> <FontAwesomeIcon icon={faMagnifyingGlass} id='search_icon' /> </button>
        </div>
    </div>   
      
    <h1 className='heading'>Trending now</h1>
      
    <div className="secondPart">
                
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
    <h1 className='heading'>Brand new trips</h1>

    <div className='thirdPart'>        
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

          <Whyus/>
              
            <OurLocal/>


        <SixthPart/>

        <h1 className='heading'>Europe</h1>

        <div className = "seventhPart">
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
      
    <h1 className='heading'>Asia</h1>

    <div className = "seventhPart">
                   
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

    </>
    )
}


export function MiniImage(props) {
    return(
        <div className='mini'>
            <img src={props.image} className='spain'></img>    
            <div className='for_padding'>
                <p style={{ color: '#5E6F7D' }}>{props.trip}</p>
                <h3>{props.expression}</h3>
                <div className='mini_alt'>
                    <p style={{ color: '#5E6F7D' }}>{props.days}</p>
                    <p style={{ color: '#5E6F7D' }}>From <span style={{fontWeight:"bold",color:"#141D24"}}> {props.price}</span></p>
                </div>
            </div>
        </div>
    )}

export function Why(props) {
    return (
    <div className='why_container'>
        <img src={props.image} alt="sadf"></img>
        <p>{props.expression}</p>
    </div>
    )
}

export function OurLocal() {
  return(
    <div className = "fifthPart">
    <h1 className='heading'>Our Local Experts</h1>
    <img src = {expert_2} className = "imgExpert_2"></img>
    <img src = {expert_1} className = "imgExpert_1" ></img>
    <img src={sol} className="sol"></img>
    <img src={sag} className="sag"></img>
  </div>
  )
}

export function Whyus() {
  return(
    <>
        <h1 className='heading'>Why us ?</h1>

<div className='fourthPart'>
    {whyy.map((trip) => (
      <Why
        
        image={trip.image}
        expression = {trip.expression}
        className='fourthPart'
      />
))}
</div>
    </>
  )
}

export function SixthPart() {
  return(
    <>
      
    <div className = "sixthPart">

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
    </>
  )
}


export default Main 