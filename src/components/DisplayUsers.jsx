import React from 'react'
import { useSelector } from 'react-redux'

const DisplayUsers = () => {
  const data = useSelector((state) => state.user.users || []);
   
   return (
     <>
       {data.map((user, index) => (
        <div className="task">
         <li key={index}>
           {user}
         </li>
         <button className='taskButton'>Delete</button>

        </div>
         
       ))}
     </>
   )
}

export default DisplayUsers