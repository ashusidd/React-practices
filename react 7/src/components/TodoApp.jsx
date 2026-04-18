import { useState, useContext } from 'react';
import { useStorage } from '../hooks/useStorage';
import { AppContext } from '../context/AppContext';

function TodoApp() {
    const { theme, user } = useContext(AppContext);
    const [tasks, setTasks] = useStorage("tasks", []);
    const [text, setText] = useState("");

    const addTask = () => {
        if (!text) return;
        setTasks([...tasks, { id: Date.now(), title: text, done: false }]);
        setText("");
    };

    const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

    return (
        <div style={{ background: theme === "dark" ? "#333" : "#fff", color: theme === "dark" ? "#fff" : "#000", minHeight: '100vh', padding: '20px' }}>
            <h1>{user}'s Tasks ✅</h1>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addTask}>Add</button>

            <ul>
                {tasks.map(t => (
                    <li key={t.id}>
                        {t.title} <button onClick={() => deleteTask(t.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TodoApp;