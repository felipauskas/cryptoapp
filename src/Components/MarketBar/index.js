import React, { Component } from 'react'
import axios from 'axios'
import { CoinSlider, MarketDisplay, MarketDiv } from './styles'
import millify from "millify";

export default class MarketBar extends Component {
    state = {
        isLoading: false,
        hasError: false,
        hasData: false,
        marketDetails: "",
        currency: "usd"
    }

    getCrypto = async () => {
        this.setState({isLoading: true, hasError: false, hasData: false})
        try {
            const { data } = await axios(`https://api.coingecko.com/api/v3/global`);
            this.setState({isLoading: false, marketDetails: data, hasData: true})
        } catch (error) {
            console.log(error);
            this.setState({isLoading: false, hasError: true})
        }
    }

    componentDidMount() {
        this.getCrypto();
    }

    componentDidUpdate() {
    }

    render() {
        const { isLoading, hasError, hasData, marketDetails, currency } = this.state;
        const { data } = marketDetails;
        return (
            <>
            <MarketDiv>
                {hasData &&
                <MarketDisplay>
                    <span>Coins {data.active_cryptocurrencies}</span>
                    <span>Exchanges {data.markets}</span>
                    <li>${millify(data.total_market_cap.usd)}</li>
                    <li>${millify(data.total_volume.usd)}</li>
                    <span>BTC {data.market_cap_percentage.btc.toFixed(0)}%</span>
                    <CoinSlider type="range" min="0" max="100" value={data.market_cap_percentage.btc}/>
                    <span>ETH {data.market_cap_percentage.eth.toFixed(0)}%</span>
                    <CoinSlider type="range" min="0" max="100" value={data.market_cap_percentage.eth}/>
                </MarketDisplay>}
            </MarketDiv>
            </>
        )
    }
}
