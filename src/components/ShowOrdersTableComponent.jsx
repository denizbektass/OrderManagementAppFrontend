import axios from "axios";
import React from "react";

export default function ShowOrdersTableComponent() {
  const [orders, setOrders] = React.useState({
    orders: [],
  });

  React.useEffect(() => {
    axios.get("http://localhost:8080/order/getAllOrders").then((response) => {
      console.log("res", response.data);

      setOrders({
        orders: response.data.orders,
      });
    });
  }, []);

  console.log("hey", orders.orders[0]);

  return (
    <>
      <table className="table" style={{ maxHeight: "300px" }}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Order Number</th>
            <th scope="col">Product Number</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.orders.map((order) => (
            <>
              <tr>
                <th scope="row" key={order.id}>
                  {order.id}
                </th>
                <td>{order.orderNumber}</td>
                <td>{order.productNumber}</td>
                <td>{order.quantity}</td>
                <td>{order.unitPrice}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}
