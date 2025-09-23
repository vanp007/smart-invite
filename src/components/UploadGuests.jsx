import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';


const UploadGuests = () => {
  const [result, setResult] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const eventID = location.state?.eventID || "No Event ID";

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Uploading Guests...");
    try {
      const formData = new FormData(e.target);
      formData.set("event_id", eventID);

      const response = await axios.post(
        "https://invite.komki.co.tz/smart-invite-api/upload-guests.php",
        formData,
      );

      if (response.status === 200) {
        navigate("/preview-card",
          { state: { eventID } });
      } else {
        setResult("Error uploading guests.");
      }
    } catch (error) {
      console.error(error);
      setResult("An error occurred while uploading guests.");
    }
    e.target.reset();
  };

  return (
    <div>
      <div className="header">
        <h1>Upload Guests</h1>
      </div>

      <form onSubmit={onSubmit} encType="multipart/form-data">
        <div>
          <label htmlFor="event_id">Event ID:</label>
          <input
            type="text"
            id="event_id"
            name="event_id"
            defaultValue={eventID}
            required
            readOnly
          />
        </div>
        <div>
          <label htmlFor="guestfile">CSV File:</label>
          <input type="file" name="guestfile" id="guestfile" required />
        </div>
        <button className='btn btn-primary' type="submit">Upload</button>
      </form>
      <p>{result}</p>

    </div>
  )
}

export default UploadGuests
