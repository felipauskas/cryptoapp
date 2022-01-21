import React, { Component } from 'react';
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import {Chart, CategoryScale, Filler, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend} from "chart.js";
import { CurrentDate, ChartDiv, DataLabel, DataValue } from './styles';
import { convertToMoney } from '../../utils';
import { lineChartOptions, barChartOptions } from './chartUtils'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

export default class CryptoChart extends Component {
    state = {
        isLoading: false,
        hasError: false,
        hasData: false,
        totalVolumes: [],
        dateLabels: [],
        dailyPrice: [],
    }

    getData = async () => {
        this.setState({isLoading: true, hasError: false, hasData: false});
        try {
            const { data } = await axios(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily`);
            const dateLabels = data.prices.map((element) => {
                const date = new Date(element[0]).toLocaleString("en-gb", {
                    day: "numeric",
                    month: "2-digit"
                });
                return date;
            });
            const dailyPrice = data.prices.map((element) => element[1].toFixed(2));
            const totalVolumes = data.total_volumes.map((element) => element[1].toFixed(0));
            this.setState({isLoading: false, dateLabels: dateLabels, dailyPrice: dailyPrice, hasData: true, totalVolumes: totalVolumes});
        }
        catch (error) {
            console.log(error);
            this.setState({isLoading: false, hasData: false, hasError: true});
        }
    }

    componentDidMount() {
        this.getData();
    }


    render() {
        const { hasData, dailyPrice, dateLabels, totalVolumes} = this.state;
        const todayPrice = convertToMoney.format(dailyPrice.slice(-1));
        const todayVolume = convertToMoney.format(totalVolumes.slice(-1));
        const [weekday, month, day, year] = new Date().toString().split(" ");
        
        const lineChartData = {
            labels: dateLabels.slice(0, -2),
            datasets: [
                {
                    data: dailyPrice.slice(0, -2),
                    fill: true,
                    borderColor: "rgba(0, 255, 95, 0.56)",
                    backgroundColor: "rgba(0, 255, 95, 0.3)",
                    tension: 0.1
                }
            ]
        };

        const barChartData = {
            labels: dateLabels.slice(0, -2),
            datasets: [
                {
                    data: totalVolumes.slice(0, -2),
                    backgroundColor: "rgba(33, 114, 229, 1)",
                }
            ]
        };

        return (
        <>
            {hasData && (
                <>
                    <ChartDiv>
                        <DataLabel>BTC</DataLabel>
                        <DataValue>${todayPrice}</DataValue>
                        <CurrentDate>{month} {day}, {year}</CurrentDate>
                        <Line data={lineChartData} options={lineChartOptions}/>
                    </ChartDiv>
                    <ChartDiv>
                        <DataLabel>Volume 24</DataLabel>
                        <DataValue>${todayVolume}</DataValue>
                        <CurrentDate>{month} {day}, {year}</CurrentDate>
                        <Bar data={barChartData} options={barChartOptions}/>
                    </ChartDiv>
                </>
            )}
        </>
        );
    }
}
