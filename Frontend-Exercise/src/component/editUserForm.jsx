// EditUserForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUsers } from '../redux/actions/editUser';
import { getUsers } from '../redux/actions/getUsers'; // Import your getUser action

const EditUserForm = ({ user,closeEdit }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    _id:user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    userName: user.userName,
    password: user.password,
    confirmPassword: user.confirmPassword,
    address: user.address,
    isBuyer: user.isBuyer,
    profilePic: user.profilePic,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    dispatch(editUsers(formData)); // Assuming this is successful
    closeEdit()
    dispatch(getUsers()); // Dispatch the getUser action on component mount

    // Reset form data after submission
    setFormData({
      _id: user._id,
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
      address: '',
      isBuyer: false,
      profilePic: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl mb-4">Edit User</h2>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="isBuyer" className="block text-sm font-medium text-gray-700">
          Buyer
        </label>
        <input
          type="checkbox"
          id="isBuyer"
          name="isBuyer"
          checked={formData.isBuyer}
          onChange={(e) => setFormData({ ...formData, isBuyer: e.target.checked })}
          className="mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700">
          Profile Picture
        </label>
        <input
          type="text"
          id="profilePic"
          name="profilePic"
          value={formData.profilePic}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Update User
      </button>
    </form>
  );
};

export default EditUserForm;
