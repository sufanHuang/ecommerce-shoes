import React, { Component } from 'react';
import './index.css';
import {NavLink} from "react-router-dom";

const classNames = [
    "first-header",
    "second-header",
    "third-header"
];


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
    }

    incrementIndex = () => {
        const newIndex = this.state.index + 1;
        this.setState({ index: newIndex })
    }

    componentDidMount = () => {
        setInterval(this.incrementIndex, 3000);
    }

    render() {
        const index = this.state.index % classNames.length;
        const className = classNames[index];
        return(
            <div>
                <div className={className}>
                    <div className="home">
                        <h1 id="home-title">Welcome To My Shop</h1>
                        <div className="links-home">
                            <p><NavLink activeClassName="selected" className="nav-link-header" to="/products">ALL</NavLink></p>
                            <p><NavLink activeClassName="selected" className="nav-link-header" to="/women">Women</NavLink></p>
                            <p><NavLink activeClassName="selected" className="nav-link-header" to="/men">Men</NavLink></p>
                            <p><NavLink activeClassName="selected" className="nav-link-header" to="/shoes">Shoes</NavLink></p>
                            <p><NavLink activeClassName="selected" className="nav-link-header" to="/accessories">Accessories</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
