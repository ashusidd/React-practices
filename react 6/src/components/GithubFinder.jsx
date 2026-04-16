import React, { useState, useEffect } from 'react';

function GithubFinder() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // --- 1. The Auto-Search Logic (useEffect) ---
    useEffect(() => {
        if (username.length > 2) {
            // Debounce: Wait 500ms after typing stops before calling API
            const timeoutId = setTimeout(() => {
                fetchUser();
            }, 500);
            return () => clearTimeout(timeoutId);
        } else {
            // Reset if input is cleared
            setUserData(null);
            setError(null);
        }
    }, [username]);

    // --- 2. The API Fetch Function ---
    const fetchUser = () => {
        setLoading(true);
        setError(null);

        fetch(`https://api.github.com/users/${username}`)
            .then((res) => {
                if (!res.ok) throw new Error("User not found");
                return res.json();
            })
            .then((data) => {
                setUserData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    };

    return (
        <div style={pageStyle}>
            <div style={searchBoxStyle}>
                <h1>GitHub Finder 🔍</h1>
                <p>Type a username to discover their profile</p>

                <input
                    type="text"
                    placeholder="Enter GitHub username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={inputStyle}
                />
            </div>

            <hr style={{ margin: '30px 0', opacity: '0.2' }} />

            {/* --- 3. Conditional Rendering Section --- */}
            {loading && <p>Searching GitHub... ⌛</p>}
            {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error} ❌</p>}

            {userData && (
                <div style={cardStyle}>
                    <img
                        src={userData.avatar_url}
                        alt="profile"
                        style={avatarStyle}
                    />
                    <h2 style={{ margin: '10px 0' }}>{userData.name || username}</h2>
                    <p style={{ color: '#666' }}>{userData.bio || "This user has no bio."}</p>

                    <div style={statsStyle}>
                        <div>
                            <strong>{userData.followers}</strong>
                            <p>Followers</p>
                        </div>
                        <div>
                            <strong>{userData.public_repos}</strong>
                            <p>Repos</p>
                        </div>
                    </div>

                    <a href={userData.html_url} target="_blank" rel="noreferrer" style={linkButtonStyle}>
                        View GitHub Profile
                    </a>
                </div>
            )}
        </div>
    );
}

// --- 4. Styles (UI/UX) ---

const pageStyle = {
    padding: '40px 20px',
    textAlign: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5' // Light grey background
};

const searchBoxStyle = {
    marginBottom: '20px'
};

const inputStyle = {
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '25px',
    border: '1px solid #ccc',
    width: '100%',
    maxWidth: '300px',
    outline: 'none',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.05)'
};

const cardStyle = {
    backgroundColor: 'white',
    border: 'none',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0px 10px 25px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    margin: '0 auto',
    animation: 'fadeIn 0.5s ease'
};

const avatarStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    border: '4px solid #f0f2f5'
};

const statsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '20px 0',
    borderTop: '1px solid #eee',
    paddingTop: '15px'
};

const linkButtonStyle = {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#24292e', // GitHub Dark Theme Color
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold'
};

export default GithubFinder;