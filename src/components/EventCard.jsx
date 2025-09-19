
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../Styles/eventcard.css';

const EventCard = ({ showHeader = true, guestName: guestNameProp }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const eventID = location.state?.eventID || "No Event ID";
    const brideName = location.state?.brideName || "Bride";
    const groomName = location.state?.groomName || "Groom";
    const hostName = location.state?.hostName || "Host Name";
    const eventDate = location.state?.eventDate || Date();
    const E_location = location.state?.location || "Venue";
    const address = location.state?.address || "Address";
    const contact = location.state?.contact || "Contact info";
    const event = location.state?.event || "Event Name";
    const guestName = guestNameProp || location.state?.guestName || "Guest Name";

    return (
        <div>
            {showHeader && (
                <header className="header">
                    <h1>Event Card</h1>
                </header>
            )}

            <div className="eventcard-wrapper">
                <div className="cardii">
                    <div className="small-text">
                        Familia ya Bw & Bibi 
                        <div className="name">{hostName}</div>                   
                        wanayo furaha kukualika/kuwaalika<br />
                         {guestName} <br/>
                        kwenye harusi ya vijana wao wapendwa
                    </div>

                    <div className="name italic">{groomName}</div>
                    <div className="small-text">AND</div>
                    <div className="name italic">{brideName}</div>

                    <div className="details">
                        itayofanyika<br />
                         {eventDate} <br />
                    <div className="small-text">kuanzia SAA 12:00 JIONI </div><br />
                        katika ukumbi wa 
                    </div>

                    <div className="venue italic">
                       {E_location} <br />
                        <span className="city">{address}</span>
                    </div>

                    <div className="contact-field italic">
                        Kwa mawasiliano zaidi <br/>
                        <strong>Contact:</strong> {contact}
                    </div>

                </div>
                <button className='btn btn-primary eventcard-btn' 
                    onClick={() => navigate("/generate-card",
                         { state: { eventID, brideName, groomName, hostName, eventDate, E_location, address, contact } })}
                >Next</button>
            </div>

        </div>
    );
};

export default EventCard;
