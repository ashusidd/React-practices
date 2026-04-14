import { useState } from 'react';

function MirrorTask() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Input Mirror 🪞</h1>

      <input
        type="text"
        placeholder="Type here..."
        onChange={handleChange}
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <h2 style={{ color: '#4f46e5', marginTop: '20px' }}>
        {text === "" ? "Type anthing..." : `Hello, ${text}!`}
      </h2>
    </div>
  );
}

export default MirrorTask;