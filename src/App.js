// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super()
        this.state={
            peopleInSpace:[]
        }
    }
    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(person => <li>{person.name}</li>)}
            </div>
        )
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(data => {
                console.log(data.people)
                this.setState({
                    peopleInSpace: data.people
                })
            })
    }
}
