import * as React from 'react'
import { useState } from 'react'
import { getMentees } from '../hooks'

const MatchingPage = () => {
    const [email, setEmail] = useState("")
    const [mentees, setMentees] = useState([])

    function handleClick() {
        async function retrieveMentees() {
            const response = await getMentees(email)
            if (response !== undefined && response.length != 0) {
                setMentees(response)
            } else {
                alert("Invalid credentials")
                setEmail("")
            }
        }
        retrieveMentees()
    }

    return (
        <>
            <h2>Mentor-Mentee Matchings</h2>
            <p>Please use this tool to get the contact information of your mentees.</p>

            <div className="matching-form">
                <span><b>Enter Your Email</b></span>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="input-form" id="email"></input>

                <button onClick={() => handleClick()} className="button-form" disabled={!email} >Submit</button>
            </div>
            { mentees.length > 0 && <div className="table-container">
                <table className="mentee-table">
                    <tr className="table-header">
                        <th>Email</th>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Specialization</th>
                        <th>Interest 1</th>
                        <th>Interest 2</th>
                        <th>Interest 3</th>
                    </tr>
                    {mentees.map((mentee, index) => {
                        return (
                            <tr key={index}>
                                <th>{mentee.e_mail}</th>
                                <th>{mentee.preferred_name}</th>
                                <th>{mentee.year}</th>
                                <th>{mentee.specialization}</th>
                                <th>{mentee.ranking_1}</th>
                                <th>{mentee.ranking_2}</th>
                                <th>{mentee.ranking_3}</th>
                            </tr>
                        )
                    })}
                </table>
            </div> }
        </>
    )
}

export default MatchingPage