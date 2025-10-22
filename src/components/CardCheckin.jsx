import { Scanner } from '@yudiel/react-qr-scanner';
import React, { useState } from 'react';

const CardCheckin = () => {
  const [scanResult, setScanResult] = useState('');

  const handleScan = (result) => {
    if (result && Array.isArray(result) && result[0]?.rawValue) {
      setScanResult(result[0].rawValue);
      console.log('Scanned rawValue:', result[0].rawValue);
    } else {
      console.warn('Unexpected scan result:', result);
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ background: 'linear-gradient(135deg, #1a237e, #3949ab)' }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold">Card Checkin</a>
        </div>
      </nav>

      <div className="row justify-content-center" style={{ marginTop: 100 }}>
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card shadow-sm rounded-3">
            <div className="card-body">
              {/* Manual check-in form */}
              <form
                className="d-flex mb-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log('Manual check-in code:', scanResult);
                }}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Scanned code will appear here"
                  value={scanResult}
                  readOnly
                  aria-label="Scanned code"
                />
                <input
                  className="btn btn-outline-primary"
                  type="submit"
                  value="Check-in"
                />
              </form>

              {/* Instructions */}
              <p className="text-muted small">
                Point your rear camera at a QR code to scan automatically.
              </p>
              <Scanner
                constraints={{ facingMode: 'environment' }}
                onScan={handleScan}
                onError={(error) => {
                  console.error('Scanner Error:', error);
                }}
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCheckin;