import { Grow, Tooltip } from '@mui/material';
import { useState, useContext } from 'react';
import { watchlist } from '../data/data.jsx';
import GeneralContext from "./GeneralContext"; 
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import { DoughnutChart } from './DoughnutChart.jsx';

const labels = watchlist.map(item => item.name);
const data = {
    labels,
    datasets: [
        {
        label: 'Stock Performance',
        data: watchlist.map(item => parseFloat(item.percent)),
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        },
    ],
};
function WatchList() {

    return (       
        <div className="watchlist-container">
            <div className="search-container">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                    className="search"
                />
                <span className="counts"> { watchlist.length } / 50</span>
            </div>

            <ul className="list">
                {watchlist.map((stock, index)=>{
                    return(
                        <WatchListItem stock={ stock } key={ index } />

                    );
                })}
            </ul>
            <DoughnutChart data={data} />
    </div>
);
}

export default WatchList;


const WatchListItem = ({ stock }) => {
    const [showWatchListActions, setshowWatchListActions] = useState(false);

    return(
        <li 
            onMouseEnter={ () => setshowWatchListActions(true) } 
            onMouseLeave={ () => setshowWatchListActions(false) }
        >
            <div className="item">
                <p className={ stock.isDown ? "down" : "up" }> { stock.name } </p>
                <div className="item-info">
                    <span className='percent'> { stock.percent } </span>
                    {stock.isDown ? (
                        <KeyboardArrowDown className="down" />
                    ) : (
                        <KeyboardArrowUp className="up" />
                    )}
                    <span className='price'> { stock.price } </span>
                </div>
            </div>
            { showWatchListActions && <WatchListActions uid={ stock.name } />}
        </li>
    );
};


const WatchListActions = ({ uid }) => {
    const { openBuyWindow,openSellWindow } = useContext(GeneralContext); //  get function

    return (
        <span className='actions'>
            <Tooltip 
                title="Buy (B)"
                placement='top'
                arrow
                slot={{ transition : Grow }}
            >
                <button className='buy' onClick={() => openBuyWindow(uid)}>Buy</button> {/*  trigger modal */}
            </Tooltip>
            <Tooltip
                title="Sell (S)"
                slot={{ transition : Grow }}
                placement='top'
            >
                <button className='sell' onClick={ () => openSellWindow(uid) }>Sell</button>
            </Tooltip>
            <Tooltip
                title="Analytics (A)"
                slots={{ transition : Grow }}
                placement='top'
            >
                <button className='action'>
                    <BarChartOutlined className='icon' />
                </button>
            </Tooltip>
            <Tooltip
                title="More (M)"
                slot={{ transition : Grow }}
                placement='top'
            >
                <button className='action'>
                    <MoreHoriz className='icon' />
                </button>
            </Tooltip>
        </span>
    );
};
