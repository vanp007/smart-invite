import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Admin from "./components/Admin";
import CreateEvent from "./components/CreateEvent";
import ViewEvents from "./components/ViewEvents";
import ViewGuests from "./components/ViewGuests"
import CardCheckin from "./components/CardCheckin";
import UploadGuests from "./components/UploadGuests";
import EventCard from "./components/EventCard";
import GenerateCard from "./components/GenerateCard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/manual-checkin" element={<CardCheckin />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/view-events" element={<ViewEvents />} />
        <Route path="/view-guests" element={<ViewGuests />} />
        <Route path="/upload-guests" element={<UploadGuests />} />
        <Route path="/event-card" element={<EventCard />} />
        <Route path="/generate-card" element={<GenerateCard />} />
      </Routes>
    </Router>
  );
};

export default App;