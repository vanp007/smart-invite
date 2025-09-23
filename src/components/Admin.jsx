import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin-container">
      <header className="header" style={{ flexDirection: "row" }}>
        <div className="logo">
          <span className="logo-icon"></span>
          <h1>Smart Invite</h1>
        </div>
        <nav className="navbar navbar-expand-sm">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseableNav"
          >
            <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
          </button>
          <div className="collapse navbar-collapse nav-links" id="collapseableNav">
            <div className="navbar-nav">
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Logout</a>
            </div>
          </div>
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

        <Link to="/manual-checkin" className="feature-card">
          <div className="card-header">Manual Card Check-in</div>
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
