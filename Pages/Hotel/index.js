import { useState,useEffect } from "react";
import { getProductList } from "../../services/productsSevice";
import Product from "../../components/Product";
function Hotel() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setProducts(result);

    }
    fetchApi();
  }, []);
  console.log(products);
  return (
    <>
      <Product/>
    </>
  );
}
export default Hotel;