import CartItem from "./components/cartItem";
function App() {
  const products = [
    { id: 1, name: "Gaming Mouse", price: 1200 },
    { id: 2, name: "Mechanical Keyboard", price: 3500 },
    { id: 3, name: "RGB Mousepad", price: 800 },
    { id: 4, name: "Poco M7 Pro Case", price: 300 },
    { id: 5, name: "Acer", price: 30000 }
  ];
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>Ashu's Store 🛒</h1>
      <hr />

      {products.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
        />
      ))}

      <footer style={{ marginTop: '20px', textAlign: 'center', color: '#666' }}>
        <p>Now icrease the quantity and prices also increases !</p>
      </footer>
    </div>
  );
}

export default App;