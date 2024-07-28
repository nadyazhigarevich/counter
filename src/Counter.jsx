import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      max: 10,
      min: -5,
      error: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    if (this.state.count === this.state.max) {
      this.setState({
        error: "Значение должно быть меньше " + this.state.max
      })
    } else {
      this.setState({
        count: this.state.count + 1,
        error: null
      })
    }
  }

  decrement() {
    if (this.state.count === this.state.min) {
      this.setState({
        error: "Значение должно быть больше " + this.state.min
      })
    } else {
      this.setState({
        count: this.state.count - 1,
        error: null
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    this.setState({
      max: Number(data.get("maxValue")),
      min: Number(data.get("minValue")),
      count: Number(data.get("minValue")),
      error: null
    })
  }

  render() {
    return (
      <div className='container'>
        <h1>Счетчик</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name='maxValue' placeholder='Введите максимальное значение' />
          <input type="number" name='minValue' placeholder='Введите минимальное значение' />
          <button type='submit'>Применить</button>
          <h2>{this.state.count}</h2>
        </form>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        {this.state.error && <p className='error'>{this.state.error}</p>}
      </div>
    )
  }
}