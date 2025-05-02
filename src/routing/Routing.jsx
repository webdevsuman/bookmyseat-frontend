import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../components/SignIn";
import Admin from "../Pages/Admin";
import Users from "../Pages/Users";
import Rooms from "../Pages/Rooms";
import BookSeat from "../components/BookSeat";

const Routing = () => {
  return (
    <div>
      {/* Defining the Routes */}
      <Routes>
        <Route path="/" element="" />
        <Route path="/login" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:user" element={<Users />} />
        {/* <Route path="/rooms" element={<Rooms />} /> */}
        <Route path="/rooms/:room_name" element={<Rooms />} />
        <Route path="/book/:room_name/:seat_no" element={<BookSeat />} />
      </Routes>
    </div>
  );
};

export default Routing;
