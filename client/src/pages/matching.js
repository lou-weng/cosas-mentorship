import * as React from 'react'

const MatchingPage = () => {
    return (
        <>
            <h2>Mentor-Mentee Matchings</h2>
            <p>Please use this tool to get the contact information of your mentees. You will need two things:</p>

            <ol>
                <li>Your email</li>
                <li>Access number received through your email</li>
            </ol>

            <form className="matching-form">
                <label for="email">Email</label>
                <input className="input-form" id="email"></input>

                <label for="access">Access Number</label>
                <input className="input-form" id="access"></input>

                <button className="button-form">Submit</button>
            </form>

        </>
    )
}

export default MatchingPage