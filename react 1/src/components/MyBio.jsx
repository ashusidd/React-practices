import { useState } from "react";
function MyBio({ name, role, initialAge }) {
    const [age, setAge] = useState(initialAge);
    return (
        <div style={{ border: '2px solid orange', padding: '10px', marginTop: '10px' }}>
            <h3>I am {name}</h3>
            <p>Age: {age}</p>
            <p>Role: {role}</p>
            <button onClick={() => setAge(age + 1)}>icrease age</button>
            <button onClick={() => setAge(age - 1)}>decrease age</button>
            <button onClick={() => setAge(initialAge)}>default age</button>
        </div>
    );
}

export default MyBio;