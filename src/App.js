import React from "react";
import { Link } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      {" "}
      <div className="bg-yellow-400 h-8 flex justify-evenly items-center cursor-pointer">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/cart">Cart</Link>

        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.britannica.com/78/155378-050-838B4322/Himalayas-Nepal.jpg"
          className="object-cover  "
          alt="hero"
        />
      </div>
      <Cart />
    </>
  );
}

export default App;
