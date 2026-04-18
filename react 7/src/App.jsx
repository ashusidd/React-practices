import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/todoApp">Tasks</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome Home!</h1>} />
          <Route path="/todoApp" element={<TodoApp />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;