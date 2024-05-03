import { useState, useCallback, useMemo } from "react";
import Lists from "./Lists";
import slowFunction from "./slowFunction";

const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "favour" },
  { id: 4, name: "rachel" },
];

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  // our component renders slowly every time we update our state value, that is the value does not change right away because every time we rerender we run the slowFunction in each render and since the function is really slow thats why it takes ages for us to update the count variable

  const value = useMemo(() => slowFunction(), []);
  console.log(value);


  // The remove person function that was pass as props inside the List component changes thats why the List component rerenders when we update the count variable even though the Memo function has took care of the List component from rerendering.. Thats why we use the useCallback hook to fix this.
  const removePerson = useCallback(
    (id) => {
      console.log(people);
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <Lists people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
