// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isFirstHidden: false,
    isSecondHidden: false,
  }

  onChangeDisplayTypeFirst = () => {
    this.setState(prevState => ({isFirstHidden: !prevState.isFirstHidden}))
  }

  onChangeDisplayTypeLast = () => {
    this.setState(prevState => ({isSecondHidden: !prevState.isSecondHidden}))
  }

  render() {
    const {isFirstHidden, isSecondHidden} = this.state
    let ShowHideFirstName
    let ShowHideLastName

    if (isFirstHidden) {
      ShowHideFirstName = (
        <div>
          <p className="firstname">Joe</p>
        </div>
      )
    } else {
      ShowHideFirstName = ''
    }

    if (isSecondHidden) {
      ShowHideLastName = (
        <div>
          <p className="lastname">Jonas</p>
        </div>
      )
    } else {
      ShowHideLastName = ''
    }

    return (
      <div className="display-hide-bg">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="names-container">
          <div className="firstname-con">
            <button
              className="show-hide-btn"
              type="button"
              onClick={this.onChangeDisplayTypeFirst}
            >
              Show/Hide Firstname
            </button>
            {ShowHideFirstName}
          </div>
          <div className="lastname-con">
            <button
              className="show-hide-btn"
              type="button"
              onClick={this.onChangeDisplayTypeLast}
            >
              Show/Hide Lastname
            </button>
            {ShowHideLastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
