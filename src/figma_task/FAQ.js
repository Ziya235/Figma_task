import Header from "./header";
import Footer from "./footer";
import img from '../img/FAQ.png'
import './FAQ.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX,faPlus } from '@fortawesome/free-solid-svg-icons'
import { faq_question } from "./data";
import { useState } from "react";
function FAQ(){

  const [selected,setSelected] = useState(null)

  const toggle = (i)=>{
      if(selected === i) {
          return setSelected(null)
      }

      setSelected(i)
  }

    return (

        <>
    <Header/>
    <div className="aboutus_photo">
      <h1>FAQ</h1>
      <p>Unlocking the Mysteries of Travel: Your Questions, Our Journey.</p>

    </div>
    <div className="mainPart">    

            {faq_question.map((item,i)=> (
              <div className="item">
                  <div className="title" >
                    <div id="faq_left_side"> 
                        <h1 id="faq_ques_number">{item.number}</h1>
                        <h2>{item.question}</h2>
                    </div>
                    <div>
                        <span id="font_icon"  onClick={()=> toggle(i)} >{selected === i ? 
                        <FontAwesomeIcon icon={faX} id="icon_x" style={{backgroundColor: "blue"}}/>
                        :<FontAwesomeIcon icon={faPlus} id="icon_x" style={{backgroundColor: "gray"}}/>}</span>
                    </div>
                  </div>
                  <div className={selected === i ? 'content show':'content'}> {item.answer} </div> 
                  <hr></hr>
                  
              </div>

            ))}
    </div>
    <Footer/> 
    </>

    )
}

export default FAQ






