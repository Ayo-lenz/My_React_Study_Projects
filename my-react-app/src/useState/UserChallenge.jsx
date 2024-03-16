import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

{/*
    here we want to learn how to use the tenary operators to flips toa page that we want to display

    whenever we click on the button we return a different value

*/}

  const login = () => {
    // normally connect to db or api
    setUser({ name: "my name is Oluwasegun Ayodeji" });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
    // initially user is not defined thats why is shows "please login". we now use the login button to make it defined 
  );
}; 

export default UserChallenge; 