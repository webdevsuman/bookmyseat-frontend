import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  const { user: id } = useParams();
  // console.log(id);

  //Fetching User data from seatmap
  const [userSlots, setUserSlots] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await fetch("http://localhost:3000/login");
      const data = await res.json();
      const loginUserData = data.seeBookings.filter(row => row.user_id == id)

      setUserSlots(loginUserData);
    }

    fetchData();
  },[id])
// console.log(userSlots);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl my-5 text-gray-800">Your bookings:</h1>
      <div className="relative overflow-x-auto border-1 border-gray-400">
        <table className="w-full text-sm text-center rtl:text-right">
          <thead className="text-sm uppercase bg-gray-700 text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Room Name
              </th>
              <th scope="col" className="px-6 py-3">
                Seat No
              </th>
            </tr>
          </thead>
          <tbody>
            {userSlots.map((user, index) => (
              <tr
                key={user.id + 1}
                className="bg-gray-200 border-b border-gray-400 text-gray-700"
              >
                <th
                  key={user.id + 2}
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <td key={user.id + 3} className="px-6 py-4">
                  {user.username}
                </td>
                <td key={user.id + 4} className="px-6 py-4">
                  {user.room_name || "Not assigned"}
                </td>
                <td key={user.id + 5} className="px-6 py-4">
                  {user.seat_id || "Not assigned"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
