import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';


const UploadGuests = () => {
  const [result, setResult] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const eventID = location.state?.eventID || "No Event ID";
  const brideName = location.state?.brideName || "Bride";
  const groomName = location.state?.groomName || "Groom";
  const hostName = location.state?.hostName || "Host Name";
  const eventDate = location.state?.eventDate || Date();
  const E_location = location.state?.location || "Venue";
  const address = location.state?.address || "Address";
  const contact = location.state?.phoneNumbers || "Contact info";

  const onSubmit = async (e) => {
        e.preventDefault();
        setResult("Uploading Guests...");
        try {
            const formData = new FormData(e.target);
            formData.set("event_id", eventID); 

            const response = await axios.post(
                "http://localhost/php-crud-rest-api-main/upload-guests.php",
                formData,
            );

      if (response.status === 200) {
        navigate("/event-card", 
          { state: { eventID, brideName, groomName, 
            hostName, eventDate, E_location, address, contact } });
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
