import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from "../store/slices/UsersSlice";

const DisplayUsers = () => {
  const data = useSelector((state) => state.user.users || []);
  const dispatch = useDispatch();
  const deleteSelected = (e) => {
    console.log(e.target.previousSibling)
    // dispatch(removeUser(e.target.previousSibling.textContent))
  }
   
   return (
     <>
       {data.map((user, index) => (
        <div className="task">
         <li key={index}>
           {user}
         </li>
         <button className='taskButton' onClick={(e)=>deleteSelected(e)}>Delete</button>

        </div>
         
       ))}
     </>
   )
}

export default DisplayUsers