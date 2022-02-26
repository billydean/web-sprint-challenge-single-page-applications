import React, { useState,useEffect } from "react";
import Header from './components/Header';
import BoxContainer from './components/BoxContainer';
import Footer from './components/Footer';
import OrderConfirm from './components/OrderConfirm';
import PizzaForm from './components/PizzaForm';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/pizzaSchema.js'
import { Link, Route } from 'react-router-dom';

//initial form values
const initialValues = {
  name: "",
  size: "",
  pepperoni: false,
  mushrooms: false,
  onions: false,
  sausage: false,
  bacon: false,
  olives: false,
  bellpeppers: false,
  pineapple: false,
  spinach: false,
  morecheese: false,
  special: "",
  sauce: "",
  glutensub:false,
  quantity:""
}
//initial error messages
const initialErrors = {
  name: "",
  size: "",
  sauce: "",
}
// is the submit button disabled?
const initialDisabled = true;

const App = () => {
  //state for form values
  const [formValues, setFormValues] = useState(initialValues);
  //state for errors
  const [errors, setErrors] = useState(initialErrors);
  //state for disable button
  const [disabled, setDisabled] = useState(initialDisabled);
  // state for displaying order at end
  const [pizzaWish, setPizzaWish] = useState({})
  // post to api
  const placeOrder = pizzaWish => {
    axios.post('https://reqres.in/api/orders', pizzaWish)
      .then(res => {
        setPizzaWish(res.data);
        console.log(pizzaWish);
        console.log(res.data);
        setFormValues(initialValues);
      })
      .catch(err => console.error(err))
  }
  // validation, once I have yup and schema in order, TBD
  const validatePizza = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(()=> setErrors({ ...errors, [name]:''}))
      .catch(err => {
        setErrors({ ...errors, [name]: err.errors[0]})})
  }
  //changing form values
  const updateForm = (name, value) => {
    validatePizza(name,value);
    setFormValues({
      ...formValues,
      [name]: value
    });
  }
  // when user submits order, this stages the form input to be placed by helper above
  const stageOrder = () => {
    const pizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      mushrooms: formValues.mushrooms,
      onions: formValues.onions,
      sausage: formValues.sausage,
      bacon: formValues.bacon,
      olives: formValues.olives,
      bellpeppers: formValues.bellpeppers,
      pineapple: formValues.pineapple,
      spinach: formValues.spinach,
      morecheese: formValues.morecheese,
      special: formValues.special.trim(),
      sauce: formValues.sauce,
      glutensub: formValues.glutensub,
      quantity: formValues.quantity
    };
    console.log(pizza);
    placeOrder(pizza);
  }
  //side effect hook for toggling button's disabled status
  useEffect(()=>{
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  },[formValues])


  return (
    <>
      <Header />
      <Route exact path="/">
      <div className="home-bg">
    <h1>Your favorite food, delivered while coding</h1>
    <Link to="/pizza">Pizza?</Link>
          </div>
          <BoxContainer />
      </Route>
      <Route path="/pizza">
        <div className="pizza-bg"></div>
        <PizzaForm 
          values={ formValues }
          change={ updateForm }
          submit={ stageOrder }
          disabled={ disabled }
          errors={ errors }
        />
      </Route>
      <Route path="/confirmed">
      <div className="confirm-bg">
    <h1>Congrats! Pizza is on its way!</h1>
</div>
        <OrderConfirm props={ pizzaWish }/>

      </Route>
      <Footer />
    </>
  );
};
export default App;
