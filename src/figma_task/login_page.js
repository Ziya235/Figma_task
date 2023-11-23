
import login from '../img/Login.png'
import turista from '../img/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'

import './login_page.css'


function LoginPage() {
    return(
        <div className='login'>
            <img src={login }></img>
            <div>
                <div className='login_right'>
                    <img src={turista}></img>
                </div>
                <div className='login_right_main'>
                    <h1>Sign in for your exciting journey</h1> <br></br> <br></br> <br></br>
                    <label>Email</label> 
                    <input type='email' placeholder='someone@gmail.com'></input> <br></br>
                    <label>Password</label>
                    <input type='password' id='myInput'></input> <br></br>
                    <FontAwesomeIcon icon={faEye} spin style={{color: "#fc1d1d",}} id='login_icon' onClick={password_togggle} />
                    <p>Forget password?</p> <br></br> <br></br>
                    <button>Sign in</button>
                </div>
            
                <div>
                </div>

            </div>
  

        </div>
    )
}
export function password_togggle() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

export default LoginPage