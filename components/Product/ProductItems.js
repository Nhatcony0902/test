import { Alert, Button, Carousel, Col, ConfigProvider, message, Popover, Rate, Spin } from "antd";
import { Link, NavLink } from "react-router-dom";
import "./product.scss";
import { EnvironmentOutlined, HeartFilled, LoadingOutlined, LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import { useState, useEffect, useRef } from "react";
function ProductItem(props) {
  const { item } = props
  console.log(item.fileDTOs);
  const parts = item.address;
  const match = parts.match(/Quận (.+?), (.+?),/);
  const districtAndCity = match ? `${match[1]}, ${match[2]}` : "Không tìm thấy dữ liệu";
  const content = (
    <div>
      <span >
        Đánh giá sao này do chỗ nghỉ cung cấp cho Enlink.com và thường <br/>
        được quyết định bởi một tổ chức đánh giá khách sạn chính thức <br/>
        hoặc một bên thứ ba khác.
      </span>
      <br />
      <Link to="#">
        Tìm hiểu thêm trên trang "Chúng tôi hoạt động như thế nào"
      </Link>
    </div>
  );




  const [changeColor, setChangeColor] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setChangeColor(!changeColor);
    }, 500);
  };

  // Slider
  const [currentIndex, setCurrentIndex] = useState(0); // Lưu vị trí hiện tại
  const sliderRef = useRef(null); // Tham chiếu tới slider

  const handleNext = () => {
    // Nếu đã đến cuối thì quay về đầu
    setCurrentIndex((prevIndex) =>
      prevIndex === item.fileDTOs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    // Nếu đang ở đầu thì quay về cuối
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? item.fileDTOs.length - 1 : prevIndex - 1
    );
  };
  //HoverImage
  const [showButton, setShowButton] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const handleHoverImage = (value) => {
    if (value) {
      setShowButton(true);
    }
    else if (!isHoveringButton) {
      setShowButton(false);
    }

  }
  const handleButtonMouseEnter = () => {
    setIsHoveringButton(true);
  };
  const handleButtonMouseLeave = () => {
    setIsHoveringButton(false); // Đánh dấu chuột không còn trên nút
    setShowButton(false); // Ẩn nút nếu chuột rời khỏi nút
  };
  return (
    <>
      <Col span={8}>
        <div className="product__item">
          <div className="product__container">
            <div className="product__box">
              <div className="product__slider" onMouseEnter={handleButtonMouseEnter} // Kích hoạt khi chuột vào container
                onMouseLeave={handleButtonMouseLeave}>

                {showButton && (<button className="product__button--prev" ><LeftCircleFilled style={{
                  fontSize: 36,
                  color: "#F2F2F2"
                }} onClick={handlePrev} onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave} /></button>)}
                <NavLink key={item.id} to={`/DetailProducts/${item.id}`}>
                  <div className="product__slider--image"

                  >
                    {item.fileDTOs.map((image, index) => (
                      <img src={image} alt="image" ref={sliderRef}
                        style={{
                          transform: `translateX(${-currentIndex * 100}%)`,
                          display: 'flex',
                          transition: 'transform 0.5s ease-in-out',
                        }} onMouseEnter={handleHoverImage} defaultValue={item.fileDTOs}></img>
                    ))}
                  </div>
                </NavLink>
                {showButton &&
                  (<button className="product__button--next" ><RightCircleFilled style={{
                    fontSize: 36,
                    color: "#F2F2F2"
                  }} onClick={handleNext} onMouseEnter={handleButtonMouseEnter}
                    onMouseLeave={handleButtonMouseLeave}
                  /></button>)
                }

                <div className="product__aria">
                  <div style={{
                    justifyContent: "start",
                    insetBlockStart: "auto",
                    alignItems: "center",
                    padding: 16,
                    display: "flex",

                  }}>
                    <div className="product__dots">
                      {item.fileDTOs.map((_, index) => (
                        <span
                          key={index}
                          className={`product__dots--dot ${index === currentIndex ? 'active' : ''}`} // Chỉ làm sáng dot khi nó được chọn
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__content">
                <div className="product__grid">
                  <div className="product__title">
                    <NavLink key={item.id} to={`/DetailProducts/${item.id}`}>
                      <div className="product__name">{item.name}</div>
                    </NavLink>
                    <div>
                     <Popover content={content} placement="bottom" >
                     <Rate  allowHalf defaultValue={item.rate} style={{
                        fontSize: "15px"
                      }}>
                      </Rate>
                     </Popover>
                    </div>
                  </div>
                  <div className="product__types">
                    <div className="product__adress">{districtAndCity}</div>
                    <Link key={item.id} to={`/DetailProducts/${item.id}`}>
                      <EnvironmentOutlined style={{
                        paddingRight: "5px",
                        color: "#F74848",

                      }} />
                      Show on map</Link>
                  </div>
                  <div className="product__category">{item.categories}</div>
                  <div className="product__description">{item.description}</div>
                </div>
                <div className="product__button">
                  <NavLink key={item.id} to={`/DetailProducts/${item.id}`}><Button type="primary" className="product__button--prices">Show prices</Button></NavLink>
                </div>

                <div className="product__button--hobby" onClick={() => {
                  handleClick();
                }}>

                  <HeartFilled style={changeColor ? {
                    fontSize: "25px",
                    color: "red"
                  } : {
                    fontSize: "25px",
                    color: "white"
                  }} />

                  {/* nao làm xử lí nhận hobby bằng reducer */}
                </div>


              </div>
            </div>
          </div>
        </div>

      </Col>
    </>
  );
}
export default ProductItem;