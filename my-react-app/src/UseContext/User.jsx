import { useAppContext } from 'Nav';
import { useContext } from 'react';
import { NavbarContext } from 'Nav';

const User = () => {
  // Without custom hook
  /*
    const { user, logout } = useContext(NavbarContext);
  */
  const { user, logout } = useAppContext();
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
}
export default User