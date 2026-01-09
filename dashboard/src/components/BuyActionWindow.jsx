import { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import toast from "react-hot-toast";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const { closeBuyWindow, closeSellWindow, notifyDataChange  } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const handleBuyClick = async () => {
    if (!stockQuantity || stockQuantity <= 0) {
      toast.error("Quantity must be greater than 0");
      return;
    }

    if (!stockPrice || stockPrice <= 0) {
      toast.error("Price must be greater than 0");
      return;
    }

    try {
      await axios.post("http://localhost:8000/orders", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: mode,
      });

      toast.success(
        mode === "BUY"
          ? "Buy order placed successfully"
          : "Sell order placed successfully"
      );
      notifyDataChange();
      mode === "BUY" ? closeBuyWindow() : closeSellWindow();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Order failed. Please try again.");
      }
      console.error(error);
    }
  };

  const handleCancelClick = () => {
    mode === "BUY" ? closeBuyWindow() : closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            {mode === "BUY" ? "Buy" : "Sell"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;


// see the  data is overwriten in holdings page and positions page too/
// till now orders page fixed but not responsive !
