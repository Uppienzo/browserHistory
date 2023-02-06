import {Component} from 'react'

import HistoryList from '../HistoryList'

import './index.css'

import HistoryHeader from '../HistoryHeader'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryHome extends Component {
  state = {
    data: '',
    history: initialHistoryList,
  }

  updateHistory = value => {
    this.setState({data: value})
  }

  deleteData = id => {
    const {history} = this.state
    const updatedList = history.filter(each => each.id !== id)
    this.setState({history: updatedList})
    console.log(id)
  }

  render() {
    const {data, history} = this.state
    const filteredList = history.filter(each => {
      const title = each.title.toLowerCase()
      return title.includes(data.toLowerCase())
    })

    if (filteredList.length === 0) {
      return (
        <div className="home">
          <HistoryHeader updateHistory={this.updateHistory} />
          <p className="no-history">There is no history to show</p>
        </div>
      )
    }
    return (
      <div className="home">
        <HistoryHeader updateHistory={this.updateHistory} />
        <ul className="history-items">
          {filteredList.map(each => (
            <HistoryList
              key={each.id}
              initialHistoryList={each}
              updateList={this.updateHistory}
              deleteData={this.deleteData}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default HistoryHome
