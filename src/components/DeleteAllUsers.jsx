import React from 'react'
import './Navbar.css'
import { clearAllUsers } from "../store/slices/UsersSlice";
import { useDispatch } from 'react-redux';

const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  const deleteAll = () => {
    dispatch(clearAllUsers());
  }
  return (
    <div>
      <button className='deleteAllButton' onClick={()=> deleteAll()}>
        Delete All Users
      </button>
    </div>
  )
}

export default DeleteAllUsers
