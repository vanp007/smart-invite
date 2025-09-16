import { Link } from "react-router-dom";

const Admin = () => {




  return (
    <div className="admin-container">
      <header className="header">
        <div className="logo">
          <span className="logo-icon"></span>
          <h1>Smart Invite</h1>
        </div>
        <nav className="nav-links">
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Logout</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Secure Online Wedding Invitation System</h1>
        <p>A modern, transparent, and accessible platform for conducting weddings with integrity and efficiency.</p>
      </section>

      <div className="feature-grid">
        <Link to="/create-event" className="feature-card">
          <div className="card-header">Create Event</div>
        </Link>

        <Link to="/view-events" className="feature-card">
          <div className="card-header">View Events</div>
        </Link>


        <Link to="/view-guest" className="feature-card">
          <div className="card-header">View Guest</div>
        </Link>

        <Link to="/manual-checkin" className="feature-card">
          <div className="card-header">Manual Card Check-in</div>
        </Link>

        <Link to="/event-card" className="feature-card">
          <div className="card-header">Generate event Card</div>
        </Link>
      </div>

      <footer className="footer" id="contact">
        <p>© 2025 Smart Invite. All rights reserved.</p>
        <p>Contact: 2025elections@gmail.com | Phone: (255) 0625391553</p>
        <p>Address: Mbeya, Tanzania</p>
      </footer>
    </div>
  )
}

export default Admin
