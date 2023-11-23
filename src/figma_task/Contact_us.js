
import contact_img from '../img/Contact_us.png'
import './Contact_us.css'
import Footer from './footer'
import Header from './header'
function Contact_us() {
    return(
        <>
        <Header/>
        <main>
            <div id='contact_image'>
                
                <img src={contact_img}></img>
            </div>

            <div className='Emails' >
                <div className='contact_emails'>
                    <h1>Commercial Contacts</h1> <br></br>
                    <p>To advertise on Tourista:</p>
                    <p className='goy_reng'>advertise@tourista.com</p> <br></br>
                    <p>To become an affiliate partner:</p>
                    <p className='goy_reng'>affiliate@tourista.com</p> <br></br>
                    <p>To contact the hotels team:</p>
                    <p className='goy_reng'>hotels@tourista.com</p> <br></br>
                    <p>Send your request to republish Tourista content:</p>
                    <p className='goy_reng'>contentlicensing@tourista.com</p> <br></br>
                    <p>To contact the experiences team:</p>
                    <p className='goy_reng'>experiences@tourista.com</p>
                </div>
                <div className='contact_emails'>
                    <h1>Content Contact</h1> <br></br>
                    <p>To report an issue to our content teams please contact: </p>
                    <p className='goy_reng'>corrections@tourista.com</p> <br></br>
                    <h1>Press Contact</h1> <br></br>
                    <p>If you’re a journalist / influencer with a press enquiry about Tourista, please contact our press office:</p>
                    <p className='goy_reng'>pr@tourista.com</p> <br></br>
                    <h1>Partnership Contact</h1> <br></br>
                    <p>For partnership opportunities:</p> 
                    <p className='goy_reng'>partnerships@tourista.com</p>
                </div>
            </div>

        </main>
        <Footer/>
        </>
    )
}

export default Contact_us