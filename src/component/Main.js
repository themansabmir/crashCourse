import React from 'react'
import './Main.css'

const Main = () => {
    return (
        <div>
            <header>
                <h1>PHYSICS CRASH COURSE</h1>
                <span>by Mansab Mir</span>
                <button>Enroll Now!</button>
            </header>

            <div className="featuresBox">
                <div className="featureCard">
                    <h1>CRASH COURSE DETAILS</h1>
                    <ul>
                        <li>2000+ Numerical</li>
                        <li>20Year CBSE papers</li>
                        <li>Disha 33Year Neet</li>
                        <li>100+ Derivations</li>
                        <li>Complete revision</li>
                        <li>Conceptual Questions</li>
                        <li>Assertion & Reasoning</li>
                    
                    </ul>
                   

                </div>
                
            </div>


            <div className="contactBox">
                <h1>Contact us</h1>
                <p>Address: 2949/1 1st floor kucha neel kanth Daryaganj, Delhi, 110002
                </p>
                <p>Contact: Mansab Mir 84487280057</p>
            


            </div>


        </div>
    )
}

export default Main