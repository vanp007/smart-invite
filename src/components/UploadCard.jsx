import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';


const UploadCard = () => {
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
			<nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: "linear-gradient(135deg, #1a237e, #3949ab)" }}>
				<div className="container">
					<a className="navbar-brand fw-bold" >Upload Card</a>
				</div>
			</nav>

      <form onSubmit={onSubmit} encType="multipart/form-data" style={{marginTop:100}}>
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
          <label htmlFor="cardfile">Upload Card:</label>
          <input type="file" name="cardfile" id="cardfile" required />
        </div>
        <button className='btn btn-primary' style={{height:50}} type="submit">Upload</button>
      </form>
      <p>{result}</p>

    </div>
  )
}

export default UploadCard;
