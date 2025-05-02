import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Rooms = () => {
  const location = useLocation();
  const { id, roomName, seats } = location.state;
  // console.log(location.state);
  //------Fetch URL params of room name
  const { room_name } = useParams();
  // console.log(room_name);

  //---------See booked seats
  const [bookedSeats, setBookedSeats] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/login");
        const resData = await res.json();
        // console.log(resData.data);

        setBookedSeats(resData.seeBookings);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  // console.log(bookedSeats);

  //------Filter Matched Room
  const currentRoomBookings = bookedSeats.filter(
    (room) => room.room_name === room_name
  );
  // console.log(currentRoomBookings);

  // ----------------------------Creation of Seats
  const rows = [];
  for (let i = 0; i < seats; i++) {
    const currentSeat = { id: i + 1, name: "", booked: false };
    currentRoomBookings.forEach((book) => {
      if (book.seat_id == currentSeat.id) {
        currentSeat.name = book.username;
        currentSeat.booked = true;
      }
    });
    rows.push(currentSeat);
  }

  // console.log(rows);

  // ----------------------------Fetch Users
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/login");
        const resData = await res.json();
        // console.log(resData.data);

        setMembers(resData.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  // console.log(members);

  return (
    <div>
      <div className="heading text-center my-10">
        <h1 className="text-3xl text-gray-900">Room name : {roomName}</h1>
        <h2 className="text-xl text-gray-500">Seats: {seats}</h2>
      </div>
      <div className="flex flex-wrap gap-2 text-white text-center md:px-130 justify-center">
        {rows.map((seat) => (
          <Link
            key={seat.id}
            to={seat.booked ? `/admin` : `/book/${roomName}/${seat.id}`}
            state={{
              roomId: id,
              roomName: roomName,
              seatId: seat.id,
              users: members,
            }}
          >
            <div
              title={seat.name || "Available"}
              className={`${
                seat.booked ? "bg-red-500" : "bg-blue-700"
              } flex h-10 w-10 justify-center align-middle`}
            >
              {seat.id}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
