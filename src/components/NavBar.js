import React, { Component } from 'react';
import './css/NavBar.css';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div class="NavBar">
                <ul class="NavBarMenu">
                    <Link to="/">
                    <li>Home</li>
                    </Link>
                    <Link to="/bots">
                    <li>Bots</li>
                    </Link>
                    <Link to="/about">
                    <li>About</li>
                    </Link>
                </ul>
            </div>
        )
    }
}
