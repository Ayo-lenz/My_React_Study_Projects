import { useReducer } from "react";
const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "favour" },
  { id: 4, name: "rachel" },
];
/*
  UseReducer allows for custom state logic.

  If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
*/

// Saving the Dispatch type inside a variable
const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

// setting up the default state 
const defaultState = {
  people: data,
};


// This function returns the state from the reducer where the actions from the dispatch are been handled
const reducer = (state, action) => {
  console.log(action);
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }


  // To handle an action that we are not catching correctly while dispatching
  {/*
    throw new Error(`No matching "${action.type}" - action type`);
  */}


  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );

    return { ...state, people: newPeople };
  }

  return state;
};

/*
  The useReducer Hook accepts two arguments(reducer, defaultState).

  The reducer function contains your custom state logic and the defaultState can be a simple value but generally will contain an object.

  The useReducer Hook returns the current state and a dispatch method.
*/

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // setting up the dispatch which we will handle the action in the reducer

  const removeItem = (id) => {
    // const newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople);
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearList = () => {
    // setPeople([])
    dispatch({ type: CLEAR_LIST });
  };
  const resetList = () => {
    // setPeople(data)
    dispatch({ type: RESET_LIST });
  };

  return (
    <div>
      {/* switch to state */}
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* switch to state */}

      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
