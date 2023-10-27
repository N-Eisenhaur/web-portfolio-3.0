import { Close, FiberManualRecordOutlined, MenuOutlined } from '@material-ui/icons'
import React, { useState } from 'react'

import { Link } from "react-scroll"
//import { Link } from 'react-router-dom'
import './styles/Header.css'



const Header = () => {

    const [active,setActive] = useState(false);//this false inactive by default


    const showMenu = () => {
            setActive(!active)//! means opposoite so this is now true so set active to true
    }

/* 

if active true and class is navbar active else just classname navbar 
            <nav className={active ? 'navbar active' : 'navbar'}> 

 so if 850 px wide nav active else navbar and only ul li and a change if 360 

active if clicked icon

*/


    return (
        <div className='header'>

                    <div className="header__logo">
                        <h1></h1>
                    </div>

            <nav className={active ? 'navbar active' : 'navbar'}>

                <ul>
                    <div className="closed">
                        <Close className='close' onClick={showMenu}/>
                    </div>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                   
                  
                   
                    <li>
                        <a target ="_blank" rel="noreferrer" href='http://portcontact.nathan-web.com/'>Contact</a>
                    </li>
                </ul>
            </nav>

                    <div className="changer">
                        <MenuOutlined className='menu' onClick={showMenu}/>
                    </div>
                    </div>
    )
}//menu outline is sanwhich icon

export default Header
