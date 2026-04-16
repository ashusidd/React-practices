import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={titleStyle}>Welcome to DevPortal 🚀</h1>
                <p style={subtitleStyle}>
                    Connect with millions of developers worldwide. Discover profiles,
                    check repositories, and explore the GitHub community.
                </p>

                {/* Link is used here to navigate to the Finder page without a refresh */}
                <Link to="/finder">
                    <button style={buttonStyle}>
                        Launch GitHub Finder
                    </button>
                </Link>
            </div>
        </div>
    );
}

// --- Styles (CSS-in-JS) ---

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh', // Centers content vertically on the screen
    padding: '20px'
};

const cardStyle = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    textAlign: 'center'
};

const titleStyle = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px'
};

const subtitleStyle = {
    fontSize: '1.2rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '30px'
};

const buttonStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '15px 30px',
    fontSize: '1.1rem',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
};

export default Home;