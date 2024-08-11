import React from "react";
import DeleteAllUsers from "./DeleteAllUsers";
import "./UserDetail.css";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser, clearAllUsers } from "../store/slices/UsersSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = () => {
    const newUser = fakeUserData();
    dispatch(addUser(newUser));
  };

  return (
    <div className="content">
      <div className="table-content">
        <div className="admin-subtitle">List of Users Details</div>
        <button onClick={addNewUser}>Add New User</button>
      </div>
      <div className="allTasks">
        <DisplayUsers />
      </div>
      <hr />
      <DeleteAllUsers />
    </div>
  );
};

export default UserDetails;