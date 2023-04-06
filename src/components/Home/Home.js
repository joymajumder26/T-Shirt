import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../TShirt/Tshirt";
import Cart from "../Cart/Cart";
import './Home.css'

const Home = () => {
  const tShirts = useLoaderData();
  const [cart,setCart] = useState([]);

  const handleAddToCart=tshirt=>{
    const exists = cart.find(ts => ts._id === tshirt._id);
    if(exists){
        alert('t shirt already exists')
    }
    else{
    const newCart = [...cart,tshirt];
    setCart(newCart);
    alert('Successfully Added')
    }
  }
  const handleRemoveCart = tshirt =>{
    const remaining = cart.filter(ts => ts._id !== tshirt._id);
    setCart(remaining)
    alert('Remove Successfully')
  }

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tShirts.map((tshirt) => (
          <Tshirt key={tshirt._id}
           tshirt={tshirt}
           handleAddToCart={handleAddToCart}
           ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart 
        handleRemoveCart={handleRemoveCart}
        cart={cart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
