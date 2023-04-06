import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please buy at least one item !!!</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <h3>Amar jonno ekta Naow</h3>
        <p>Tomar nijer jonno ekta</p>
        <p>Amr jonno arekta naow. Please!!</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className={cart.length === 2 ? "orange" : "purple"}>Order Summary</h2>
      <h5>Order Quantity: {cart.length}</h5>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveCart(tshirt)}>X</button>
        </p>
      ))}
      {message}
      {cart.length === 3 ? <p>Tin jon ke gift diba</p> : <p>Kino Kino</p>}
      <p>And operator</p>
      {cart.length === 2 && <h2>Double items</h2>}
      <p>or operator</p>
      {cart.length === 4 || <p>Charta item na</p>}
    </div>
  );
};

export default Cart;
