import React from 'react'
import axios from 'axios'


let accessKey = "fc4dd9211d1605ccb982ec12d139387f";

export default class AsyncAwait extends React.Component{

  getExchangeRate = async (fromCurrency, toCurrency) => {
    const response = await axios.get(`http://apilayer.net/api/live?access_key=${accessKey}&currencies=EUR&source=USD&format=1`);

    const rate = response.data.rates;
    const euro = 1 / rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];
    console.log(exchangeRate);
    return exchangeRate;
  };

  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="From"/>
        </div>
        <div>
          <input type="text" placeholder="To"/>
        </div>
        <button onClick={this.getExchangeRate}>
          Convert
        </button>
      </div>
    )
  }
}