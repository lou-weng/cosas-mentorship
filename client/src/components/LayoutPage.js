import * as React from 'react'
import { Helmet } from 'react-helmet';
import "../layout.css"

const LayoutPage = ({ children }) => {
    return (
        <>
            <Helmet
                title="COSAS Mentorship"
            />
            { children }
        </>
    )
}

export default LayoutPage;