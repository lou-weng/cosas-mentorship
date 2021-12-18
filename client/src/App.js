import * as React from 'react'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import MatchingPage from './components/pages/MatchingPage'
import OnboardingPage from './components/pages/OnboardingPage'

import logo from './logo.svg'

const App = () => {
    return (
        <>
            <Layout>
                <HashRouter>
                    <div className='main-container'>
                        <div className='nav-drawer'>
                            <img className="logo" src={logo}></img>
                            <Link to="home" className='drawer-button'>Home</Link>
                            <Link to="onboarding" className='drawer-button'>Onboarding</Link>
                            <Link to="matching" className='drawer-button'>Matching</Link>
                        </div>
                        <div className='content-container'>
                            <h1>COSAS Mentorship Hub</h1>
                            <p>Hi Mentors, we'll use this site as a staging area for all resources you will need</p>
                            <hr></hr>

                            <Routes>
                                <Route path='/*' element={<HomePage />} />
                                <Route path='matching' element={<MatchingPage />} />
                                <Route path='onboarding' element={<OnboardingPage />} />
                            </Routes>
                        </div>
                    </div>
                </HashRouter>
            </Layout>
        </>
    )
}

export default App