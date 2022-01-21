import React from 'react';
import { Name, Rank, Hour, Price, Day, Week, VolumeMarket, CirculatingSupply, Last7d, TableName } from './styles';


export default function CoinTableTitle(props) {
    return(
        <TableName>
            <Rank>#</Rank>
            <Name>Name</Name>
            <Price>Price</Price>
            <Hour>1H%</Hour>
            <Day>1D%</Day>
            <Week>7D%</Week>
            <VolumeMarket>24h Volume/Market Cap</VolumeMarket>
            <CirculatingSupply>Circulating/Total Supply</CirculatingSupply>
            <Last7d>Last 7D</Last7d>
        </TableName>
    )
}