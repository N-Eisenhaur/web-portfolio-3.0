import React from 'react'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'

//import { Link } from "react-scroll"



import './styles/Works.css'

const Works = () => {
    return (
        
        
        
        
        <div className='works'>
           
           
           
           
            <div className="work__section">




                <div className="cards">
                    <img src={img1} alt="" />
                    <a target="_blank" rel="noreferrer" href="https://weatherapione.netlify.app/">
                    <button>See Work</button>
                    </a>

                </div>

                <div className="cards">
                    <img src={img2} alt="" />
                    <a target="_blank" rel="noreferrer" href="https://themecontext.netlify.app/">
                    <button>See Work</button>
                    </a>

                </div>

                <div className="cards">
                    <img src={img3} alt="" />
                    <a target="_blank" rel="noreferrer" href="https://bookcontext.netlify.app/">
                    <button>See Work</button>
                    </a>

                </div>
                
                <div className="cards">
                    <img src={img4} alt="" />
                    <a target="_blank" rel="noreferrer" href="http://portfolio.nathan-web.com/">
                    <button>See Work</button>
                    </a>

                </div>


                <div className="cards">
                    <img src={img5} alt="" />
                    <a target="_blank" rel="noreferrer" href="https://bootstrapvueresponive.netlify.app">
                    <button>See Work</button>
                    </a>

                </div>


                <div className="cards">
                    <img src={img6} alt="" />
                    <a target="_blank" rel="noreferrer" href="https://react-website-v1-master-normal-css.netlify.app/">
                    <button>See Work</button>
                    </a>

                </div>






            </div>
        </div>
    )
}

export default Works
