import Footer from "./footer"
import Header from "./header"
import blog from "../img/BLOG.png"
import "./Blog.css"
import {Blog_mini_1} from './data'
import {Blog_mini_2} from './data'


function Blog() {
    return(
        <>
        <Header/>
        <main>
            <div id = "blog_main_photo">
                <img src={blog} ></img>

            </div>
            <div className="blog_list">
                <ul>
                    <li>Allarticles</li>
                    <li>Food&Drink</li>
                    <li>Inspiration</li>
                    <li>Local Guides</li>
                    <li>See&Do</li>
                    <li>Travel Tips</li>
                    <li>Where to stay</li>

                </ul>
            </div>
            <div className= 'blog_container'>
                            {  Blog_mini_1.map((item) =>(
                                < Blog_mini_img
                                    image = {item.image}
                                    basliq = {item.basliq}
                                    expression = {item.expression}
                                />
                            ))}
            </div>

            <div className= 'blog_container_2'>
                            {  Blog_mini_2.map((item) =>(
                                < Blog_mini_img_2
                                    image = {item.image}
                                    basliq = {item.basliq}
                                    expression = {item.expression}
                                />
                            ))}
            </div>
         
        </main>
        <Footer/>
        </>
    )
}

export function Blog_mini_img (props) {
    return(
    
           <div className="blog_image_container">
                            <img src={props.image}></img>
                            <div className = 'blog_container_words'>
                                <h2>{props.basliq}</h2> <br></br>
                                <p>{props.expression}</p>
                            </div>
                        </div>
        
    )
}

export function Blog_mini_img_2 (props) {
    return(
    
           <div className="blog_image_container_2">
                            <img src={props.image}></img>
                            <div className = 'blog_container_words_2'>
                                <h2>{props.basliq}</h2> <br></br>
                                <p>{props.expression}</p>
                            </div>
                        </div>
        
    )
}


export default Blog