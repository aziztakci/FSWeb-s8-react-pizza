import React, { useState } from "react";
import Header from "./components/Header";
import MenuCategories from "./components/MenuCategories";
import Offers from "./components/Offers";
import Cards from "./components/Cards";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import OrderPage from "./components/OrderPage";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      {activePage === "home" ? (
        <>
          <Header setActivePage={setActivePage}/>
          <MenuCategories />
          <Offers />
          <Cards />
        </>
      ) : (
        <>
          <OrderPage setActivePage={setActivePage}/>
        </>
      )}
      <Footer />
      <Copyright />
    </>
  );
}
