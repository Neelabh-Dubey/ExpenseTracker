import { useState } from "react";
import expenseItems from "./public/dummy";
import YearFilter from "./components/YearFilter";
import Expenses from "./components/Expenses";
import Header from "./components/Header";
import AddExpense from "./components/AddExpense";

function App() {

  const [selected, setSelect] = useState('2021');

  const onSelectHandler = (selectedYear) => {
    setSelect(() => selectedYear);
  }

  const [items, setItems] = useState(expenseItems);

  const onSubmitHandler = (newItem) => {
    setItems((previousItems) => [newItem, ...previousItems]);
  }

  return (
    <div>
      <Header/>
      <AddExpense onSubmit={onSubmitHandler}/>
      <YearFilter onSelect = {onSelectHandler} selected={selected}/>
      <Expenses data={items} year = {selected}/>
    </div>
  );
}

export default App;


// Component name must start with uppercase otherwise it throw error being confused by html tag eg- div,p
// Per return statement there must be just one component
// {....} => by this way we can put javascript snippet in JSX
// components cant access values of other components unless it is passed as props (object of all attributes passed)
//even if we pass an object as prop in a component, then this object also become key for receiving prop in the component.


//Composition in react-
// This is a way to create a common wrapper component.
// If we put html syntax between built in html tags like div, it works but that is not case with when we put
// html syntax in custom html tags (component). We can achieve this => whatever content is there between component
// tags is passed as special props.children (children is special prop for content in between tags)



// import React from 'react'; has now become optional as proejct setup done it globally for us but its there.



// className can also be passed and retrieved from props, thus we can add multiple classes for a components
// eg=> let classes = 'earlierClassName ' + props.className;
// this can be simply used as in component => <component className = {classes} />


// react state/hooks(function) must be called only inside react component function not even in nested function.
// these hooks are created one per instance of a component.
// imp to understand is change state variable (by state function) calls the component function with update 
// state variable value but this time hook is not initialised, it just update the value.

// passing complex object or redering complex object like date() object embeded in an object cause error.