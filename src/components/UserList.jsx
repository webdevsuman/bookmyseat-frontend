import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/login");
        const resData = await res.json();
        // console.log(resData.data);

        setMembers(resData.seeBookings);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  // console.log(members);
  const handleClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="text-center">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-center rtl:text-right">
          <thead className="text-xs uppercase bg-gray-700 text-gray-300">
            <tr>
              <th scope="col" className="px-0 md:px-6 py-3">
                id
              </th>
              <th scope="col" className="px-0 md:px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-0 md:px-6 py-3">
                Room Name
              </th>
              <th scope="col" className="px-0 md:px-6 py-3">
                Seat No
              </th>
              <th scope="col" className="px-0 md:px-6 py-3">
                Remove Bookings
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((user, index) => (
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
                <td key={user.id + 6} className="px-6 py-4">
                  <button
                    className="text-white bg-gray-500 hover:bg-red-400 px-4 py-2 rounded-xl md:rounded-full hover:cursor-pointer"
                    onClick={async () => {
                      handleClick(user.id);
                      alert("Slot cleared");
                      const res = await fetch("http://localhost:3000/login");
                      const resData = await res.json();
                      // console.log(resData.data);

                      setMembers(resData.seeBookings);
                    }}
                  >
                    Clear Slot
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
