import {Component} from 'react'
import './index.css'

class HistoryHeader extends Component {
  updateHistory = event => {
    const {updateHistory} = this.props
    const inputValue = event.target.value
    updateHistory(inputValue)
  }

  render() {
    return (
      <div className="history-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
          className="logo_img"
        />
        <div className="search-section">
          <div className="inputs-container">
            {' '}
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="icon-img"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              onChange={this.updateHistory}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default HistoryHeader
