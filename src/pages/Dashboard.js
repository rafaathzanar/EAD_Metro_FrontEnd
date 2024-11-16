import React from 'react'
import AdminNavbar from '../components/AdminNavBar'
import TotalNumOfUsers from '../components/TotalNumOfUsers'

function dashboard() {

const totalUsers = 250; 



  return (
    <div className="min-h-screen bg-white">
        <AdminNavbar />
        <TotalNumOfUsers count={totalUsers}/>
      
    </div>
  )
}

export default dashboard
