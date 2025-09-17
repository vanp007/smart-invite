
import React from "react";
import { useLocation } from "react-router-dom";
import '../Styles/eventcard.css';

const EventCard = ({ showHeader = true }) => {
    const location = useLocation();
   
    const eventID = location.state?.eventID || "No Event ID";
    const brideName = location.state?.brideName || "Bride";
    const groomName = location.state?.groomName || "Groom";
    const hostName = location.state?.hostName || "Host Name";
    const eventDate = location.state?.eventDate || Date();
    const E_location = location.state?.location || "Venue";
    const address = location.state?.address || "Address";
    const contact = location.state?.contact || "Contact info";
    const event = location.state?.event || "Event Name";

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
                        Familia ya Bi & Bwn 
                        <div className="name">{hostName}</div>                   
                        inayo furaha kubwa kuwaalika katika<br />
                        HARUSI ya vijana wao..
                    </div>

                    <div className="name">{groomName}</div>
                    <div className="small-text">AND</div>
                    <div className="name">{brideName}</div>

                    <div className="details">
                        itayofanyika<br />
                         {eventDate} <br />
                        SAA 12:00 JIONI <br />
                        katika ukumbi wa 
                    </div>

                    <div className="venue">
                       {E_location} <br />
                        <span className="city">{address}</span>
                    </div>

                    <div className="contact-field">
                        <strong>Contact:</strong> {contact}
                    </div>

                    <div className="italic">KARIBUNII...</div>
                </div>
                <button className='btn btn-primary eventcard-btn' >Send Invitations</button>
            </div>

        </div>
    );
};

export default EventCard;
