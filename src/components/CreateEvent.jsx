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
						state: { eventID }
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
			<nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: 'var(--primary-gradient)' }}>
				<div className="container">
					<a className="navbar-brand fw-bold" >Create Event</a>
				</div>
			</nav>


			<div className="create-event" style={{marginTop:100}}>

				<form onSubmit={onSubmit}>
					<div>
						<label htmlFor="hostName">Host Name:</label>
						<input type="text" id="hostName" name="hostName" required />
					</div>

//mama1

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