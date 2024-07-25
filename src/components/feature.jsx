import React from 'react';
import './feature.css';

const Features = () => {
    return (
        <section className="features">
            <div className="feature">
                <h2>Fleksibilitas Belajar Tanpa Batas</h2>
                <p>Platform yang dapat diakses kapan saja...</p>
            </div>
            <div className="feature">
                <h2>Efisiensi Pembelajaran dengan Materi yang Relevan</h2>
                <p>Belajar sesuai dengan kebutuhan...</p>
            </div>
            <div className="feature">
                <h2>Konektivitas dengan Instruktur</h2>
                <p>Memungkinkan Anda berinteraksi dengan instruktur...</p>
            </div>
            <button className="join-button">JOIN US</button>
        </section>
    );
};

export default Features;
