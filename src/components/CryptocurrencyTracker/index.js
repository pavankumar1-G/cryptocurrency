// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptocurrencyTrackerData: []}

  componentDidMount() {
    this.getCryptocurrencyData()
  }

  getCryptocurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const cryptcurrencyData = await response.json()
    const updatedData = cryptcurrencyData.map(eachObj => ({
      currencyName: eachObj.currency_name,
      usdValue: eachObj.usd_value,
      euroValue: eachObj.euro_value,
      id: eachObj.id,
      currencyLogoUrl: eachObj.currency_logo,
    }))

    this.setState({cryptocurrencyTrackerData: updatedData, isLoading: false})
  }

  renderCryptoCurrencyDetails = () => {
    const {cryptocurrencyTrackerData} = this.state

    return (
      <CryptocurrenciesList
        cryptocurrencyTrackerDetails={cryptocurrencyTrackerData}
      />
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="cryptocurrency-tracker-container" >
        {isLoading ? (
          <div data-testid="Loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptoCurrencyDetails()
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
