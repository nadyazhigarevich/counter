import React, { Component } from 'react'

export default class calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sum: ''
        }
    }
    setSum = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        this.setState({
            sum: Number(data.get("number1")) + Number(data.get("number2"))
        })
    }
    render() {


        return (
            <div>
                <form onSubmit={this.setSum}>
                    <input type="number" name="number1" />
                    <input type="number" name="number2" />
                    <button type="submit">+</button>
                    <h1>{this.state.sum}</h1>
                </form>

            </div>
        )
    }
}
