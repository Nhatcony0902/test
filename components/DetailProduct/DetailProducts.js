import React, { useRef } from 'react';
import { Anchor, ConfigProvider } from 'antd';
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
      <ConfigProvider
        theme={{
          components: {
            Anchor: {
              colorText: "white",
              lineHeight: 5,
              linkPaddingInlineStart: 95,
              fontSize: 17,
              colorSplit:"#F2323"
            },
          },
        }}
      >
     <div >
     <Anchor
          
          offsetTop={74}
      
          className='DetailProducts__Anchor'
          direction="horizontal"
          items={[
            {
              key: 'Overview',
              href: '#Overview',
              title: 'Overview',
            },
            {
              key: 'Info&prices',
              href: '#Info&prices',
              title: 'Info & prices',
            },
            {
              key: 'Guest review',
              href: '#Guest review',
              title: 'Guest review'
            },
            {
              key: 'Facilities',
              href: '#Facilities',
              title: 'Facilities',
            },
            {
              key: 'Service',
              href: '#Service',
              title: 'Service'
            },
            {
              key: 'HouseRules',
              href: '#HouseRules',
              title: 'HouseRules'
            },
            
          ]}
          style={{
            paddingLeft: 50,
            height: 70,
            display: "flex",
            alignItems: "end",
            boxShadow: "border-box",
          }}
        />  
     </div>
      
       
       <div className="DetailProducts">
       <div id="Overview">
          <Overview item={product}/>
        </div>
        <hr></hr>
        <div id="Info&prices">
        <InfoPrice item={product} />
        </div>
        <div id="Guest review">
          <GuestReview item={product} />
        </div>
        <div id="Facilities">
          <Facilities item={product} />
        </div>
        <div id="Service">
        <Service item={product} />
        </div>
        <div id="HouseRules">
        <HouseRules item={product}/>
        </div>
       </div>
       
      </ConfigProvider>
    </>
  );
}
export default DetailProducts;