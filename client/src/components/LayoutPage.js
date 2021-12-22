import * as React from 'react'
import { Helmet } from 'react-helmet';
import "../layout.css"

const LayoutPage = ({ children }) => {
    return (
        <>
            <Helmet>
                <title>COSAS Mentorship</title>
                <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
            </Helmet>
            { children }
        </>
    )
}

export default LayoutPage;