// Write your code here.
import './index.css'

import {Component} from 'react'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    this.state = {isOpen: false}
  }

  onTogglePlusOrMinus = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    const {eachItem} = this.props
    const {questionText, answerText} = eachItem
    const {isOpen} = this.state
    const containerClass = isOpen
      ? 'faq-item-bg-container-open'
      : 'faq-item-bg-container-close'
    return (
      <li>
        <div className={containerClass}>
          <div className="question-and-plus-container">
            <h1 className="question-text">{questionText}</h1>
            <img
              src={
                isOpen
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
              }
              alt={isOpen ? 'minus' : 'plus'}
              className="plus-icon"
              onClick={this.onTogglePlusOrMinus}
            />
          </div>
          <div className="bottom-container">
            {isOpen && (
              <div>
                <hr className="horizontal-rule" />
                <p className="answer-text">{answerText}</p>
              </div>
            )}
          </div>
        </div>
      </li>
    )
  }
}
export default FaqItem
