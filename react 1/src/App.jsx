import { useState } from "react";
import MyBio from "./components/MyBio";

function App() {
  const [theme, setTheme] = useState("light");
  const channelName = "Engineers Gamer";
  const users = [
    { id: 1, name: "Ashraf Ali", role: "React Dev", age: 18 },
    { id: 2, name: "Ashu", role: "Gamer", age: 19 },
    { id: 3, name: "Sheikh", role: "MERN Dev", age: 20 },
    { id: 4, name: "Lucknowi Coder", role: "Student", age: 21 },
    { id: 5, name: "Don", role: "rangdari", age: 24 }
  ];

  // CSS Logic: Agar theme dark hai toh black background, varna white
  const styleConfig = {
    backgroundColor: theme === "light" ? "white" : "#333",
    color: theme === "light" ? "black" : "white",
    minHeight: "100vh",
    padding: "20px"
  };

  return (
    <div style={styleConfig}>
      <h1>ABCD of react</h1>
      <h2>Welcome to {channelName}</h2>
      <p>Current Theme: <b>{theme}</b></p>

      {users.map((user) => (
        <MyBio
          key={user.id}
          name={user.name}
          role={user.role}
          initialAge={user.age}
        />
      ))}
      < br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default App;