import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import SingleProductLook from "./SingleProductLook";
import SinlgleProductDetail from "./SinlgleProductDetail";

const SingleCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSinlgleProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSinlgleProduct();
  }, [id]);
  return (
    <>
      {loading ? (
        <div className="loader absolute top-30 left-1/2"></div>
      ) : (
        <div>
          <div className="flex mt-24 max-w-7xl m-auto max-md:flex-col max-sm:mt-5 max-sm:px-5 px-5 gap-9">
            <SingleProductLook product={product} />
            <SinlgleProductDetail product={product} />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCard;
