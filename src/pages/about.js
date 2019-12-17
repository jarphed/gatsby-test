import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>This site is a playground for learning Gatsby and React</p>

            <Link to="/contact">Contact me</Link>
        </Layout>
    )
}

export default AboutPage