import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../../src/assets/hero3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faIdCard,
  faPaperPlane,
  faHandHoldingDollar,
  faPhone,
  faQrcode,
  faBullhorn,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";


import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


const Home = () => {
  const services = [
    {
      icon: faIdCard,
      title: "Tunatengeneza kadi",
      description:
        "Tuna design na kutengeneza kadi zilizo na viwango vya juu kabisa na vyenye ubora wa kimataifa.",
      image: "../../src/assets/cards.jpg",
    },
    {
      icon: faPaperPlane,
      title: "Tunasambaza kadi",
      description:
        "Tuna wasambazia ndugu jamaa na marafiki (waalikwa) kadi kidigitali kwa njia ya WhatsApp na SMS.",
      image: "../../src/assets/rings.jpg",
    },
    {
      icon: faHandHoldingDollar,
      title: "Kukumbusha michango",
      description:
        "Tunakusaidia kuwasiliana na ndugu jamaa na marafiki kutoa michango kwa wakati kupitia ujumbe wa WhatsApp na SMS.",
      image: "../../src/assets/money.jpg",
    },
    {
      icon: faPhone,
      title: "Tunapiga simu",
      description:
        "Tunapiga simu kwa waalikwa kuwapa taarifa muhimu na updates za sherehe.",
      image: "../../src/assets/call.jpg",
    },
    {
      icon: faQrcode,
      title: "Tunascan kadi",
      description:
        "Tunakusaidia kupokea wageni siku ya tukio kwa kuscan kadi zao za kidigitali.",
      image: "../../src/assets/scan.jpg",
    },
    {
      icon: faBullhorn,
      title: "Tunatoa taarifa",
      description:
        "Tunakuwezesha kufikisha taarifa za dharura kwa wageni wako kwa uharaka zaidi.",
      image: "../../src/assets/kumbi.jpg",
    },
  ];


  return (
    <div>


      <div
        className="container-fluid flex-column justify-content-center text-center px-0 text-white"
        style={{
          height: "110vh",
          background: `url(${Hero}) center/cover no-repeat`,
          clipPath: "ellipse(100% 85% at 50% 0%)",
        }}
      >

        <nav className="navbar navbar-expand-lg navbar-light shadow-sm py-4">
          <div className="container justify-content-center">
            <ul className="navbar-nav d-flex flex-row gap-3">
              <li className="nav-item">
                <a className="nav-link active px-4 py-2 rounded-pill fw-semibold text-white" href="#home" aria-current="page">Nyumbani</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4 py-2 rounded-pill fw-semibold text-white" href="#about">Kuhusu sisi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4 py-2 rounded-pill fw-semibold text-white" href="#services">Huduma zetu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4 py-2 rounded-pill fw-semibold text-white" href="#contact">Mawasiliano</a>
              </li>
            </ul>
          </div>
        </nav>


        <p
          className="display-4 fw-bold p-5"
          style={{
            fontFamily: "Great Vibes, cursive",
            color: "var(--whitey)",
          }}
        >
          Smart Invites
        </p>

        <div className="container p-5">
          <h1 className="fw-bold display-5 mb-3">
            Fanikisha siku yako ya kipekee pamoja nasi
          </h1>
          <p className="lead mb-4">
            Tengeneza na wasilisha mialiko ya kidigitali kwa wageni waalikwa kwa
            viwango vya juu.
          </p>
          <a
            href="/create-event"
            className="btn btn-light text-primary fw-bold rounded-pill px-4 py-2"
          >
            Get Started
          </a>
        </div>
      </div>


      <div className="container py-5">
        <h2 className="text-center fw-bold py-3 mb-5">Huduma Zetu</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card text-white border-0 shadow-lg overflow-hidden rounded-4 service-card">
                <img
                  src={service.image}
                  className="card-img"
                  alt={service.title}
                  style={{ objectFit: "cover", height: "300px" }}
                />

                <div className="card-img-overlay d-flex flex-column justify-content-end p-4 bg-dark bg-opacity-50">
                  <div
                    className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <FontAwesomeIcon icon={service.icon} style={{ fontSize: "1.8rem" }} />
                  </div>
                  <h5 className="card-title fw-bold text-warning">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                  <a
                    href="#"
                    className="fw-semibold text-primary text-decoration-none mt-2"
                  >
                    Explore More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <footer className="bg-light text-dark pt-5 pb-4">
        <div className="container">
          <div className="row">

            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase mb-4">Stay with us</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-dark">
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </a>
                <a href="#" className="text-dark">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="#" className="text-dark">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>
            </div>


            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase mb-4">Navigation</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark text-decoration-none">Home</a></li>
                <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
                <li><a href="#" className="text-dark text-decoration-none">Services</a></li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase mb-4">Contacts</h5>
              <p><FontAwesomeIcon icon={faPhone} className="me-2" /> +255 625 391 553</p>
              <p><FontAwesomeIcon icon={faPaperPlane} className="me-2" /> info@smartInvites.com</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> Our location</p>
            </div>

          </div>
        </div>
      </footer>


    </div>
  );
};

export default Home;
