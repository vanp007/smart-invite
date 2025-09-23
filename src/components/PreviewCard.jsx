import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom';
import '../Styles/eventcard.css';
import QRCode from "react-qr-code";
import Card from "../assets/wedding1.jpg";

const PreviewCard = () => {
    const { eventID } = useParams();
    const [searchParams] = useSearchParams();
    const guestID = searchParams.get("guestID");

    const [event, setEvent] = useState(null);
    const [guest, setGuest] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch event
                const eventRes = await axios.get(`https://invite.komki.co.tz/smart-invite-api/view-events.php?eventID=${eventID}`);
                const eventData = Array.isArray(eventRes.data.data) && eventRes.data.data.length > 0 
                    ? eventRes.data.data[0] 
                    : null;
                setEvent(eventData);

                // Fetch guest if guestID exists
                if (guestID) {
                    const guestRes = await axios.get(`https://invite.komki.co.tz/smart-invite-api/view-guests.php?eventID=${eventID}`);
                    const guestData = Array.isArray(guestRes.data.data) && guestRes.data.data.length > 0 
                        ? guestRes.data.data[0] 
                        : null;
                    setGuest(guestData);
                }

                setLoading(false);
            } catch (err) {
                console.error("Error fetching data:", err);
                setLoading(false);
            }
        };

        fetchData();
    }, [eventID, guestID]);

    if (loading) return <p>Loading...</p>;
    if (!event) return <p>Event not found.</p>;

    const hostName = event.host_name || '';
    const guestName = guest?.guest_name || 'Guest Name';
    const groomName = event.groom || '';
    const brideName = event.bride || '';
    const eventDate = event.event_date || '';
    const venue = event.location || '';
    const address = event.address || '';
    const contact = event.phones || '';

    return (
        <div>
            <header className="header">
                <h1>Preview Card</h1>
            </header>

            <div className="eventcard-wrapper">
                <div
                    className="cardii"
                    style={{
                        backgroundImage: `url(${Card})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="small-text" >
                        Familia ya Bw & Bibi
                        <div className="name" style={{ marginBottom: 80 }}>{hostName}</div>
                        wanayo furaha kukualika/kuwaalika<br />
                        {guestName} <br />
                        kwenye harusi ya vijana wao wapendwa
                    </div>

                    <div className="name italic">{groomName} & {brideName}</div>

                    <div className="details">
                        itayofanyika<br />
                        {eventDate} <br />
                        <div className="small-text">kuanzia SAA 12:00 JIONI </div>
                        katika ukumbi wa
                    </div>

                    <div className="venue italic">
                        {venue} <br />
                        <span className="city">{address}</span>
                    </div>

                    <div className="contact-field italic">
                        Kwa mawasiliano zaidi <br />
                        <strong>Contact:</strong> {contact}
                    </div>

                    <div className="flex items-center justify-center min-h-screen mt-4">
                        <QRCode value={`Dear ${guestName || 'Guest'}, welcome to this wonderful event...`} size={64} bgColor="#FFFFFF" fgColor="#000000" />
                    </div>
                </div>

                <button className='btn btn-primary eventcard-btn'>Next</button>
            </div>
        </div>
    );
};

export default PreviewCard;
