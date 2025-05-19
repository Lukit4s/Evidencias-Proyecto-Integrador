import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl text-violet-600 font-bold mb-6 text-center">
        Evidencia 1 - Lucas Dylan Ledesma
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4 m-2 rounded shadow bg-white text-center">
            
            <h2 className="font-semibold text-lg"> {p.title}</h2>

            <p className="text-sm text-gray-600">Precio: ${p.price}</p>
            <p className="text-sm text-gray-600">Cantidad disponible: {p.stock}</p>
            <p className="text-sm text-gray-600">Categoria: {p.category}</p>
            <p className="text-sm text-gray-600">Valoracion: {p.rating}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;
