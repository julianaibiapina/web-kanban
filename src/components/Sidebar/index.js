import React from 'react';
import './style.css'
import menu from '../../assets/menu-dark.svg'
import logo from '../../assets/logo-purple.svg'


export default function Sidebar(){
    return(
        <div id="sidebar" className="hide">

            <div className='header-menu'>
                    
                    <a href='#'>
                        <img src={menu} alt='menu'/>
                    </a>

                    <a href='#' className='logo'>
                        <img src={logo} alt='logotipo'/>
                        <h1>Kanban</h1>
                    </a>
                </div>

            <div className="content-menu">
                <div className='boards'>
                <h2>Boards</h2>

                <a>
                    <img src='#'/>
                </a>
                </div>
                
            </div>

            <div className='footer-menu'>
                
            </div>
            
        </div>
    )
}