import React, { Component } from 'react';
import HaltonHacksLogo from './../images/haltonhacks_logo.png';
import './../css/Intro.css';

export default class Intro extends Component {
    render() {
        return (
            <div className="text-center" id="landing">
                <div>
                    <img src={HaltonHacksLogo} alt="Halton Hacks" className="d-inline-block align-text-middle rounded-circle" />
                </div>
                <div>
                    <h1>Halton Hacks</h1>
                    <p>
                        The first region-wide hackathon for students in Halton!
                        <br /><br />
                        Registration on DevPost is coming in March, check back soon for more information!
                    </p>
                    <h5>
                        April 8-10, 2022 • Online
                    </h5>
                </div>
            </div>
        )
    }
}