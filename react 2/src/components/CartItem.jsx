import { useState } from "react";


function CartItem({ name, price }) {
    const [qty, setQty] = useState(0);
    return (
        <div style={{
            border: '1px solid orange',
            padding: '15px',
            margin: '10px 0',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            color: '#333'
        }}>
            <div>
                <h3 style={{ margin: 0 }}>{name}</h3>
                <p style={{ margin: '5px 0' }}>Price: ₹{price}</p>
                {/* Logic: Price * Quantity */}
                <p style={{ fontWeight: 'bold', color: 'green' }}>Total: ₹{price * qty}</p>
            </div>
            <div>
                <button
                    onClick={() => qty > 0 && setQty(qty - 1)}
                    style={btnStyle}
                >
                    -
                </button>
                <span style={{ margin: '0 15px', fontSize: '1.2rem' }}>{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={btnStyle}>+</button>
                <span style={{ margin: '0 5px', fontSize: '1.2rem' }}></span>
                {qty > 0 && (
                    <button onClick={() => setQty(0)} style={{ ...btnStyle, backgroundColor: '#ff4444', color: 'white' }}>
                        Reset
                    </button>
                )}
            </div>

        </div>
    );
}
const btnStyle = {
    padding: '5px 12px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #333'
};

export default CartItem;