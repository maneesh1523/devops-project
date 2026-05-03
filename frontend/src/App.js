import React, { useEffect, useState } from "react";

function App() {
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/hostels")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHostels(data);
      });
  }, []);

  const bookHostel = (hostel) => {
    fetch("http://127.0.0.1:5000/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hostel),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "blue" }}>🏠 Hostel Booking App</h1>

      {hostels.map((hostel) => (
        <div key={hostel.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{hostel.name}</h3>
          <p>{hostel.location}</p>
          <p>₹{hostel.price}</p>
          <button onClick={() => bookHostel(hostel)}>Book</button>
        </div>
      ))}
    </div>
  );
}

export default App;
