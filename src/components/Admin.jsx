import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../../src/assets/hero1.jpg";

const Admin = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    { icon: "🎨", title: "Personalization", description: "Select a design available in our sysytem, then update font, color and photos,layout and more to make it your own.." },
    { icon: "📋", title: "Importing Guest List", description: "You can easly import gueasts via a csv file directly into our system..." },
    { icon: "💬", title: "Messaging", description: "Stay connected with guests through ease-to-use messaging that is perfect for last minute updates and check-ins.." },
    { icon: "📊", title: "Track RSVPs", description: "View yes/no responses in real-time ,RSVP collection has never been made easy..." },
    { icon: "📅", title: "Daily Updates", description: "Opt to receive whatsapp messages with updates that are most important to you, from RSVP notifications..." },
    { icon: "⏰", title: "Auto-Reminders", description: "Schedule and send reminders to your guests-list to alert them of upcoming RSVP deadlines or event date..." }
  ];

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${
          scrolled ? "scrolled-nav" : "bg-transparent shadow-none"
        }`}
      >
        <div className="container p-2">
          <a className="navbar-brand fw-bold" href="#">Smart Invite</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Registry</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="view-events">View Events</a></li>
                  <li><a className="dropdown-item" href="view-guests">View Guests</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
              <li className="nav-item"><a className="btn btn-light text-primary fw-bold ms-3 rounded-pill" href="/create-event">Get Started</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="d-flex align-items-center text-center text-white" 
        style={{ minHeight: "100vh", background: `linear-gradient(rgba(6, 6, 11, 0.5),rgba(50, 31, 174, 0.5)),url('${Hero}')`, backgroundSize: 'cover', backgroundPosition:'center'}}>
        <div className="container">
          <h1 className="fw-bold display-4">Create Beautiful Wedding Invitations with us..</h1>
          <p className="lead mb-4">Deliver elegant online invitations directly to all your friends and family with Smart Invite...</p>
          <a href="/create-event" className="btn btn-light text-primary fw-bold rounded-pill px-4 py-2">Get Started</a>
        </div>
      </section>

      <section id="features" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-primary mb-5">Powerful Features to Customize Your Invitations</h2>
          <div className="row g-4">
            {features.map((f, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="card h-100 shadow-sm border-0 rounded-4 p-3">
                  <div className="fs-1 mb-3">{f.icon}</div>
                  <h5 className="fw-bold text-primary">{f.title}</h5>
                  <p className="text-muted p-3 mx-2">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-white text-center py-3" style={{ background: "linear-gradient(135deg, #1a237e, #3949ab)" }}>
        <p className="mb-0">© 2025 WeddingInvite System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Admin;
