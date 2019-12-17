import React from 'react'
import Header from './header'
import Footer from './footer'
import StyledMenu from './menu'

const Layout = (props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <StyledMenu />
            <Header />
                <div className="container px-20 mt-10 flex-grow">
                    { props.children }
                </div>
            <Footer />
        </div>
    )
}

export default Layout