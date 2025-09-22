
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../Styles/eventcard.css';
import QRCode from "react-qr-code";
import Card from "../assets/wedding1.jpg"

const EventCard = ({ showHeader = true, guestName: guestNameProp }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const eventID = location.state?.eventID || "No Event ID";
    const brideName = location.state?.brideName || "Bride";
    const groomName = location.state?.groomName || "Groom";
    const hostName = location.state?.hostName || "Host Name";
    const eventDate = location.state?.eventDate || Date();
    const venue = location.state?.venue || "Venue";
    const address = location.state?.address || "Address";
    const contact = location.state?.contact || "Contact info";
    const guestName = guestNameProp || location.state?.guestName || "Guest Name";

    return (
        <div>
            {showHeader && (
                <header className="header">
                    <h1>Event Card</h1>
                </header>
            )}

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
                        <div className="name" style={{marginBottom:80}}>{hostName}</div>
                        wanayo furaha kukualika/kuwaalika<br />
                        {guestName} <br />
                        kwenye harusi ya vijana wao wapendwa
                    </div>

                    <div className="name italic">{groomName} & {brideName}</div>

                    <div className="details">
                        itayofanyika<br />
                        {eventDate} <br />
                        <div className="small-text">kuanzia SAA 12:00 JIONI </div><br />
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

                    <div className="flex items-center justify-center min-h-screen  mt-4">
                        <QRCode value={`Dear ${guestName} welcome to this wonderful event...`} size={64} bgColor="#FFFFFF" fgColor="#000000" />
                    </div>

                </div>
                <button className='btn btn-primary eventcard-btn'
                    onClick={() => navigate("/generate-card",
                        { state: { eventID, brideName, groomName, hostName, eventDate, venue, address, contact } })}
                >Next</button>
            </div>



        </div>
    );
};

export default EventCard;
