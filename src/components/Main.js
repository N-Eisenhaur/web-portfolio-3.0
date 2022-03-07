import {  LinkedIn, MenuBook,  SettingsPowerRounded,  } from '@material-ui/icons'
import React, { useState } from 'react'
import './styles/Main.css'
import { Link } from "react-scroll"


const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>Hey There !</p>
                            <h1>I am Nathan Eisenhaur</h1>
                            <p>Jr Front end Web Designer</p>

                            <div className="icons">
                             
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nathan-eisenhaur/">
                    
                   
                               <LinkedIn className='icon'/>
                              
                                </a>

                            </div>


                    <div className="buttons">

                    <Link to='cards'  spy={true} smooth={true} offset={20} duration={500}> 

                        <button>See My Work</button>

                       </Link>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                
                </div>


            </div>



        </div>
    )
}


export default Main
