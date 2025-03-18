import React, { useRef } from 'react';
import { Anchor, Button, ConfigProvider,Row,Col } from 'antd';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getdetailProducts } from '../../services/productsSevice';
import Overview from './Overview';
import Service from './Service';
import InfoPrice from './InfoPrices';
import Facilities from './Facilities';
import HouseRules from './Houserules';
import TheFinePrint from './TheFinePrint';
import GuestReview from './GuestReview';
import "../../components/Product/product.scss";
function DetailProducts() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState([]);
  function smoothScroll1(){
    document.querySelector('#Overview').scrollIntoView({
        behavior: 'smooth'
    });
}
function smoothScroll2(){
  document.querySelector('#Info-prices').scrollIntoView({
      behavior: 'smooth'
  });
}

function smoothScroll4(){
  document.querySelector('#Facilities').scrollIntoView({
      behavior: 'smooth'
  });
}

function smoothScroll3(){
  document.querySelector('#Guestreview').scrollIntoView({
      behavior: 'smooth'
  });
}

function smoothScroll5(){
  document.querySelector('#Service').scrollIntoView({
      behavior: 'smooth'
  });
}

function smoothScroll6(){
  document.querySelector('#Houserules').scrollIntoView({
      behavior: 'smooth'
  });
}


  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await getdetailProducts(id);
        if (result) {
          setProduct(result);
        } else {
          setProduct({});
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct({});
      }
    };
    fetchApi();

  }, [id]);
  return (
    <>
       <div className="DetailProducts">
        <div className="DetailProducts__link">
            <Row gutter={[10,20]}>
               <Col span={4}>
              <Button onClick={()=>smoothScroll1()}  type="text" style={{color:"white",
                fontSize:16,
                fontWeight:500,
                
              }}>Tổng quan</Button>
              </Col>
               <Col span={4}>
              <Button type="text" onClick={()=>smoothScroll2()} style={{color:"white",
                fontSize:16,
                fontWeight:500,
                
              }}>Thông tin & Giá</Button>
              </Col>
               <Col span={4}>
              <Button type="text" onClick={()=>smoothScroll3()} style={{color:"white",
                fontSize:16,
                fontWeight:500,
             
              }}>Đánh giá</Button>
              </Col>
               <Col span={4}>
              <Button type="text" onClick={()=>smoothScroll4()} style={{color:"white",
                fontSize:16,
                fontWeight:500,
     
              }}>Dịch vụ</Button>
              </Col>
               <Col span={4}>
              <Button type="text" onClick={()=>smoothScroll5()} style={{color:"white",
                fontSize:16,
                fontWeight:500,
         
              }}>Tiện nghị</Button>
              </Col>
               <Col span={4}>
              <Button type="text" onClick={()=>smoothScroll6()} style={{color:"white",
                fontSize:16,
                fontWeight:500,
        
              }}>Quy tắc chung</Button>
              </Col>
            </Row>
        </div>
       <div id="Overview">
          <Overview item={product}/>
        </div>
        <hr></hr>
        <div id="Info-prices">
        <InfoPrice item={product} />
        </div>
        <div id="Guestreview">
          <GuestReview item={product} />
        </div>
        <div id="Facilities">
          <Facilities item={product} />
        </div>
        <div id="Service">
        <Service item={product} />
        </div>
        <div id="Houserules">
        <HouseRules item={product}/>
        </div>
       </div>
       
    </>
  );
}
export default DetailProducts;