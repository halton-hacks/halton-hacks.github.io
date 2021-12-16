import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './../css/Schedule.css';

export default class Schedule extends Component {
    render() {
        return (
            <div id="schedule">
                <h1>Schedule</h1>
                <div className="calendar-buttons">
                    <Button href="https://calendar.google.com/calendar/u/0?cid=Y18waTNtZ2diOG9xN3QzYnN0YTM4bW4ybTc5b0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t" target="_blank" rel="noreferrer">Add to Google Calendar</Button>
                    <Button href="https://calendar.google.com/calendar/ical/c_0i3mggb8oq7t3bsta38mn2m79o%40group.calendar.google.com/public/basic.ics" target="_blank" rel="noreferrer">Add to Apple Calendar</Button>
                </div>
                <div style={{'display': 'flex', 'flexWrap': 'wrap'}}>
                    <iframe src="https://calendar.google.com/calendar/embed?src=c_0i3mggb8oq7t3bsta38mn2m79o%40group.calendar.google.com&bgcolor=%23F09300&ctz=America%2FToronto&mode=WEEK&dates=20220408/20220410" frameborder="0" scrolling="no" title="Halton Hacks Schedule"></iframe>
                    <iframe src="https://calendar.google.com/calendar/embed?src=c_0i3mggb8oq7t3bsta38mn2m79o%40group.calendar.google.com&bgcolor=%23F09300&ctz=America%2FToronto&mode=AGENDA&dates=20220408/20220410" frameborder="0" scrolling="no" title="Halton Hacks Schedule" style={{'width': '30vw'}}></iframe>
                </div>
            </div>
        )
    }
}
