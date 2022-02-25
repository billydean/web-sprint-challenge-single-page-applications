import React from "react";
import Header from './components/Header';
import Banner from './components/Banner';
import BoxContainer from './components/BoxContainer';
import Footer from './components/Footer';
import OrderConfirm from './components/OrderConfirm';
import PizzaForm from './components/PizzaForm';

const App = () => {
  return (
    <>
    <Header />
    <Banner />
    <BoxContainer />
    <PizzaForm />
    <OrderConfirm />
    <Footer />
    </>
  );
};
export default App;
