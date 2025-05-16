// Write your code here.
import './index.css'

import {Component} from 'react'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-heading">FAQs</h1>
          <ul className="unordered-list">
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} eachItem={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
