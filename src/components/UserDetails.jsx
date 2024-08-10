import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import './UserDetail.css'
import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux'
import {addUser} from '../store/slices/UsersSlice'
import DisplayUsers from './DisplayUsers'


const UserDetails = () => {
  const dispatch=useDispatch();
  const addNewUser=(name)=>{
    dispatch(addUser(name))
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
            <li >
              <DisplayUsers/>
            </li>
            <button className='taskButton'>Delete</button>

        </ul>
        </div>
        <hr />
        <DeleteAllUsers/>
    </div>
  )
}

export default UserDetails
