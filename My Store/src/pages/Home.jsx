import ProductCard from '../components/ProductCard' // Naya component import kiya

export default function Home({ products, deleteProduct }) {
    return (
        <div className="pb-20">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-black text-slate-800 tracking-tight">
                    Our <span className="text-blue-600"><span className="text-white">P</span>roducts</span>
                </h1>
                <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-bold text-sm">
                    {products.length} Items
                </span>
            </div>

            {products.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-[40px] border-4 border-dashed border-slate-100">
                    <div className="text-6xl mb-4">🛒</div>
                    <p className="text-slate-400 font-bold text-xl">Your store is empty!</p>
                    <p className="text-slate-300">Add some products from the Admin Panel.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((p) => (
                        /* Har product ke liye ProductCard call ho raha hai */
                        <ProductCard
                            key={p.id}
                            p={p}
                            deleteProduct={deleteProduct}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}