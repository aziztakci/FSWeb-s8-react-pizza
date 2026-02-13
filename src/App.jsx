import React, { useState } from "react";
import Header from "./components/Header";
import MenuCategories from "./components/MenuCategories";
import Offers from "./components/Offers_Cards/Offers";
import Cards from "./components/Bottom_Cards/Cards";
import Copyright from "./components/Copyright";
import OrderPage from "./components/OrderPage";
import Footer from "./components/Footer_Section/Footer";
import SummaryPage from "./components/SummaryPage";



export default function App() {
   const initialFormData = {
    size: "",
    dough: "",
    note: "",
    num: 1,
    name: "",
    selectedToppings: [],
  }
  const [activePage, setActivePage] = useState("home");
const [formData, setFormData] = useState(initialFormData);



  return (
    <>
      {activePage === "home" ? (
        <>
          <Header setActivePage={setActivePage}/>
          <MenuCategories/>
          <Offers />
          <Cards />
        </>
      ) : activePage === "order" ? ( 
        <OrderPage setActivePage={setActivePage} setFormData={setFormData} initialFormData= {initialFormData} formData={formData}/>
      ) : (
        <SummaryPage formData={formData}/>
      )}
      <Footer />
      <Copyright />
    </>
  );
}
