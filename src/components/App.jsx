import React, { Component } from 'react';
import Intro from './Intro';
import TitleBar from './TitleBar';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/style.css';
import FAQ from './FAQ';
import Prizes from './Prizes';
import Judging from './Judging';
import Schedule from './Schedule';

export default class App extends Component {
    render() {
        return (
            <>
                <TitleBar />
                <div className="container">
                    <Intro />
                    <About />
                    <FAQ />
                    <Prizes />
                    <Judging />
                    <Schedule />
                </div>
            </>
        )
    }
}
