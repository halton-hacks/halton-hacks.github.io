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
                        We are currently in the early stages of planning of the hackathon.
                        <br />
                        Check back later for more information!
                    </p>
                    <h5>
                        March 13-15, 2022 • Online
                    </h5>
                </div>
            </div>
        )
    }
}