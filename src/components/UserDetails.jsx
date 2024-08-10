import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import './UserDetail.css'
import { fakeUserData } from '../api'
const UserDetails = () => {

  const addNewUser=()=>{

  }
  return (
    <div className='content'>
        <div className="table-content">
            <div className="admin-subtitle">
                List of Users Details
            </div>
            <button onClick={()=>addNewUser(fakeUserData())}>Add New User</button>
        </div>
        <div className="allTasks">
        <ul className='task'>
        <li >Hi</li>
        <button className='taskButton'>Delete</button>
        </ul>
        <ul className='task'>
        <li >Hi</li>
        <button className='taskButton'>Delete</button>

        </ul>
        <ul className='task'>
            <li >Hi</li>
            <button className='taskButton'>Delete</button>

        </ul>
        </div>
        <hr />
        <DeleteAllUsers/>
    </div>
  )
}

export default UserDetails
