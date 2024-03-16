import { useState } from "react"
import React from "react";

const ErrorExample = () => {
  const data = [
    {id: 1, name: 'john'},
    {id: 2, name: 'peter'},
    {id: 3, name: 'favour'},
    {id: 4, name: 'rachel'},
  ];


  const [count, setCount] = useState(0)
  const [people, setPeople] = React.useState(data)

  const handleClick = () => {
    // to get the most latest from a state variable, react provides us with the ability to have another function inside the useState to help have the most latest value

    // setCount(count + 1);

    setCount((current) => {
      const newState = current + 1;
      return newState;
    });
    // this approach can be used if we have a functionality that relies on the latest value
  }

  const removeItem = (id) => {
    // im passing a callback function inside the filter array method
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  };
  
  const clearAllItem = () => {
    setPeople([])
  };
  return (
    <>
      <div>
        <h1>You click {count} times</h1>
        <button type="button" className="btn" onClick={handleClick}>
          Click Me
        </button>
      </div>
      <div>
        {people.map((person) => {
          const {id, name} = person;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button type="button" onClick={() => removeItem(id)}>remove</button>
            </div>
          );
        })}
      </div>

      <button type="button" style={{marginTop: '2rem'}} className="btn" onClick={clearAllItem}>clear items</button>

     
    </>
  );
}
export default ErrorExample