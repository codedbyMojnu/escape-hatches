import Product from "./Product";

export default function ProductList({ productsData }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start", gap: "2px" }}>
      {productsData.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}
