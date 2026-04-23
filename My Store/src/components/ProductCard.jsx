import React from 'react'

export default function ProductCard({ p, deleteProduct }) {
    const { id, name, price } = p; // Destructuring loop ke item se

    return (
        <div className="bg-pink-400 p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
            {/* Product Image Placeholder */}
            <div className="h-40 bg-slate-50 rounded-2xl mb-4 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                No Image
            </div>

            {/* Product Info */}
            <div className="space-y-1">
                <h2 className="text-xl font-black text-slate-800 truncate">{name}</h2>
                <p className="text-blue-600 font-black text-2xl">₹{price}</p>
            </div>

            {/* Action Button */}
            <button
                onClick={() => deleteProduct(id)}
                className="w-full mt-6 bg-red-50 text-red-500 font-bold py-3 rounded-2xl hover:bg-red-500 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2"
            >
                Remove Item
            </button>
        </div>
    )
}