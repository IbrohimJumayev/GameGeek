import { useEffect, useState } from "react";
import FilterAside from "../components/filter/FilterAside";
import api from "../api/api";
import ProductList from "../components/products/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/productsSlice";
import { getBrands } from "../features/BrandsSlice";
import { getColors } from "../features/ColorsSlice";
import ProductFilter from "../components/products/ProductFilter";
import Loader from "../components/products/Loader";

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productsReducer.products);
  const brands = useSelector((store) => store.BrandsReducer.brands);
  const colors = useSelector((store) => store.ColorsReducer.colors);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        dispatch(getProducts(response.data));
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await api.get("/brands");
        dispatch(getBrands(response.data));
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchBrands();
  });

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await api.get("/colors");
        dispatch(getColors(response.data));
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchColors();
  });

  return (
    <>
      {loading ? (
        <div className="loader  absolute top-30 left-1/2"></div>
      ) : (
        <div>
          <ProductFilter products={products} />
          <div className="flex max-sm:flex-col ml-14 max-sm:ml-0">
            <Loader loading={loading} />
            <FilterAside brands={brands} colors={colors} />
            <ProductList products={products} loading={loading} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
