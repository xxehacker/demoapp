import React, { useState } from 'react';

function Dashboard({ user }) {
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Welcome {user.userName}</h2>
        <ul className="space-y-2">
          <li onClick={() => setShowChangePassword(false)} className="cursor-pointer text-blue-500">Gender Master</li>
          <li onClick={() => setShowChangePassword(false)} className="cursor-pointer text-blue-500">Country Master</li>
          <li onClick={() => setShowChangePassword(false)} className="cursor-pointer text-blue-500">State Master</li>
          <li onClick={() => setShowChangePassword(false)} className="cursor-pointer text-blue-500">City Master</li>
          <li onClick={() => setShowChangePassword(false)} className="cursor-pointer text-blue-500">Reports</li>
          <li onClick={() => setShowChangePassword(true)} className="cursor-pointer text-blue-500">Change Password</li>
          <li onClick={() => {
            alert("Logged out")
            // localStorage.removeItem('user');
            window.location.href = '/login';
          }} className="cursor-pointer text-red-500">Logout</li>
        </ul>
      </div>

      <div className="w-3/4 p-6">
        {showChangePassword ? (
          <div>
            <h2 className="text-2xl font-bold mb-6">Change Password</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">User ID</label>
                <input
                  type="text"
                  value={user.email || user.mobile}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter New Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700">Old Password</label>
                <input
                  type="password"
                  placeholder="Enter Old Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="button"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Update Password
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-6">Welcome to Dashboard section</h2>
            <p>Here you can perform all tasks available in the left panel.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
