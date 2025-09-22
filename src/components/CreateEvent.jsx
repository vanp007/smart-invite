import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/createevent.css';

const CreateEvent = () => {
	const [result, setResult] = useState();
	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();
		setResult("Creating event...");

		const eventID = "AEF" + Date.now();
		try {
			const formData = new FormData(e.target);
			const plainObject = Object.fromEntries(formData.entries());
			plainObject.eventID = eventID;
			const jsonString = JSON.stringify(plainObject);

			const response = await axios.post("https://invite.komki.co.tz/smart-invite-api/create-event.php", jsonString);

			if (response.status === 200) {
				navigate("/upload-guests",
					{
						state: {
							eventID, brideName: plainObject.brideName,
							groomName: plainObject.groomName, hostName: plainObject.hostName,
							eventDate: plainObject.eventDate, venue: plainObject.venue,
							address: plainObject.address, phoneNumbers: plainObject.phoneNumbers
						}
					});
			} else {
				setResult("Error creating event.");
			}
		} catch (error) {
			console.error(error);
			setResult("An error occurred while creating the event.");
		}

		e.target.reset();
	};

	return (
		<div>
			<div className="header">
				<h1>Create Event</h1>
			</div>

			
			<div className="create-event">

				<form onSubmit={onSubmit}>
					<div>
						<label htmlFor="hostName">Host Name:</label>
						<input type="text" id="hostName" name="hostName" required />
					</div>
					<div>
						<label htmlFor="address">Address:</label>
						<input type="text" id="address" name="address" required />
					</div>
					<div>
						<label htmlFor="brideName">Bride Name:</label>
						<input type="text" id="brideName" name="brideName" required />
					</div>
					<div>
						<label htmlFor="groomName">Groom Name:</label>
						<input type="text" id="groomName" name="groomName" required />
					</div>
					<div>
						<label htmlFor="eventDate">Event date:</label>
						<input type="date" id="eventDate" name="eventDate" required />
					</div>
					<div>
						<label htmlFor="venue">Venue:</label>
						<input type="text" id="venue" name="venue" required />
					</div>
					<div>
						<label htmlFor="color1">Color 1:</label>
						<input type="text" id="color1" name="color1" required />
					</div>
					<div>
						<label htmlFor="color2">Color 2:</label>
						<input type="text" id="color2" name="color2" required />
					</div>
					<div>
						<label htmlFor="color3">Color 3:</label>
						<input type="text" id="color3" name="color3" required />
					</div>
					<label htmlFor="phoneNumbers" className="full-width">Phone Numbers (comma separated):</label>
					<input type="text" id="phoneNumbers" className="full-width" name="phoneNumbers" required />
					<button type="submit" className='btn btn-primary full-width'>Create Event</button>
				</form>
				<p>{result}</p>
			</div>
		</div>
	);
}

export default CreateEvent;