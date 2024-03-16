import { useState } from "react";

 {
   /* the truthy and falsy value
      the && operator always return a falsy value while the || operator always return a truthy value

      for example if we try to fecth the user from data base, if the user exist then i want to display some kind of component with the values that represent that user and if it doesn't exist we are not displaying that component all together

      {user && <SomeComponent name={user.name} />}
      if user exist then its going to display values that represent user if not its not going to display anything altogther because the && operator always return a falsy value
      */
 }

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  // instead of writing this long line of code we can use the not(!) operator by setting the setShowAlert as the opposite of showAlert in the button.

  {
    /*
      const toggleAlert = () => {
        if (showAlert) {
          setShowAlert(false);
          return;
        }
        setShowAlert(true);
      };
    */
  }

  return (
    <div>
      {/* <button className="btn" onClick={toggleAlert}>
        Toggle
      </button> */}
      <button className="btn" onClick= {() => setShowAlert(!showAlert)}>
        Toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};
 
const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};
export default ToggleChallenge;
