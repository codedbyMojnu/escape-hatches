import { productsData } from "./product-data";
import ProductList from "./ProductList";

export default function ProductPage() {
  return (
    <div style={{ padding: "20px" }}>
      <ProductList productsData={productsData} />
    </div>
  );
}
