import React, { Component } from 'react'

export default class TextGenerator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "Count",
            count: 0
        }
    }

    counter() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentDidMount() {
        this.counter();
    }

    render() {
        return (
            <div className="view">
                <h1>{this.state.text}: {this.state.count}</h1>
            </div>
        )
    }
}
