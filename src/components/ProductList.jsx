import Product from "./Product";

export default function ProductList({ productsData }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      {productsData.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}
