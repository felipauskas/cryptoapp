import React from 'react';
import { convertToMoney } from '../../utils';
import { Name, CoinSlider, CoinDisplayDiv, Image, Rank, Hour, Price, Day, Week, VolumeMarket, CirculatingSupply, Last7d, ImgName, Volume, Market, Circulating, Supply, Completion } from './styles';
import millify from 'millify';
import SparklineChart from './chart';


export default function CoinTableData(props) {
    const {market_cap_rank, image, name, current_price, hourchange,
            daychange, weekchange, total_volume, market_cap,
            circulating_supply, total_supply, sparkline_in_7d} = props;
    return(
        <CoinDisplayDiv>
            <Rank>{market_cap_rank}</Rank>
            <ImgName>
                <Image src={image}></Image>
                <Name>{name}</Name>        
            </ImgName>
            <Price>{convertToMoney.format(current_price)}</Price>
            <Hour isPositive={(hourchange > 0)}>{hourchange.toFixed(2)}%</Hour>
            <Day isPositive={(daychange > 0)}>{daychange.toFixed(2)}%</Day>
            <Week isPositive={(weekchange > 0)}>{weekchange.toFixed(2)}%</Week>
            <VolumeMarket>
                <Volume>{millify(total_volume)}</Volume>
                <Market>{millify(market_cap)}</Market>
                <CoinSlider>
                    <Completion size={(total_volume/market_cap)*100}/>
                </CoinSlider>
            </VolumeMarket>
            <CirculatingSupply>
                <Circulating>{millify(circulating_supply)}</Circulating>
                <Supply>{(total_supply) ? millify(total_supply) : "∞"}</Supply>
                <CoinSlider>
                    <Completion size={(circulating_supply/total_supply)*100}/>
                </CoinSlider>
            </CirculatingSupply>
            <Last7d>
                <SparklineChart labels={sparkline_in_7d.price} data={sparkline_in_7d.price}/>
            </Last7d>
        </CoinDisplayDiv>
    )
}
