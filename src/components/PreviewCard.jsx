import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import Card from '../assets/download.jpg';

const PreviewCard = () => {
  const location = useLocation();
  const { eventID: paramEventID } = useParams();
  const eventID = location.state?.eventID || paramEventID;

  const [event, setEvent] = useState(null);
  const [cardData, setCardData] = useState(null);
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('welcome to the event');

  useEffect(() => {
    const fetchData = async () => {
      if (!eventID) return;

      setLoading(true);
      try {
        // Fetch event details
        const eventRes = await axios.get(
          `https://invite.komki.co.tz/smart-invite-api/view-events-by-id.php`,
          { params: { eventID, _t: Date.now() } }
        );
        const eventData = eventRes.data?.data?.[0] || null;
        setEvent(eventData);

        // Fetch guest details for this event (optional)
        const guestRes = await axios.get(
          `https://invite.komki.co.tz/smart-invite-api/view-guests.php`,
          { params: { eventID, _t: Date.now() } }
        );
        const guestData = guestRes.data?.data?.[0] || null;
        setGuest(guestData);

        console.log("view-guest response:", guestRes.data);

        const cardPicRes = await axios.get(
          "https://invite.komki.co.tz/smart-invite-api/view-card.php",
          { params: { eventID, _t: Date.now() } } 
        );

        const cardData = cardPicRes.data?.data?.[0] || null;
        setCardData(cardData);

        console.log("view-card response:", cardData.image_path);

      } catch (err) {
        console.error('Error fetching card:', err?.message || err);
        if (err?.response) console.error('Response data:', err.response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [eventID]); 

  if (loading) return <p>Loading...</p>;
  if (!event) return <p>Event not found.</p>;


  const imageUrl = cardData ? `https://invite.komki.co.tz/smart-invite-api/${cardData.image_path}` : null;



  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ background: 'var(--primary-gradient)' }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold">Preview card</a>
        </div>
      </nav>

      <div
        style={{
          marginTop: 80,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 120px)',
          flexDirection: 'column',
          padding: '16px',
        }}
      >
        <div style={{ position: 'relative', width: '100%', maxWidth: 400, }}>
          <img
            src={imageUrl || Card}
            alt="card preview"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />

          <div style={{ position: 'absolute', left: 20, bottom: 30 }}>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text or URL"
              hidden
            />
            <QRCode className="bg-light p-1" value={text} size={80} />
          </div>
        </div>

        <button className="btn btn-primary eventcard-btn" style={{ marginTop: 16 }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PreviewCard;
