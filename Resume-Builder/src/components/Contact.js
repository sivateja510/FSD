import React, { useState } from "react";
import '../components/Contact.css'
const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 });
//   const [zoom, setZoom] = useState(14);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Message:", message);
//   };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            className="form-control"
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows="5"
            className="form-control"
            
          />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default Contact;
