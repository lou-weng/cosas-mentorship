import * as React from 'react'
import { useState, useEffect } from 'react'
import { getMentors } from '../hooks'

const MentorPage = () => {
    const [mentors, setMentors] = useState("")

    useEffect(() => {
        async function retrieveMentors() {
            const response = await getMentors()
            if (response !== undefined && response.length !== 0) {
                setMentors(response)
            } else {
                alert("Invalid credentials")
            }
        }
        retrieveMentors()
    }, [])

    return (
        <>
            <h2>Mentor Reference List</h2>
            <p>
                The following is a brief summary of all mentors in the program this year. 
            </p>

            <h3>Data Update/Privacy Request</h3>
            <p>
                If there is an inaccuracy on the site, or would like your name removed from the listing, please email cosasinitiatives@gmail.com
            </p>

            { mentors.length > 0 && <div className="table-container">
                <table className="mentor-table">
                    <tr className="table-header">
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>Interest Area</th>
                    </tr>
                    {mentors.map((mentor, index) => {
                        return (
                            <tr key={index}>
                                <th><a href={mentor.linkedin}>{mentor.name}</a></th>
                                <th>{mentor.specialization}</th>
                                <th>{mentor.topic}</th>
                            </tr>
                        )
                    })}
                </table>
            </div> }
        </>
    )
}

export default MentorPage;