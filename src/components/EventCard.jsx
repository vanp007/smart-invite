
import React from "react";
import '../Styles/eventcard.css';

const EventCard = ({ event }) => {
    return (
        <div className="container-fluid d-flex align-items-center justify-content-center p-5">
            <div className="cardii">
                <div className="small-text">
                    MR. AND MRS. RICHARD S. KEATING <br />
                    JOYFULLY REQUEST YOUR PRESENCE <br />
                    AT THE WEDDING OF
                </div>

                <div className="name">SASHA KEATING</div>
                <div className="small-text">AND</div>
                <div className="name">GRAHAM SULLIVAN</div>

                <div className="details">
                    SATURDAY, THE SEVENTEENTH OF AUGUST <br />
                    TWO THOUSAND TWENTY-TWO <br />
                    SIX O’CLOCK IN THE EVENING
                </div>

                <div className="venue">
                    THE HUTTON HOTEL <br />
                    <span className="city">Chicago, Illinois</span>
                </div>

                <div className="italic">reception to follow</div>
            </div>
        </div>

    );
};

export default EventCard;
