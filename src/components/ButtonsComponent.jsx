import React from "react";
import AddOrderFormComponent from "./AddOrderFormComponent";
import ShowOrdersTableComponent from "./ShowOrdersTableComponent";
import OrderProcessComponent from "./OrderProcessComponent";

export default function ButtonsComponent() {
  const [showAddOrderFormComponent, setShowAddOrderFormComponent] =
    React.useState(false);
  const [showOrdersTableComponent, setShowOrdersTableComponent] =
    React.useState(false);
  const [showOrderProcessComponent, setShowOrderProcessComponent] = React.useState(false);
  
  const handleShowingAddOrderFormComponent = () => {
    setShowAddOrderFormComponent(!showAddOrderFormComponent);
  };

  const handleShowingTable = () => {
    setShowOrdersTableComponent(!showOrdersTableComponent);
  };

  const handleOrderProcessButtonClick = () => {
    setShowOrderProcessComponent(!showOrderProcessComponent);
  }
  return (
    <>
      <main
        className="container-fluid"
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          borderBottom: "1px solid gray",
          paddingBottom: "20px",
        }}
      >
        <button
          className="outline"
          onClick={handleShowingAddOrderFormComponent}
        >
          Add Order
        </button>
        <button className="outline" onClick={handleShowingTable}>
          Show Orders
        </button>
        <button className="outline" onClick={handleOrderProcessButtonClick}>Order Processes</button>
      </main>

      {showAddOrderFormComponent && (
        <main
          className="container-fluid"
          style={{ width: "50%", marginTop: "100px" }}
        >
          <AddOrderFormComponent />
        </main>
      )}

      {showOrdersTableComponent && (
        <main
          className="container-fluid"
          style={{ width: "50%", marginTop: "100px" }}
        >
          <ShowOrdersTableComponent />
        </main>
      )}

      {showOrderProcessComponent && (
        <main
          className="container-fluid"
          style={{ width: "50%", marginTop: "100px" }}
        >
          <OrderProcessComponent />
        </main>
      )}
    </>
  );
}
