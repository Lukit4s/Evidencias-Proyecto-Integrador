function Stats({
  total,
  max,
  min,
  productMax,
  productMin,
  productLargos,
  totalPrecio,
  porcentajeDescuento,
}) {
  return (
    <div>
      <h2>Estadísticas</h2>
      <p>Productos filtrados: {total}</p>
      <p>Precio más alto: ${max}</p>
      <p>Precio más bajo: ${min}</p>
      <p>
        Producto más caro: {productMax.title} - ${productMax.price}
      </p>
      <p>
        Producto más barato: {productMin.title} - ${productMin.price}
      </p>
      <p>Productos con título largo: {productLargos}</p>
      <p>Precio total: ${totalPrecio}</p>
      <p>Promedio de descuento: {porcentajeDescuento}%</p>
    </div>
  );
}

export default Stats;
