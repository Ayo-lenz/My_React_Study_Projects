import Item from "./Person";
import { memo } from "react";

const Lists = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
};
export default memo(Lists);
// As we can see, our List is still re-rendering even after we have used the memo function hence there's need for the UseCallback hook to avoid the unnecessary re-rendering and give our app a high performance.