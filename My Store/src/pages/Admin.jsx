import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Admin({ addProduct }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price) return;

        const newProduct = {
            id: Date.now(),
            name,
            price
        };
        alert("Product Saved Successfully!");
        addProduct(newProduct);
        setName("");
        setPrice("");
        navigate("/"); // Product add hote hi automatic Home page par bhej dega
    }

    return (
        <div className="max-w-md mx-auto bg-pink-400 rounded-3xl shadow-sm border border-slate-400">
            <h1 className="text-3xl text-center font-black text-slate-800 mb-8">Add Product</h1>
            < form onSubmit={handleSubmit} className="bg-pink-400 p-8 rounded-3xl shadow-xl flex flex-col gap-4" >

                <input
                    type="text" placeholder="Product Name"
                    value={name} onChange={(e) => setName(e.target.value)}
                    className="bg-slate-50 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 border-none"
                />
                <input
                    type="number" placeholder="Price"
                    value={price} onChange={(e) => setPrice(e.target.value)}
                    className="bg-slate-50 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 border-none"
                />
                <button className="bg-blue-600 text-white font-black py-4 rounded-2xl shadow-lg hover:bg-blue-700 active:scale-95 transition-all">
                    SAVE PRODUCT
                </button>
            </form >
        </div>
    )
}