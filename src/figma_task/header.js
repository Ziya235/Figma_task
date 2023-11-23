import { Link } from 'react-router-dom'
import img from '../img/Logo.png'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faManatSign,faEuroSign,faRubleSign} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
// import styled from "styled-components";

// const linkStyle = {
//     textDecoration: "none",
//     color: 'black'
//   };

function Header(i) {
        
    const [selected,setSelected] = useState(null)
    
    const toggle = (i)=>{
        if(selected === i) {
            return setSelected(null)
        }  
        setSelected(i)
    }

    return(        
        <>
        <header>
        <div className='aaa'>
        <div className="forcolor">
            
        <div className="header_container">
            <ul>
                <li><Link to = '/home' className='link_1'>Home</Link></li>
                <li><Link to='/about' className='link_1'>About US</Link></li>
                <li><Link to = '/FAQ'  className='link_1'>FAQ</Link></li>
                <li><Link to = '/Blog'  className='link_1'>Blog</Link></li>
                <li><Link to = '/Contactus'  className='link_1'>Contact us</Link></li>
            </ul>
        </div>
        <div>
            <h4 style={{cursor:'pointer'}} onClick={()=> toggle(i)} >US $</h4>
        </div>
      
        </div>
        </div>

        <div className="header_container2">
            <div>
                <ul>
                    <li><Link to = '/Destination'className='link_1'>Destinations</Link></li>
                    <li>Private trips</li>
                </ul>
            </div>
      
            <img src={img} alt='dsf'></img>

            <div className='buttons'>
                <button className='feel'>I'm feeling lucky</button>
                <button className='header_login'><Link to = "/Login" className='link_1' style={{color:"blue"}}>Login</Link></button>
                <div className={selected === i ? 'money_part_show':'money_part_hidden'}>
                    <div className='moneys'>
                        <p>AZN</p>
                        <FontAwesomeIcon icon={faManatSign} />
                    </div>
                    <div className='moneys'>
                        <p>Euro</p>
                        <FontAwesomeIcon icon={faEuroSign} />
                    </div>
                    <div className='moneys'>
                        <p>Ruble</p>
                        <FontAwesomeIcon icon={faRubleSign} />              
                    </div>
                
                </div>
            </div>

        </div>
        </header>
       
        </>
        
    )
}


export default Header