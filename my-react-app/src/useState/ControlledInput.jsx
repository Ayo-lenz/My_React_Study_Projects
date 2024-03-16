import { useState } from "react";
import "../App.css";


const ControlledInput = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "john" },
    { id: 2, name: "peter" },
    { id: 3, name: "susan" },
    { id: 4, name: "anna" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(name);
    // if no value, do nothing
    if (!name) return;
    // if value, setup new user and add to current users
    const fakeId = Date.now();
    console.log(fakeId);
    // const newUser = { id: fakeId, name: name };
    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    // set back to empty
    setName("");
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users */}
      <h2>users</h2>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button onClick={() => removeUser(user.id)} className="btn">
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ControlledInput;
