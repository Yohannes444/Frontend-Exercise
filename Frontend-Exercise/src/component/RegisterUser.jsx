import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/actions/createUser';
import { Link } from 'react-router-dom';

const RegisterUser = ({ google }) => {
  const dispatch = useDispatch();

  const [formDataFirstPage, setFormDataFirstPage] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: ''
  });

  const [formDataSecondPage, setFormDataSecondPage] = useState({
    confirmPassword: '',
    address: '',
    isBuyer: false,
    profilePic: null
  });

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChangeFirstPage = (e) => {
    const { name, value } = e.target;
    setFormDataFirstPage({
      ...formDataFirstPage,
      [name]: value
    });
  };

  const handleInputChangeSecondPage = (e) => {
    const { name, value } = e.target;
    setFormDataSecondPage({
      ...formDataSecondPage,
      [name]: value
    });
  };

  const handlePreviousPage = () => {
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage(2);
  };

  const handleRegister = () => {
    const formData = { ...formDataFirstPage, ...formDataSecondPage };
    dispatch(createUser(formData));
    console.log('formData:', formData);
    setFormDataFirstPage({
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: ''
    });
    setFormDataSecondPage({
      confirmPassword: '',
      address: '',
      isBuyer: false,
      profilePic: null
    });
    setCurrentPage(1); // Reset to the first page after registration
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold text-center mb-4">Registration Form</h2>
        {currentPage === 1 && (
          <form className="grid grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
              <input type="text" id="firstName" name="firstName" value={formDataFirstPage.firstName} onChange={handleInputChangeFirstPage} placeholder="Enter your first name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" id="lastName" name="lastName" value={formDataFirstPage.lastName} onChange={handleInputChangeFirstPage} placeholder="Enter your last name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" value={formDataFirstPage.email} onChange={handleInputChangeFirstPage} placeholder="Enter your email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              {formDataFirstPage.email && !/^\S+@\S+\.\S+$/.test(formDataFirstPage.email) && <p className="mt-1 text-xs text-red-500">Please enter a valid email address.</p>}
            </div>
            <div>
              <label htmlFor="userName" className="text-sm font-medium text-gray-700">Username</label>
              <input type="text" id="userName" name="userName" value={formDataFirstPage.userName} onChange={handleInputChangeFirstPage} placeholder="Enter your username" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" value={formDataFirstPage.password} onChange={handleInputChangeFirstPage} placeholder="Enter your password" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <button type="button" onClick={handleNextPage} className="col-span-2 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:bg-indigo-700">Next</button>
          </form>
        )}
        {currentPage === 2 && (
          <form className="grid grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" value={formDataSecondPage.confirmPassword} onChange={handleInputChangeSecondPage} placeholder="Confirm your password" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label>
              <input type="text" id="address" name="address" value={formDataSecondPage.address} onChange={handleInputChangeSecondPage} placeholder="Enter your address (e.g., Addis Ababa, Ethiopia)" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="isBuyer" className="text-sm font-medium text-gray-700">Are you a buyer?</label>
              <select id="isBuyer" name="isBuyer" value={formDataSecondPage.isBuyer} onChange={handleInputChangeSecondPage} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div>
              <label htmlFor="profilePic" className="text-sm font-medium text-gray-700">Profile Picture</label>
              <input type="text" id="profilePic" name="profilePic" onChange={handleInputChangeSecondPage} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              {formDataSecondPage.profilePic && <p className="mt-2 text-sm text-gray-500">{formDataSecondPage.profilePic.name}</p>}
            </div>
            <button type="button" onClick={handlePreviousPage} className="col-span-2 px-4 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500 focus:bg-gray-500">Previous</button>
            <button type="button" onClick={handleRegister} className="col-span-2 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:bg-indigo-700">Register</button>
          </form>
        )}
      </div>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">login</Link>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
})(RegisterUser);
