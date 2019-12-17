import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello Gatsby</h1>

            <p>Need help? <Link to="/contact">This is a link.</Link></p>
        </Layout>
    )
}

export default IndexPage