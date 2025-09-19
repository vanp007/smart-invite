import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import EventCard from "./EventCard"; 

const GenerateCard = () => {
  const location = useLocation();
  const state = location.state || {};

  const eventId = state.eventID ?? null;
  const brideName = state.brideName ?? "";
  const groomName = state.groomName ?? "";
  const hostName = state.hostName ?? "";
  const eventDate = state.eventDate ?? "";
  const E_location = state.E_location ?? "";
  const address = state.address ?? "";
  const contact = state.contact ?? "";

  const [sending, setSending] = useState(false);
  const [event, setEvent] = useState(null);
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch event + guests
  useEffect(() => {
  if (!eventId) return;
    const fetchData = async () => {
      try {
        const eventRes = await axios.get(
          `https://invite.komki.co.tz/smart-invite-api/view-events.php?eventId=${eventId}`
        );
        const guestRes = await axios.get(
          `https://invite.komki.co.tz/smart-invite-api/view-guests.php?eventId=${eventId}`
        );
        setEvent(eventRes.data);
        setGuests(guestRes.data);
      } catch (err) {
        setError("Error fetching event or guests. Please try again.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [eventId]);

  // Send Invite Function
  const sendInvite = async (guest) => {
    setSending(true);
    setError("");
    const card = document.getElementById(`card-${guest.id}`);
    if (!card) {
      setError("Card element not found!");
      setSending(false);
      return;
    }
    try {
      const canvas = await html2canvas(card);
      const imageBase64 = canvas.toDataURL("image/png");

      await axios.post(
        "https://invite.komki.co.tz/smart-invite-api/send-invite.php",
        {
          phone: guest.phone,
          image: imageBase64,
          eventId: eventId,
        }
      );

      alert(`Invite sent to ${guest.guest_name ?? guest.name ?? "Guest"}`);
    } catch (err) {
      setError("Failed to send invite.");
      console.error(err);
    }
    setSending(false);
  };

  // Conditional rendering
  if (!eventId) return <p>Invalid access. No event selected.</p>;
  if (loading) return <p>Loading event or guests...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!event) return <p>No event found.</p>;
  if (guests.length === 0) return <p>No guests found.</p>;

  const guestsArray = Array.isArray(guests) ? guests : [];

  return (
    <div>
      <header className="header">
        <h1>Send Invites</h1>
      </header>
      {error && (
        <div style={{ color: 'red', marginBottom: '16px' }}>{error}</div>
      )}
      <div>
        {guestsArray.map((guest) => (
          <div key={guest.id} style={{ marginBottom: "30px" }}>
            {/* Unique card per guest */}
            <div id={`card-${guest.id}`}>
              <EventCard
                showHeader={false}
                guestName={guest.guest_name ?? guest.name ?? "Guest"}
                eventID={eventId}
                brideName={brideName}
                groomName={groomName}
                hostName={hostName}
                eventDate={eventDate}
                E_location={E_location}
                address={address}
                contact={contact}
              />
            </div>

            {/* Send Button */}
            <button disabled={sending} onClick={() => sendInvite(guest)}>
              {sending
                ? "Sending..."
                : `Send to ${guest.guest_name ?? guest.name ?? "Guest"}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateCard;
