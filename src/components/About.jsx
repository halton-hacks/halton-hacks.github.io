import React, { Component } from 'react';
import GWSSLogo from './../images/gwss_logo.png';
import './../css/About.css';

class Sponsors extends Component {
    render() {
        return (
            <>
                <h3>Sponsors</h3>
                <div className="sponsors">
                    <Sponsor url="https://gws.hdsb.ca" sponsor="Garth Webb Secondary School" img={GWSSLogo} />
                </div>
            </>
        )
    }
}

class Sponsor extends Component {
    render() {
        return (
            <a href={this.props.url} className="sponsor" target="_blank" rel="noreferrer">
                <div>
                    <p>{this.props.sponsor}</p>
                    <div style={{
                        backgroundImage: `url(${this.props.img})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        height: '100px'
                    }} />
                </div>
            </a>
        )
    }
}

export default class About extends Component {
    render() {
        return (
            <div id="about">
                <h1>About</h1>
                <p>
                    Halton Hacks is the first district wide hackathon, open to all students in Halton interested in joining!
                </p>
                <Sponsors />
                

                <hr />
            </div>
        )
    }
}