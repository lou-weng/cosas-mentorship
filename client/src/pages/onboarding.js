import * as React from 'react'

const OnboardingPage = () => {
    return (
        <>
            <h2>Note to Mentors</h2>
            <p>If you have not yet already, please make sure you have went over the content on the orientation slides and recording</p>

            <p>When you are finished with the material and understand the important points, please fill out this form:</p>

            <a href="https://forms.gle/BEVcEFngCbvFvHap6" className="mentor-form">Mentor Orientation Check-in Form</a>

            <h2>Quick Links</h2>
            <ul>
                <li>
                    <a href="https://drive.google.com/file/d/1ANSkZ-2R4Fjhag5Hn4ach8JLC53mBt_s/view?usp=sharing">Orientation Slides</a>
                </li>
                <li>Orientation Recording</li>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GSZpX3EWozE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </ul>
        </>
    )
}

export default OnboardingPage