import React, { useState } from 'react'

function App() {
  const [users, SetUsers] = useState([]);

  const [nameInput, SetNameInput] = useState("");
  const [roleInput, SetRoleInput] = useState("");

  // Editing ke liye states
  const [editId, setEditId] = useState(null);
  const [tempName, setTempName] = useState("");
  const [tempRole, setTempRole] = useState("");

  const addUser = () => {
    if (!nameInput || !roleInput) return;
    SetUsers([...users, { id: Date.now(), name: nameInput, role: roleInput }]);
    SetNameInput(""); SetRoleInput("");
  };

  // Jab 'Edit' dabayein toh inputs dikhane ke liye
  const startEdit = (u) => {
    setEditId(u.id);
    setTempName(u.name);
    setTempRole(u.role);
  };

  // Save karne ke liye
  const saveUpdate = (id) => {
    const updated = users.map(u => u.id === id ? { ...u, name: tempName, role: tempRole } : u);
    SetUsers(updated);
    setEditId(null); // Wapas normal card dikhao
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Users Statistics</h1>

      {/* Main Add Section */}
      <div style={{ marginBottom: '20px' }}>
        <input value={nameInput} onChange={(e) => SetNameInput(e.target.value)} placeholder="Add Name" />
        <input value={roleInput} onChange={(e) => SetRoleInput(e.target.value)} placeholder="Add Role" />
        <button onClick={addUser}>Add User</button>
      </div>

      {users.map((u) => (
        <div key={u.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>

          {/* CONDITION: Agar ye ID edit ho rahi hai, toh INPUTS dikhao */}
          {editId === u.id ? (
            <div>
              <input value={tempName} onChange={(e) => setTempName(e.target.value)} />
              <input value={tempRole} onChange={(e) => setTempRole(e.target.value)} />
              <button onClick={() => saveUpdate(u.id)}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </div>
          ) : (
            /* NAHI TOH: Normal data dikhao */
            <div>
              <h2>Name: {u.name}</h2>
              <h3>Role: {u.role}</h3>
              <button onClick={() => SetUsers(users.filter(item => item.id !== u.id))}>x</button>
              <button onClick={() => startEdit(u)}>Edit</button>
            </div>
          )}

        </div>
      ))}
    </div>
  );
}

export default App;