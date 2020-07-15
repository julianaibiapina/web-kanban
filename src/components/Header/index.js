import React from 'react';
import './style.css'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import profile from '../../assets/profile.png'

export default function Header(){

    function handleClick(e){
        e.preventDefault();
        console.log("abrir menu");
    }

    return(
        <>
        


        <div className="header">
            <div className='header-content'>

                <div className='menu-logo'>
                    
                    <a href='#' id='open_menu' onClick={handleClick}>
                        <img src={menu} alt='menu'/>
                    </a>

                    <a href='#' className='logo'>
                        <img src={logo} alt='logotipo'/>
                        <h1>Kanban</h1>
                    </a>
                </div>
                

                <div className='profile'>
                    <h2>Juliana Ibiapina</h2>
                    <a href='#'>
                        <img src={profile} alt='imagem de perfil'/>
                    </a>
                    
                </div>
            </div>
        </div>

        </>
    )
}