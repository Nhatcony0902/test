import { useEffect,useState } from "react";
import { getProductList } from "../../services/productsSevice";
import ProductItem from "./ProductItems";
import { Row } from "antd";

function Products(){
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
      <div className="product">
        <Row gutter={[10,10]}>
        {products.map(item => (
          <ProductItem item={item} key={item.id}/>
        ))}
        </Row>
      </div>
    
      </>
    );
}
export default Products;