import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/getUsers'; // Import your getUser action
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4">
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
      <Link to="/editUser" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  edit
</Link>
    </div>
  );
};

const GetAllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.data); // Access users from Redux state

  useEffect(() => {
    dispatch(getUsers()); // Dispatch the getUser action on component mount
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-center">
      {users.map(user => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default GetAllUsers;
