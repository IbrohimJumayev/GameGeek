import ProductCard from "./ProductCard";

const ProductList = ({ products, loading }) => {
  return (
    <>
      <div>
        <div className="grid gap-7 grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 flex-1 pr-20 pl-10 max-sm:pr-1 max-sm:pl-1 ">
          {products.map((product) => (
            <ProductCard id={product.id} product={product} price = {product.price} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
