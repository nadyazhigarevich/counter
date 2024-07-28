import React, { Component } from 'react'

export default class Greeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'hgftdfguhiuoi'
        }
    }

    setName = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        this.setState({
            name: data.get("userName")
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.setName}>
                    <input name="userName" />
                    <button type="submit">Submit</button>
                    <h1>Hello, {this.state.name}</h1>
                </form>

            </div>
        )
    }
}
