import * as React from 'react'
import Layout from '../components/layout'
import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom'
import HomePage from './home'
import MatchingPage from './matching'
import OnboardingPage from './onboarding'
import ResourcePage from './resources'

import logo from '../images/logo.svg'

const IndexPage = () => {
    return (
        <>
            <Layout>
            <HashRouter>
                <div className='main-container'>
                    <div className='nav-drawer'>
                        <img className="logo" src={logo}></img>
                        <Link to="home" className='drawer-button'>Home</Link>
                        <Link to="onboarding" className='drawer-button'>Onboarding</Link>
                        <Link to="resources" className='drawer-button'>Resources</Link>
                        <Link to="matching" className='drawer-button'>Matching</Link>
                    </div>
                    <div className='content-container'>
                        <h1>COSAS Mentorship Hub</h1>
                        <p>Hi Mentors, we'll use this site as a staging area for all resources you will need</p>
                        <hr></hr>
                        
                        <Routes>
                            <Route path='/*' element={ <HomePage/> }/>
                            <Route path='matching' element={ <MatchingPage/> }/>   
                            <Route path='onboarding' element={ <OnboardingPage/> }/>     
                            <Route path='resources' element={ <ResourcePage/> }/>   
                        </Routes>
                    </div>
                </div>
            </HashRouter>
            </Layout>
        </>
    )
}

export default IndexPage