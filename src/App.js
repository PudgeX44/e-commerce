import React, { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Wishlist from "./Components/Wishlist";
import Login from "./Components/Login";
import Search from "./Components/Search";
import Faq from "./Components/Faq";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./ContextReducer/Context";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", payload: authUser });
      } else {
        dispatch({ type: "SET_USER", payload: null });
      }
    });
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="cart"
            element={
              <>
                <Header />
                {user ? <Cart /> : <Login />}
                <Footer />
              </>
            }
          />
          <Route
            path="wishlist"
            element={
              <>
                <Header />
                {user ? <Wishlist /> : <Login />}
                <Footer />
              </>
            }
          />
          <Route path="login" element={<Login />} />
          <Route
            path="search"
            element={
              <>
                <Header />
                <Search />
                <Footer />
              </>
            }
          />
          <Route
            path="faq"
            element={
              <>
                <Header />
                <Faq />
                <Footer />
              </>
            }
          />
          <Route
            path="checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
