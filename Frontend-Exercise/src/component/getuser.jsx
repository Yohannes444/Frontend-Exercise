import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/getUsers';
import { Link } from 'react-router-dom';
import EditUserForm from './editUserForm';
import {logoutUsers} from '../redux/actions/logoutUser'

const LogoutButton = () => {
  const handleLogout = () => {
    dispatch(logoutUsers()); // Dispatch the logout action
  };


  return (
    <button onClick={handleLogout} className="absolute top-4 right-4 bg-red-500 text-white font-bold py-2 px-4 rounded">
      Logout
    </button>
  );
};

const UserCard = ({ user }) => {
  const [isEditClicked, setIsEditClicked] = useState(false);

  const handleEdit = () => {
    setIsEditClicked(true);
  };

  const closeEdit = () => {
    setIsEditClicked(false);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 relative"> {/* Make the container relative for absolute positioning */}
      <img className="w-full" src={user.profilePic} alt={`${user.firstName} ${user.lastName}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.firstName} {user.lastName}</div>
        <p className="text-gray-700 text-base">
          Username: {user.userName}
        </p>
        <p className="text-gray-700 text-base">
          Email: {user.email}
        </p>
        <p className="text-gray-700 text-base">
          Address: {user.address}
        </p>
        <p className="text-gray-700 text-base">
          Is Buyer: {user.isBuyer ? 'Yes' : 'No'}
        </p>
      </div>
      {isEditClicked ? <EditUserForm user={user} closeEdit={closeEdit} /> : null}
      <button onClick={handleEdit} className="absolute bottom-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Edit
      </button>
    </div>
  );
};

const GetAllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.data);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="relative"> {/* Make the container relative for absolute positioning */}
      <LogoutButton /> {/* Render the LogoutButton */}
      <div className="flex flex-wrap justify-center">
        {users.map(user => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default GetAllUsers;
