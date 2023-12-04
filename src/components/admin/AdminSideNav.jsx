// AdminSideNav.tsx

"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons from react-icons library

const AdminSideNav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      className={`bg-gray-800 text-white h-screen w-3/12 ${
        isSidebarOpen ? "block" : "hidden"
      } sm:block`}
    >
      <div className="p-4">
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold">Admin</span>
          <button onClick={toggleSidebar} className="text-white">
            {isSidebarOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Sidebar Content */}
        <div>
          {/* Add your sidebar content here */}
          <img
            className="w-40 rounded-full bg-indigo-100 object-cover shadow-2xl inset-x-0  text-indigo-500 mx-auto"
            src="https://i.ibb.co/QC44RFW/MSc-Defence-Propic.jpg"
            alt=""
          />
          <ul className="text-center">
            <li className="py-2 rounded bg-gray-500 px-4 ">
              <a href="">Manage User</a>
            </li>
            <li className="py-2">
              <a href="">Approve Research</a>
            </li>
            <li className="py-2">
              <a href="">All Blog</a>
            </li>
            <li className="py-2">
              <a href=""></a>
            </li>
            <li className="py-2">
              <a href="">Manage User</a>
            </li>
          </ul>
        </div>

        {/* Sidebar Lines */}
        <div className="border-t border-gray-600 mt-4 pt-4">
          {/* Add additional lines or content here */}
        </div>
      </div>
    </nav>
  );
};

export default AdminSideNav;
