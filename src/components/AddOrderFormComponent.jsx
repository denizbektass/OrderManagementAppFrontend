import axios from "axios";
import React from "react";

export default function AddOrderFormComponent() {
  const [orderNumber, setOrderNumber] = React.useState(null);
  const [productNumber, setProductNumber] = React.useState(null);
  const [quantity, setQuantity] = React.useState(null);
  const [unitPrice, setUnitPrice] = React.useState(null);

  const handleSendingFormDatas = () => {
    axios
      .post("http://localhost:8080/order/addOrder", {
        orderNumber: orderNumber,
        productNumber: productNumber,
        quantity: quantity,
        unitPrice: unitPrice,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <input
        onChange={(e) => setOrderNumber(e.target.value)}
        type="number"
        name="number"
        placeholder="Order Number"
        aria-label="Number"
        max={100000}
      />
      <input
        onChange={(e) => setProductNumber(e.target.value)}
        type="number"
        name="number"
        placeholder="Product Number"
        aria-label="Number"
        max={100000}
      />
      <input
        onChange={(e) => setQuantity(e.target.value)}
        type="number"
        name="number"
        placeholder="Quantity"
        aria-label="Number"
        max={100000}
      />
      <input
        onChange={(e) => setUnitPrice(e.target.value)}
        type="number"
        name="number"
        placeholder="Unit Price"
        aria-label="Number"
        max={100000}
      />
      <button
        style={{ marginTop: "20px", width: "100%" }}
        onClick={handleSendingFormDatas}
      >
        Send Order
      </button>
    </>
  );
}
