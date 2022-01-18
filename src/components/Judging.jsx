import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import './../css/Judging.css';

class JudgingTable extends Component {
    render() {
        return (
            <Table responsive striped bordered>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>0</th>
                        <th>1</th>
                        <th>2</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </Table>
        )
    }
}

class JudgingCategory extends Component {
    render() {
        return (
            <tr style={{ fontSize: '14px' }}>
                <td>
                    <strong>{this.props.title}</strong>
                    <br />
                    {this.props.description}
                </td>
                <td>
                    {this.props.zero}
                    <br /><br />
                    <em>{this.props.zeroExample}</em>
                </td>
                <td>
                    {this.props.one}
                    <br /><br />
                    <em>{this.props.oneExample}</em>
                </td>
                <td>
                    {this.props.two}
                    <br /><br />
                    <em>{this.props.twoExample}</em>
                </td>
            </tr>
        )
    }
}

export default class Judging extends Component {
    render() {
        return (
            <div id="judging">
                <h1>Judging</h1>
                <JudgingTable>

                    <JudgingCategory
                        title="Attention To Theme"
                        description="Is the project relevant to the theme?"

                        zero="Project does not address the theme. It contains no connection or very little connection to education."
                        zeroExample="Ex: A snake game that involves no connection to education."

                        one="Project addresses the theme. However, there is a vague connection to the theme and &quot;education&quot; doesn't appear to be the main focus of the project."
                        oneExample="Ex: A snake game that incorporates a feature which relates to education."

                        two="Project directly relates to the theme. It is obvious that participants created the project with &quot;education&quot; in mind. More specifically, education is at the centre of the project."
                        twoExample="Ex: A web app designed to help tutors, teach a subject, find schooling, etc."
                    />

                    <JudgingCategory
                        title="Originality"
                        description="Is your project unique?"

                        zero="The project is a complete clone of an existing project/application. There are zero/minimal additions added. Team makes no effort."

                        one="The project is clearly attempting to replicate a current project/idea, but the team clearly makes an effort to add new features."

                        two="Project contains multiple unique elements that are rarely seen elsewhere. The project is not an attempt at replicating an existing idea."
                    />

                    <JudgingCategory
                        title="Design"
                        description="Is your project aesthetically pleasing?"

                        zero="Project’s UI is extremely clustered and not appealing. Lots of design elements are overlapping which causes the project to lose clarity."
                        zeroExample="Ex: Pages on app are clunky and clearly rushed. The design decreases the user’s ability to view the information.  "

                        one="Project contains a satisfactory UI, but it could use work."
                        oneExample="Ex: Certain pages on the app look nice, however, others appear rushed or crowded."

                        two="Project is aesthetically pleasing. Team clearly considered their use of white space, colour schematics, etc."
                        twoExample="Ex: All pages on the app look nice and it is obvious the team spent time designing the project."
                    />

                    <JudgingCategory
                        title="Functionality"
                        description="Is your project user friendly?"

                        zero="Project is not easy to use and you can get lost extremely quickly. The poor functionality makes the project borderline unusable."

                        one="Project is somewhat easy to use, however, there are some problems or inefficiencies in navigation."
                        oneExample="Ex: Certain buttons or links on a page do not have a clear purpose and make navigation around the app confusing."

                        two="Project is easy to use and navigate. The UI is clear and concise. Overall, the project is extremely user friendly."
                    />

                </JudgingTable>
                <hr />
            </div>
        )
    }
}