import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faEye, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const ViewEvents = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://invite.komki.co.tz/smart-invite-api/view-events.php")
            .then((res) => {
                // Extract the array from the JSON object
                const apiData = Array.isArray(res.data.data) ? res.data.data : [];
                setData(apiData);
                console.log(apiData);
            })
            .catch((err) => {
                console.error(err)
                setData([]);
            });
    }, []);

    // 1. Filter data by search term
    const filteredData = data.filter(
        (row) =>
            row.host_name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 2. Calculate pagination
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

    // 3. Handle page changes
    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div>
            <div className="header">
                <h1>View Events</h1>
            </div>
            <div className="justify-content-center d-flex flex-column align-items-center p-3">
                <input className="form-control w-25"
                    type="text"
                    placeholder="Search by name or email"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1); // Reset to first page on search
                    }}
                />
                <table className="table table-striped table-bordered w-auto p-3 mt-3">
                    <thead>
                        <tr style={{ backgroundColor: "#f0f0f0" }}>
                            <th>eventID</th>
                            <th>Host Name</th>
                            <th>Phone Numbers</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row) => (
                                <tr key={row.id}>
                                    <td>
                                        {row.event_id}
                                    </td>
                                    <td>
                                        {row.host_name}
                                    </td>
                                    <td >
                                        {row.host_name}
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-primary btn-sm" onClick={() => navigate("/upload-guests", { state: { eventID: row.event_id } })}>
                                            <FontAwesomeIcon icon={faUpload} /> Upload Guests
                                        </button>
                                        <button className="btn btn-outline-success btn-sm mx-1" onClick={() => navigate("/view-guests", { state: { eventID: row.event_id } })}>
                                            <FontAwesomeIcon icon={faEye} /> View Guests
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">
                                    No results found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {/* Pagination Controls */}
                <div>
                    <button className="btn btn-primary" onClick={() => handlePageChange(currentPage - 1)}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button className="btn btn-primary"
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            style={{
                                fontWeight: currentPage === i + 1 ? "bold" : "normal",
                                margin: "0 5px",
                            }}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button className="btn btn-primary" onClick={() => handlePageChange(currentPage + 1)}>
                        <FontAwesomeIcon icon={faAngleRight} />
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewEvents;