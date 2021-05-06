import React, {Component} from 'react'

class NavBar extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
                <nav className="navBar">
                    <ul>
                        <li><a href='url'>About</a></li>
                        <li><a href="url">Projects</a></li>
                        <li><a href="url">Contact</a></li>
                    </ul>
                    
                </nav>
        )
    }
}

export default NavBar