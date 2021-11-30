import React, { Component } from 'react';
import './../css/FAQ.css';

const faq = {
    'What is a hackathon?': 'A hackathon is a competition, where groups of people come together to create a project, learn, and have fun.',
    'Who can participate?': 'Halton Hacks is open to any student in the Halton, such as middle schoolers, and high schoolers.',
    'Got another question?': 'Halton Hacks is in the early stages of planning. Check back later for more information!'
}

class Question extends Component {
    state = {
        show: true
    }

    // handleClick = () => {
    //     this.setState({show: !this.state.show})
    // }

    render() {
        return (
            <div className="question">
                <h4>{this.props.question}</h4>
                <p>{this.props.answer}</p>
            </div>
        )
    }
}

export default class FAQ extends Component {
    render() {
        return (
            <div id="faq">
                <h1>FAQ</h1>
                <div className="d-flex flex-wrap">
                    {Object.keys(faq).map((question, key) =>
                        <Question
                            question={question}
                            answer={faq[question]}
                            key={key}
                        />
                    )}
                </div>
                <hr />
            </div>
        )
    }
}
