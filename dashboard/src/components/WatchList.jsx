import { Grow, Tooltip } from '@mui/material';
import { useState } from 'react';
import { watchlist } from '../data/data.jsx';
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";

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


const WatchListActions = ({ uid }) =>{
    return (
        <span className='actions'>
            <Tooltip 
                title="Buy (B)"
                placement='top'
                arrow
                slot={{ transition : Grow }}
            >
                <button className='buy'>Buy</button>
            </Tooltip>
            <Tooltip
                title="Sell (S)"
                slot={{ transition : Grow }}
                placement='top'
            >
                <button className='sell'>Sell</button>
            </Tooltip>
            <Tooltip
                title="Analytics (A)"
                slots={{ transition : Grow }}
                placement='top'
            >
                <button className='action'>
                    {/* BarChartOutlined -- present in the material-ui */}
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
}