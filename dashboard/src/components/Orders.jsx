import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

function Orders() {
  const { dataChanged } = useContext(GeneralContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, [dataChanged]);

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">Get started</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <div className="order-table">
        <table>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Mode</th>
            <th>Qty.</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.name}</td>
              <td className={order.mode === "BUY" ? "profit" : "loss"}>
                {order.mode}
              </td>
              <td>{order.qty}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>  
  );
}

export default Orders;
