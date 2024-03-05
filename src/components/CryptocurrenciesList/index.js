// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrencyheader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-euro-container">
        <p className="usd">USD</p>
        <p className="euro">EURO</p>
      </div>
    </div>
  )

  renderCryptocurrencyheaderAndList = () => {
    const {cryptocurrencyTrackerDetails} = this.props
    return (
      <div className="cryptocurrency-list-container" data-testid="loader">
        {this.renderCryptocurrencyheader()}
        <ul className="cryptocurrency-list">
          {cryptocurrencyTrackerDetails.map(eachCrypto => (
            <CryptocurrencyItem
              key={eachCrypto.id}
              cryptoCurrenceDetails={eachCrypto}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrency-content-container" data-testid ='loader'>
        <h1 className="cryptocurrency-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image-crypto"
        />

        {this.renderCryptocurrencyheaderAndList()}
      </div>
    )
  }
}
export default CryptocurrenciesList
