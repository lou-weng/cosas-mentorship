import * as React from 'react'
import { Helmet } from 'react-helmet';
import "../layout.css"

const Layout = ({ children }) => {
    return (
        <>
            <Helmet
                title="COSAS Mentorship"
            />
            { children }
        </>
    )
}

export default Layout;