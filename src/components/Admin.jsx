
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../../src/assets/hero3.png";

const features = [
  { icon: "🎨", title: "Personalization", description: "Select a design available in our system, then update font, color, photos, layout and more to make it your own." },
  { icon: "📋", title: "Importing Guest List", description: "You can easily import guests via a CSV file directly into our system." },
  { icon: "💬", title: "Messaging", description: "Stay connected with guests through easy-to-use messaging that is perfect for last minute updates and check-ins." },
  { icon: "📊", title: "Track RSVPs", description: "View yes/no responses in real-time. RSVP collection has never been easier." },
  { icon: "📅", title: "Daily Updates", description: "Opt to receive WhatsApp messages with updates that are most important to you, from RSVP notifications." },
  { icon: "⏰", title: "Auto-Reminders", description: "Schedule and send reminders to your guest list to alert them of upcoming RSVP deadlines or event date." }
];

function Admin() {
  return (
    <div className="my-0">
      <div className="row d-flex align-items-center text-center text-white"
        style={{minHeight: "100vh", background: `url('${Hero}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <div>
          <p className="display-4 fw-bold mb-1" style={{ color:'var(--whitey)', fontFamily: "Great Vibes, cursive" }}>Smart Invites</p>
        </div>

        <nav className="navbar navbar-expand-lg justify-content-center">
          <ul className="navbar-nav mx-auto align-items-center" style={{gap: '0.5rem'}}>
            <li className="nav-item">
              <a className="nav-link active display-3 text-white fw-bold text-center" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link display-3 text-white fw-bold text-center " href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link display-3 text-white fw-bold text-center " href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="container mt-2">
          <h1 className="fw-bold display-4 mb-2">Create Beautiful Wedding Invitations with us..</h1>
          <p className="lead mb-2">Deliver elegant online invitations directly to all your friends and family with Smart Invite...</p>
          <a href="/create-event" className="btn btn-light text-primary fw-bold rounded-pill px-4 py-2"
            style={{ background: "var(--whitey)", border: "none" }}>Get Started</a>
        </div>
      </div>

      <div id="features" className="py-5" style={{ background: "var(--whitey)" }}>
        <div className="container text-center">
          <h2 className="fw-bold text-green mb-5">Powerful Features to Customize Your Invitations</h2>
          <div className="row g-4">
            {features.map((f, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div>
                  <div className="fs-1 mb-3">{f.icon}</div>
                  <h5 className="fw-bold text-green">{f.title}</h5>
                  <p className="text-muted p-3 mx-2">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="text-white text-center py-3" style={{ background: "var(--dark-color)" }}>
        <p className="mb-0">© 2025 WeddingInvite System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Admin;
