import {Component} from 'react'

import './index.css'

class HistoryList extends Component {
  deleteHistory = () => {
    const {initialHistoryList, deleteData} = this.props
    const {id} = initialHistoryList

    deleteData(id)
  }

  render() {
    const {initialHistoryList} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = initialHistoryList
    return (
      <li className="item">
        <p className="time">{timeAccessed}</p>
        <div className="info">
          <img src={logoUrl} alt="domain logo" className="history-item-logo" />
          <div className="history-data">
            <p className="heading"> {title} </p>
            <p className="domainUrl"> {domainUrl} </p>
          </div>
          <button
            className="dlt-icon-btn"
            type="button"
            onClick={this.deleteHistory}
            id="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="dlt-icon"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default HistoryList
