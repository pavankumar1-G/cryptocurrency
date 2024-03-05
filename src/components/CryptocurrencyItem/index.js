// Write your JS code here

import './index.css'

const CryptoCurrencyItem = props => {
  const {cryptoCurrenceDetails} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} =
    cryptoCurrenceDetails

  return (
    <li className="list-item">
      <div className="logo-name-container">
        <img src={currencyLogoUrl} alt={currencyName} className="logo" />
        <p className="class-name">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="usd-num">{usdValue}</p>
        <p className="euro-num">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptoCurrencyItem
