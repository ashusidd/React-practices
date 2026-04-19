import React, { useState } from 'react'

function App() {
  const [users, SetUsers] = useState([
    { id: 1, name: "Ashu", role: "Dev" },
    { id: 2, name: "Ashraf", role: "design" },
    { id: 3, name: "Sheikh", role: "backend" }
  ]);
  return (
    <div>
      <h1>Users statcs</h1>
      {users.map((u) => (
        <div key={u.id} style={{ border: '10px', backgroundColor: 'ActiveBorder', color: 'blue' }}>
          <h2 style={{ color: 'red' }}>Name: {u.name}</h2>
          <h3>Role: {u.role}</h3>
          <button onClick={() => { SetUsers(users.filter((item) => item.id !== u.id)) }}>x</button>
        </div>
      ))}
    </div>
  );
}

export default App