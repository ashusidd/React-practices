import { useState } from 'react';

function List() {
    const [games, setGames] = useState([
        { id: 1, name: "Free Fire", rating: 4.8 },
        { id: 2, name: "FC Mobile", rating: 4.5 },
        { id: 3, name: "PUBG", rating: 4.2 },
        { id: 4, name: "Minecraft", rating: 4.9 }
    ]);

    const deleteGame = (id) => {
        const newList = games.filter(game => game.id !== id)
        setGames(newList)
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>My Game Library 🕹️</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {games.map((game) => (
                    <div key={game.id} style={{ border: '2px solid orange', padding: '15px', borderRadius: '10px' }}>
                        <button onClick={() => deleteGame(game.id)}>x</button>
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating} ⭐</p>

                    </div>
                ))}
            </div>
        </div >
    );
}

export default List;