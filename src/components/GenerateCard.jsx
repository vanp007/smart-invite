import React from 'react';
import html2canvas from 'html2canvas';
import EventCard from './EventCard';
import { Download } from 'lucide-react';

const GenerateCard = () => {
    const handleDownload = () => {
        const card = document.querySelector('.cardi');
        if (!card) return;
        html2canvas(card).then((canvas) => {
            const image = canvas.toDataURL('image/png');
            DownloadImage(image);
        });
    };

    const DownloadImage = (image) => {
        const a = document.createElement('a');
        a.href = image;
        a.download = 'invite.png';
        a.click();
    };

    return (
        <div>
            <header className='header'>
                <h1>Generate Card</h1>
            </header>

            <div className="cardi">
                <EventCard showHeader={false}
                // event={eventId}
                />
            </div>
            <button onClick={handleDownload}>Generate Invite</button>
        </div>
    );
};

export default GenerateCard;
