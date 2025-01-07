import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../../redux/slices/userSlice';


const UserProfileContainer = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>User Profiles</h1>
      {userInfo ? <p>{userInfo.name}</p> : <p>No user logged in</p>}
      <button onClick={() => dispatch(setUser({ name: 'John Doe' }))}>
        Log In
      </button>
      <button onClick={() => dispatch(clearUser())}>Log Out</button>
    </div>
  );
};

export default UserProfileContainer;
