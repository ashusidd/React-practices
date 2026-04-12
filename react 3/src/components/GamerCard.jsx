function GamerCard({ name, game, isOnline }) {
    return (
        <div
            style={{
                border: `3px solid ${isOnline ? 'green' : 'red'}`,
                padding: '10px',
                margin: '10px',
                borderRadius: '10px',
                width: '200px',
                textAlign: 'center'
            }}>
            <h2>{name}</h2>
            <p>Favourite game: {game}</p>
            <div>
                {isOnline ? 'Active Now 🟢' : 'Sleeping 🔴'}
            </div>
        </div>
    );
}

export default GamerCard;