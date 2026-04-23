import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-orange-500 to-yellow-300 shadow-md p-4 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-black text-green-600">MY STORE</Link>
                <div className="flex gap-6 font-bold text-slate-600">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <Link to="/admin" className="hover:text-blue-600 transition-colors">Admin Panel</Link>
                </div>
            </div>
        </nav>
    )
}