import React, { Component } from 'react';
import './css/NavBar.css';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    constructor(props){
        super(props);      
        this.sidemenu = React.createRef();
        this.overlay = React.createRef();
    }
    state = {
        sidemenutriggered:false
    }
    componentDidMount(){
        
    }
    sidemenutrigger = () =>{
        let [sidemenu, overlay] = [this.sidemenu.current.style, this.overlay.current.style]
        console.log(sidemenu,overlay);
        if(!this.state.sidemenutriggered){
            sidemenu.left = '0px';
            overlay.opacity = '0.8';
            overlay.display = 'block';
            this.setState({sidemenutriggered:true});
        }
        else{
            sidemenu.left = '-250px';
            overlay.opacity = '0';
            overlay.display = 'none';
            this.setState({sidemenutriggered:false});
        }
    }
    render() {
        return (
            <>  
                <div className="Overlay onsmall" ref={this.overlay} onClick={this.sidemenutrigger}></div>
                <div className="SideMenu onsmall" ref={this.sidemenu}>
                    <ul className="NavBarMenu column">
                        <Link to="/">
                        <li onClick={this.sidemenutrigger}>Home</li>                       
                        </Link>
                        <Link to="/bots">
                        <li onClick={this.sidemenutrigger}>Bots</li>
                        </Link>
                        <Link to="/about">
                        <li onClick={this.sidemenutrigger}>About</li>
                        </Link>
                        <Link to="/text-generator">
                        <li onClick={this.sidemenutrigger}>TextGenerator</li>
                        </Link>
                    </ul>
                </div>
                <div className="NavBar">
                    <ul className="NavBarMenu">
                        <Link to="/">
                        <li className="onbig">Home</li>
                        </Link>
                        <Link to="/bots">
                        <li className="onbig">Bots</li>
                        </Link>
                        <Link to="/about">
                        <li className="onbig">About</li>
                        </Link>
                        <Link to="/text-generator">
                        <li className="onbig">TextGenerator</li>
                        </Link>
                        <li className="onsmall" onClick={this.sidemenutrigger}>Menu</li>
                    </ul>
                </div>
            </>
        )
    }
}
