import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Images/Logo.png'
export default function Navigation() {
    return (
        <div className='Navigation'>
            <img src={Logo} alt='Logo' className='Logo'></img>
            <ul className='NavigationUl'>
                <li><Link className='NavLink' to='#'>Home</Link></li>
                <li><Link className='NavLink' to='#'>Our Story</Link></li>
                <li><Link className='NavLink' to='#'>Freighters</Link></li>
                <li><Link className='NavLink' to='#'>Clients</Link></li>
                <li><Link className='NavLink' to='#'>Event</Link></li>
                <li><Link className='NavLink' to='#'>News</Link></li>
            </ul>
        </div>
    )
}
