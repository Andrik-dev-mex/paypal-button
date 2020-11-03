import React, { Fragment } from "react";
import PaypalCheckoutButton from "./components/PaypalCheckoutButton";
import "./App.css"
import Navbar from "./layout/Navbar";


function App() {
  const order = {
    order: {
      customer: "112122",
      total: '3908.97',
      items: [
        {
          sku: "12343",
          name: "Bocina Tronsmart T6",
          price: '1139.99',
          quantity: 1,
          currency: 'MXN'
        },
        {
          sku: "1221w3",
          name: "Xiaomi Mi Band 4",
          price: '929.99',
          quantity: 2,
          currency: 'MXN'
        },
        {
          sku: "1253qw",
          name: "Mouse Logitech G502 Hero",
          price: '909.00',
          quantity: 1,
          currency: 'MXN',
        },
      ]
    }
  }

  return (
    <Fragment>
      <Navbar />
      <div className="container-flex" >
        <PaypalCheckoutButton
          order={order.order}
        />
      </div>
    </Fragment>
  );
}

export default App;
