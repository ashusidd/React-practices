import { useState } from 'react';

function Dashboard() {
    const [activeTab, setActiveTab] = useState("home");
    // 1. Ek nayi state user ke naam ke liye
    const [userName, setUserName] = useState("Ashraf Ali");

    return (
        <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial' }}>
            {/* Sidebar Code (Same as before) */}
            <div style={{ width: '200px', background: '#333', color: 'white', padding: '20px' }}>
                <h2>Menu</h2>
                <button onClick={() => setActiveTab("home")} style={{ width: '100%', padding: '10px', marginBottom: '10px', backgroundColor: activeTab === "home" ? "blue" : "#555", color: 'white', border: 'none', cursor: 'pointer' }}>Home</button>
                <button onClick={() => setActiveTab("profile")} style={{ width: '100%', padding: '10px', marginBottom: '10px', backgroundColor: activeTab === "profile" ? "blue" : "#555", color: 'white', border: 'none', cursor: 'pointer' }}>Profile</button>
                <button onClick={() => setActiveTab("setting")} style={{ width: '100%', padding: '10px', backgroundColor: activeTab === "setting" ? "blue" : "#555", color: 'white', border: 'none', cursor: 'pointer' }}>Setting</button>
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, padding: '40px' }}>
                {activeTab === "home" && (
                    <div>
                        <h1>🏠 Welcome Home, {userName}!</h1>
                    </div>
                )}

                {activeTab === "profile" && (
                    <div>
                        <h1>👤 User Profile</h1>
                        {/* 2. Yahan wahi naam dikhega jo state mein hai */}
                        <p>Name: <b>{userName}</b></p>
                        <p>Skill: React Developer</p>
                    </div>
                )}

                {activeTab === "setting" && (
                    <div>
                        <h1>⚙️ Settings</h1>
                        <p>Change your display name:</p>
                        {/* 3. Input handling logic */}
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
                        />
                        <p style={{ marginTop: '10px', color: 'grey' }}>Type something to see the magic!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;