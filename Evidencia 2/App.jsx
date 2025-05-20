import axios from "axios";
import { useEffect, useState } from "react";
import Stats from "./components/Stats";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=50").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const filtradoProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalProducts = filtradoProducts.length;
  const maxProduct = Math.max(...filtradoProducts.map((p) => p.price));
  const minProduct = Math.min(...filtradoProducts.map((p) => p.price));

  const productMax = filtradoProducts.find((p) => p.price === maxProduct) || {};
  const productMin = filtradoProducts.find((p) => p.price === minProduct) || {};
  const productLargos = filtradoProducts.filter(
    (p) => p.title.length > 20
  ).length;
  const totalPrecio = filtradoProducts.reduce((acc, p) => acc + p.price, 0);
  const porcentajeDescuento = (
    filtradoProducts.reduce((acc, p) => acc + p.discountPercentage, 0) /
    (filtradoProducts.length || 1)
  ).toFixed(2);

  return (
    <>
      <h1>Productos</h1>

      <input
        type="text"
        placeholder="Buscar producto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setShow(!show)}>
        {show ? "Ocultar estadísticas" : "Mostrar estadísticas"}
      </button>

      {show && (
        <Stats
          total={totalProducts}
          max={maxProduct}
          min={minProduct}
          productMax={productMax}
          productMin={productMin}
          productLargos={productLargos}
          totalPrecio={totalPrecio}
          porcentajeDescuento={porcentajeDescuento}
        />
      )}

      {filtradoProducts.length === 0 && <div>No se encontraron productos</div>}

      <ProductList products={filtradoProducts} />
    </>
  );
}

export default App;
