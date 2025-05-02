import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookSeat = () => {
  const { state } = useLocation();
  // console.log(state);

  const navigate = useNavigate();
  const path = "/admin";
  const routeChange = () => {
    navigate(path);
  };
  //Handle user select button
  const handleSubmit = async (userId, userName) => {
    try {
      const response = await fetch(
        "https://bookmyseat-server.vercel.app/book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            roomId: state.roomId,
            roomName: state.roomName,
            seatId: state.seatId,
            userId: userId,
            userName: userName,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //-----------------------------------------------

  return (
    <div className="flex flex-col items-center text-center text-gray-600">
      <h1 className="text-3xl text-red-500 uppercase m-5">
        Room - {state.roomName}
      </h1>
      <h2 className="text-2xl text-blue-600 mb-10">
        Select a User to Book Seat No. {state.seatId}
      </h2>
      <div className="w-2xs bg-gray-300 flex flex-col text-gray-900 p-10 rounded-2xl">
        {state.users.map((user) => (
          <button
            key={user.id}
            onClick={() => {
              handleSubmit(user.id, user.username);
              alert("Seat Booked!");
              routeChange();
            }}
            className="text-lg block uppercase mb-4 hover:text-gray-700 hover:cursor-pointer"
          >
            {user.username}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookSeat;
