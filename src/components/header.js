import React from 'react'
import { Link } from 'gatsby'
import '../styles/tailwind.css';

const Header = () => {
    return (
        <header className="flex bg-grey-darkest flex-row justify-between items-center px-10">
            <h1 className="text-black"><Link to="/">Gatsby test area</Link></h1>
            <nav className="w-1/3">
                <ul  className="list-reset flex justify-between">
                    <li>
                        <Link to="/blog" className="">Blog</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header