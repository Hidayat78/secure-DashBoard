// src/pages/DashboardPage.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../api/apiService'; // Import the API function

const DashboardPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data.data); // Assuming the users are in 'data.data'
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/signin');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome, {user.email}!
        </h1>
        
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Logout
        </button>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">User List</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {users.map(user => (
              <div key={user.id} className="bg-white border rounded-lg shadow-md p-4">
                <img 
                  src={user.avatar} 
                  alt={user.first_name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4" 
                />
                <h3 className="text-lg font-semibold text-center">{user.first_name} {user.last_name}</h3>
                <p className="text-center text-gray-600">{user.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;










// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../store';
// import { logout } from '../slices/authSlice';
// import { useNavigate } from 'react-router-dom';

// const DashboardPage: React.FC = () => {
//   const user = useSelector((state: RootState) => state.auth.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/signin');
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl">Welcome, {user.email}!</h1>
//       <button
//         onClick={handleLogout}
//         className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default DashboardPage;
