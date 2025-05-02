import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserList from "../components/UserList";

const Admin = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://bookmyseat-server.vercel.app/login");
        const resData = await res.json();
        setRooms(resData.seeRooms);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between p-5 md:px-20 my-10">
        {/* Add User */}
        <div className="text-center text-gray-800 border-1 p-5 rounded-2xl">
          <h1 className="text-3xl mb-4">Add User</h1>
          <form
            action="https://bookmyseat-server.vercel.app/adduser"
            method="post"
          >
            <label className="m-2" htmlFor="username">
              Username
            </label>
            <input
              className="m-2 border-1"
              id="username"
              name="username"
              type="text"
            />
            <br />
            <label className="m-2" htmlFor="password">
              Password
            </label>
            <input
              className="m-2 border-1"
              id="password"
              name="password"
              type="password"
            />
            <br />
            <input
              className="text-white bg-red-500 hover:bg-red-400 hover:cursor-pointer px-4 py-2 rounded-full m-2"
              type="submit"
              value="Add"
              onClick={() => alert("User Added!")}
            />
          </form>
        </div>
        {/* Room list */}
        <div className="text-center my-10">
          <h2 className="text-2xl mb-4 uppercase border-1 border-gray-500 p-2">
            Room List
          </h2>
          <ul>
            {rooms.map((room) => (
              <li
                key={room.id}
                className="text-lg text-blue-800 hover:border-b-1 hover:border-b-red-300"
              >
                <Link
                  to={`/rooms/${room.room_name}`}
                  state={{
                    id: room.id,
                    roomName: room.room_name,
                    seats: room.total_seats,
                  }}
                >
                  {room.room_name} - {room.total_seats}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Add Room */}
        <div className="text-center text-gray-800 border-1 p-5 rounded-2xl">
          <h1 className="text-3xl mb-4">Add Room</h1>
          <form
            action="https://bookmyseat-server.vercel.app/addroom"
            method="post"
          >
            <label className="m-2" htmlFor="roomName">
              Name
            </label>
            <input
              className="m-2 border-1"
              id="roomName"
              name="roomName"
              type="text"
            />
            <br />
            <label className="m-2" htmlFor="totalSeats">
              Total Seats
            </label>
            <input
              className="m-2 border-1"
              id="totalSeats"
              name="totalSeats"
              type="number"
            />
            <br />
            <input
              className="text-white bg-red-500 hover:bg-red-400 hover:cursor-pointer px-4 py-2 rounded-full m-2"
              type="submit"
              value="Add"
              onClick={() => alert("Room Created!")}
            />
          </form>
        </div>
      </div>
      {/* User List */}
      <div className="mt-10">
        <h1 className="text-4xl text-center mb-5 text-gray-800">
          Booked Slots
        </h1>
        <UserList />
      </div>
    </div>
  );
};

export default Admin;
