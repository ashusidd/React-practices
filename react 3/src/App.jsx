import GamerCard from "./components/GamerCard";

function App() {
  // 1. Maine naam 'gamers' kar diya hai (Symmetry ke liye)
  const gamers = [
    { id: 1, name: "Ashu", isOnline: false, game: "Free Fire" },
    { id: 2, name: "Ashraf", isOnline: true, game: "FC Mobile" },
    { id: 3, name: "Sheikh", isOnline: false, game: "PUBG" }
  ];

  return (
    <div>
      <h1>Gamer Status 🎮</h1>
      <div style={{
        display: 'flex',           // Flexbox active kiya
        justifyContent: 'center',  // Horizontal center (Left-Right ke beech mein)
        alignItems: 'center',      // Vertical center (Upar-Niche ke beech mein)
        flexWrap: 'wrap',          // Agar jagah kam ho toh cards niche aa jayein
        gap: '20px',               // Cards ke beech ka gap
        padding: '20px'
      }}>
        {/* 2. Ab 'gamers' list aur .map() ka naam match kar raha hai */}
        {gamers.map((player) => (
          <GamerCard
            key={player.id}
            name={player.name}
            game={player.game}
            isOnline={player.isOnline}
          />
        ))}
      </div>
    </div >
  );
}

export default App;