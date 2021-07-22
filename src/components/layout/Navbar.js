import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>

            <ul className='navbar-list-left'>
                <li><NavLink exact className='btn-list' activeClassName='active-btn-list' to='/'>Home</NavLink></li>
                <li><NavLink exact className='btn-list' activeClassName='active-btn-list' to='/news' >News</NavLink></li>
                <li><NavLink exact className='btn-list' activeClassName='active-btn-list' to='/about' >About</NavLink></li>
            </ul>
            
            <ul className='navbar-list-right'>
                <li><NavLink exact className='btn-list' activeClassName='active-btn-list' to='/login'>Login</NavLink></li>
                <li><NavLink exact className='btn-list' activeClassName='active-btn-list' to='/register' >Register</NavLink></li>
            </ul>

        </nav>
    )
}

export default Navbar