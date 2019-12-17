import React from 'react'
import '../styles/tailwind.css';

const Header = () => {
    return (
        <header className="w-full">
            <div className="flex flex-row justify-between items-center px-20 py-10 relative z-10">
                <h1 className="text-white">Gatsby test area</h1>
                <nav className="w-1/3">
                </nav>
            </div>
        </header>
    )
}

export default Header