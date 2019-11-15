
import React, { Component } from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

export default class BaseLayout extends Component {
    render(){
        return(
            <div>
                <nav className= 'navbar'>
                    <div className='nav-links'>
                        <ul>
                            <li><NavLink activeClassName ='selected' className = 'nav-link' exact to='/'>Home</NavLink></li>
                            <li><NavLink activeClassName ='selected' className = 'nav-link' exact to='/products'>All</NavLink></li>
                            <li><NavLink activeClassName ='selected' className = 'nav-link' exact to='/women'>Women</NavLink></li>
                            <li><NavLink activeClassName ='selected' className = 'nav-link' exact to='/men'>Men</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <NavLink to='/cart'><i className="fas fa-cart-plus">Cart</i></NavLink>
                    </div>
                </nav>

                <div>
                    {this.props.children}
                </div>

                <div className='footer'>
                    <p> @ 2019 Copyright Sufan Huang</p>
                </div>
            </div>
        )
    }
}
