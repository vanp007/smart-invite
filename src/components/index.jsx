import React from 'react'

const index = () => {
    const features = [
        { link: '/', title: 'Blog' },
        { link: '/create-event', title: 'Create Event' },
        { link: '/upload-guests', title: 'Upload Guest' },
        { link: '/upload-card', title: 'Upload Card' },
        { link: '/preview-card/:eventID', title: 'Preview Card' },
        { link: '/view-guests', title: 'View Guests' },
        { link: '/view-events', title: 'View Events' },
        { link: '/manual-checkin', title: 'Card Checkin' },
        { link: '/logout', title: 'logout' },
    ]
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-dark fixed-top"
                style={{ background: 'var(--primary-gradient)' }}
            >
                <div className="container">
                    <a className="navbar-brand fw-bold">welcome, SMART INVITES</a>
                </div>
            </nav>


            <div className='container py-5 d-flex '>
                <ul className='row mt-5 justify-content-center align-items-center' style={{ gap: '30px' }}>
                    {features.map((feature, index) => (
                        <li className='col-sm-3 col-md-6 col-lg-4 card d-flex shadow py-5 justify-content-center align-items-center'
                            style={{ width: '300px' }}
                            key={index}>
                            <a className='text-dark text-decoration-none' href={feature.link}>{feature.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <footer className='container-fluid d-flex bg-light text-dark pt-3 pb-2 justify-content-center align-items-center'>
                <p>Smart Invites || All rights reserved </p>
            </footer>
        </div>
    )
}

export default index
