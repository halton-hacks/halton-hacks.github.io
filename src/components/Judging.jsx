import React, { Component } from 'react';
import './../css/Judging.css';

export default class Judging extends Component {
    render() {
        return (
            <div id="judging">
                <h1>Judging</h1>
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vT9XM66-X3kOEXaenfXBer9bR0AL_S-mXv0qOcHoKAgLj3qKXB-E4jIY4QaXEUb-g/pub?embedded=true" title="Judging Criteria" id="judging-criteria"></iframe>
            </div>
        )
    }
}
