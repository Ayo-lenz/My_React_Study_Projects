// we just want to understand how we can push the state down in order to avoid unwanted re-rendering of our compone

import { useState } from "react";
import Form from "./Form";
import List from "./List";

const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "favour" },
  { id: 4, name: "rachel" },
];

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);

  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  return (
    <section>
      <Form addPerson={addPerson} />
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
