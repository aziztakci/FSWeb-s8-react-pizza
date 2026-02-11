import React, { useState } from "react";
import Header from "./components/Header";
import MenuCategories from "./components/MenuCategories";
import Offers from "./components/Offers_Cards/Offers";
import Cards from "./components/Bottom_Cards/Cards";
import Copyright from "./components/Copyright";
import OrderPage from "./components/OrderPage";
import Footer from "./components/Footer_Section/Footer";



export default function App() {
  const [activePage, setActivePage] = useState("home");



  return (
    <>
      {activePage === "home" ? (
        <>
          <Header setActivePage={setActivePage}/>
          <MenuCategories/>
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
