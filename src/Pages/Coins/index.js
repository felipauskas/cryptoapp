import React, { Component } from 'react'
import CryptoChart from '../../components/CryptoChart'
import { Container, Overview } from './styles'

export default class Coins extends Component {
    render() {
        return (
            <Container>
                <Overview>Your overview</Overview>
                <CryptoChart />
            </Container>
        )
    }
}
