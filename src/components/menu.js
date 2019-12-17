import React from 'react'
import { Link } from 'gatsby'
import '../styles/tailwind.css';
import { elastic as Menu } from 'react-burger-menu'

class StyledMenu extends React.Component {
    showSettings (event) {
      event.preventDefault();
    }
  
    render () {
      // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            <Menu right className="list-reset flex justify-between">
                <Link id="home" className="menu-item" to="/">Home</Link>
                <Link id="about" className="menu-item" to="/blog">Blog</Link>
                <Link id="about" className="menu-item" to="/about">About</Link>
                <Link id="contact" className="menu-item" to="/contact">Contact</Link>
            </Menu>
        );
    }
}

export default StyledMenu