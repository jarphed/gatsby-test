import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = (props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
                <div className="container px-10 flex-grow">
                    { props.children }
                </div>
            <Footer />
        </div>
    )
}

export default Layout