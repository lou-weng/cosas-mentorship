import * as React from 'react'
import { useState, useEffect } from 'react'
import { getMentees } from '../components/hooks'

const MatchingPage = () => {
    const [email, setEmail] = useState("")
    const [accessCode, setAccessCode] = useState("")
    const [mentees, setMentees] = useState([])

    function handleClick() {
        async function retrieveMentees() {
            const response = await getMentees(email)
            if (response != undefined) {
                setMentees(response)
            } else {
                alert("Invalid credentials")
                setEmail("")
                setAccessCode("")
            }
        }
        retrieveMentees()
    }

    return (
        <>
            <h2>Mentor-Mentee Matchings</h2>
            <p>Please use this tool to get the contact information of your mentees. You will need two things:</p>

            <ol>
                <li>Your email</li>
                <li>Access number received through your email</li>
            </ol>

            <div className="matching-form">
                <p>Email</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="input-form" id="email"></input>

                <p>Access Number</p>
                <input value={accessCode} onChange={(e) => setAccessCode(e.target.value)} className="input-form" id="access"></input>

                <button onClick={() => handleClick()} className="button-form" disabled={!(email && accessCode)} >Submit</button>
            </div>

            {mentees.map((mentee, index) => {
                return (<p key={index}>{ mentee.email }</p>)
            })}

        </>
    )
}

export default MatchingPage