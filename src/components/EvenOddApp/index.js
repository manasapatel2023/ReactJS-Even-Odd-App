// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  showNumber = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevValue => ({count: prevValue.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const evenOddText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="description">count is {evenOddText}</p>
          <button type="button" className="button" onClick={this.showNumber}>
            Increment
          </button>

          <p className="paragraph">
            Increase by Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
