import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar';
import Navbar from '../NAvBar/Navbar';


export default function MasterLayout() {
  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <div>
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <Navbar />
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
