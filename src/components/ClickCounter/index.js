// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-bg-container">
        <h1 className="heading">
          The Button has been clicked
          <span className="Span-text"> {count} </span>
          times.
        </h1>
        <div className="button-container">
          <p className="para">Click the button to increase the count!</p>
          <button
            type="button"
            className="btn-primary"
            onClick={this.onIncrement}
          >
            click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
