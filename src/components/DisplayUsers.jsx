import React from 'react'
import { useSelector } from 'react-redux'

const DisplayUsers = () => {
   const data = useSelector((state) => state.users || []);
   console.log(data);
   
   return (
     <>
       {data.map((user, index) => (
         <li key={index}>
           {user}
         </li>
       ))}
     </>
   )
}

export default DisplayUsers