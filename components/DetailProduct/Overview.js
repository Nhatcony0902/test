import { Image, Modal, Popover, Row, Tag } from "antd";
import { Alert, Button, Carousel, Col, ConfigProvider, message, Rate } from "antd";
import { Link, NavLink } from "react-router-dom";
import { EnvironmentOutlined, LeftCircleFilled, HeartFilled, CopyOutlined, FacebookOutlined, XOutlined, ShareAltOutlined, TagOutlined, CheckCircleOutlined, CloseCircleOutlined, RightCircleFilled } from "@ant-design/icons";
import { useState, useEffect, useRef } from "react";
import { FaPersonDrowning, FaWifi, FaSpa, FaHotel } from "react-icons/fa6";
import { MdAirportShuttle, MdFitnessCenter, MdOutlineRestaurant } from "react-icons/md";
import { TbSmokingNo } from "react-icons/tb";
import { CiParking1 } from "react-icons/ci";
function Overview(props) {
  const { item } = props;
  console.log(item);
  const [changeColor, setChangeColor] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [currentIndex, setCurrentIndex] = useState(0); // Lưu vị trí hiện tại
  const sliderRef = useRef(null); // Tham chiếu tới slider
  const [showButton, setShowButton] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  //Modal
  const [open, setOpen] = useState(false);
  const [openResponsive, setOpenResponsive] = useState(false);
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Success copied',
    });
  };
  function smoothScroll(){
    document.querySelector('#Info-prices').scrollIntoView({
        behavior: 'smooth'
    });
}
  const content = (
    <div>
      <span >
        Đánh giá sao này do chỗ nghỉ cung cấp cho Enlink.com và thường <br />
        được quyết định bởi một tổ chức đánh giá khách sạn chính thức <br />
        hoặc một bên thứ ba khác.
      </span>
      <br />
      <Link to="#">
        Tìm hiểu thêm trên trang "Chúng tôi hoạt động như thế nào"
      </Link>
    </div>
  );
  const content1 = (

    <ul style={{
      listStyleType: "none",
      padding: 0,
      display: "flex"
    }}>
      <li>
        <div>
          <Button type="text" icon={<CopyOutlined style={{ fontSize: 16 }} />} onClick={success}>Copy link</Button>
        </div>
      </li>
      <li>
        <div>
          <Button type="text" icon={<FacebookOutlined style={{ fontSize: 16 }} />}>Facebook</Button>
        </div>
      </li>
      <li>
        <div>
          <Button type="text" icon={<XOutlined style={{ fontSize: 16 }} />}>Twiter</Button>
        </div>
      </li>
    </ul>

  );
  const content2 = (
    <div style={{ display: "flex" }}>
      <TagOutlined style={{
        color: "#008234",
        fontSize: 20,
        padding: 10
      }} />
      <p>Giá phòng thấp •Không tính phí đặt phòng •<br /> Tìm được giá thấp hơn? Chúng tôi sẽ hoàn lại<br /> số tiền chênh lệch!</p>

    </div>
  );
  const contentStyle = {
    margin: 0,
    height: '160px',

  };
  if (!item || item.length === 0) {
    return <div>Không có dữ liệu để hiển thị.</div>;
  }
  const handleClick = () => {
    setTimeout(() => {
      setChangeColor(!changeColor);
    }, 500);
  };
  //slider

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
      <ConfigProvider
        theme={{
          token: {
            colorTextHeading: "#008234",
            colorBgContainer: "#121212",
            fontSize: 13
          },
          components: {
            Modal: {
              titleFontSize: 20
            },
          },
        }}
      >
        {contextHolder}
        <div className="DetailProducts__Overview">
          <Row gutter={[15, 15]}>
            <Col span={22}>
              <Row gutter={[10, 10]}>
                <Col span={18}>
                  <Popover content={content} placement="bottom">
                    <Rate allowHalf defaultValue={item.rate} style={{
                      fontSize: "15px",
                      marginRight: 7,
                    }}>
                    </Rate>
                  </Popover>
                  <Tag color="volcano"> Airport shuttle</Tag>
                  <br>
                  </br>
                  <h2 className="DetailProducts__Overview--title">{item.name}</h2>
                  <div className="product__adress">  <EnvironmentOutlined style={{
                    paddingRight: "5px",
                    color: "#F74848",
                    fontSize: 20,
                  }} />{item.address} - <a href={item.link} target="_blank" rel="noopener noreferrer"><span>Hiển thị bản đồ</span></a></div>
                </Col>
                <Col span={6} style={{ display: "flex" }}>
                  <div className="DetailProducts__Overview--hobby" onClick={() => {
                    handleClick();
                  }}>

                    <Popover content="Save" placement="top">
                      <HeartFilled style={changeColor ? {
                        fontSize: "25px",
                        color: "red"
                      } : {
                        fontSize: "25px",
                        color: "white"
                      }} />
                    </Popover>

                    {/* nao làm xử lí nhận hobby bằng reducer */}
                  </div>
                  <Popover content={content1} trigger="click" title="Share this property" placement="top">
                    <div className="DetailProducts__Overview--share">
                      <ShareAltOutlined style={{
                        fontSize: "25px",
                        color: "white"
                      }} />
                    </div>
                  </Popover>
                  <Popover content={content2} title="Chúng tôi luôn khớp giá !" placement="bottom" >
                    <Button type="text" icon={<TagOutlined />} style={{
                      color: "#006ce4",
                      fontWeight: 500,
                      fontSize: 16,

                    }} onClick={() => setOpenResponsive(true)}>Chúng tôi luôn khớp giá</Button>
                  </Popover>
                  <Modal
                    title="Chúng tôi luôn khớp giá !"
                    centered
                    open={openResponsive}
                    onOk={() => setOpenResponsive(false)}
                    onCancel={() => setOpenResponsive(false)}
                    width={{
                      xs: '90%',
                      sm: '80%',
                      md: '70%',
                      lg: '60%',
                      xl: '50%',
                      xxl: '40%',
                    }}
                  >
                    <div>
                      <Row gutter={[15, 12]}>
                        <Col span={22}>
                          <Row gutter={[13, 13]}>
                            <Col span={23}>
                              <div style={{
                                fontSize: 16,
                                color: "#1a1a1a",
                                fontWeight: 700
                              }}>
                                Bạn có thể yêu cầu hoàn lại số tiền chênh lệch nếu thấy chỗ nghỉ bạn đã đặt có giá thấp hơn trên trang web khác.
                              </div>
                            </Col>
                            <Col span={24}>
                              <div>
                                Bạn nhớ liên lạc với chúng tôi sau khi đặt phòng và ít nhất 24 giờ trước khi nhận phòng. Bạn cần cung cấp cho chúng tôi đường dẫn tới ưu đãi đó - đường dẫn này cần trực tuyến và hoạt động khi chúng tôi kiểm tra.
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={11}>
                          <div><h3>Điều kiện để chúng tôi khớp giá</h3></div>
                          <div>
                            <ul className="DetailProducts__Overview--table">

                              <li><CheckCircleOutlined style={{
                                color: "#008234",
                                fontSize: 18
                              }} /> <p>Ưu đãi đó phải cùng một chỗ nghỉ và cùng loại phòng.</p></li>
                              <li><CheckCircleOutlined style={{
                                color: "#008234",
                                fontSize: 18
                              }} /> <p>Ưu đãi đó phải cùng ngày nhận và trả phòng.</p></li>
                              <li><CheckCircleOutlined style={{
                                color: "#008234",
                                fontSize: 18
                              }} /> <p>Ưu đãi đó phải có cùng chính sách và điều kiện hủy phòng.</p></li>
                            </ul>
                          </div>
                        </Col>
                        <Col span={11}>
                          <div><h3>Bạn không thể khiếu nại trong trường hợp nào?</h3></div>
                          <div>
                            <ul className="DetailProducts__Overview--table">

                              <li><CloseCircleOutlined style={{
                                color: "red",
                                fontSize: 18
                              }} /> <p>Nếu ưu đãi đó ở trên trang web không hiển thị thông tin về loại chỗ nghỉ cho đến khi hoàn tất việc đặt phòng.</p></li>
                              <li><CloseCircleOutlined style={{
                                color: "red",
                                fontSize: 18
                              }} /> <p>Nếu giá khác là một phần của chương trình thành viên hoặc tặng thưởng nào đó. Chúng tôi xác định kiểu giá khác này là bất cứ trường hợp nào khách nhận giá đã được giảm từ một chỗ nghỉ hoặc trang web khác vì là tặng thưởng cho hoạt động kinh doanh thường xuyên, đăng nhập, nhập mã coupon, giới thiệu khách khác, hay thực hiện bất cứ hành động nào khác khiến cho giá gốc bị thay đổi.</p></li>
                              <li><CloseCircleOutlined style={{
                                color: "red",
                                fontSize: 18
                              }} /> <p>Nếu đặt phòng hiện tại của bạn trên Booking.com là một Ưu Đãi Từ Đối Tác, nghĩa là ưu đãi có nhãn "Ưu Đãi Từ Đối Tác" trên nền tảng của chúng tôi (các ưu đãi này được cung cấp bởi những công ty đối tác của Booking.com) hoặc nếu bạn đang so sánh ưu đãi khác với một trong các Ưu Đãi Từ Đối Tác này trên nền tảng của chúng tôi.</p></li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                      <section style={{
                        padding: 10,
                        borderRadius: 8,
                        border: "1px solid black",
                        backgroundColor: "#f5f5f5"
                      }} >
                        <div>
                          <h3>Bạn tìm thấy giá phòng ở đâu đó rẻ hơn?</h3>
                          <div>
                            <ul>
                              <li>Tìm mục <strong>Bạn tìm thấy giá phòng này rẻ hơn ở đâu đó?</strong> trong trang xác nhận đặt phòng hoặc trong mục <strong>Xem tất cả đặt phòng.</strong></li>
                              <li>Chưa có tài khoản? Đăng nhập bằng mã số đặt phòng và pin của bạn.</li>
                              <li>Bạn cũng có thể liên hệ với đội ngũ <strong>Dịch Vụ Khách Hàng của chúng tôi.</strong></li>
                            </ul>
                          </div>
                        </div>
                      </section>
                    </div>
                  </Modal>
                </Col>
              </Row>
            </Col>
            <Col span={17}>
              <Row gutter={[10, 10]}>
                <Col span={15}>
                  <Image src={item.fileDTOs[0]} style={{ borderRadius: 8 }} />
                </Col>
                <Col span={9}>
                  <Row gutter={[10, 10]}>
                    <Col span={24}>
                      <Image src={item.fileDTOs[2]} style={{ borderRadius: 8 }} />
                    </Col>
                    <Col span={24}>
                      <Image src={item.fileDTOs[3]} style={{ borderRadius: 8 }} />
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row gutter={[10, 0]}>
                    <Col span={6}>
                      <Image src={item.fileDTOs[4]} style={{ borderRadius: 8 }} />
                    </Col>
                    <Col span={6}>
                      <Image src={item.fileDTOs[4]} style={{ borderRadius: 8 }} />
                    </Col>
                    <Col span={6}>
                      <Image src={item.fileDTOs[4]} style={{ borderRadius: 8 }} />
                    </Col>
                    <Col span={6}>
                      <Image src={item.fileDTOs[4]} style={{ borderRadius: 8 }} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={7}>
              <Row gutter={[10, 30]}>
                <Col span={24}>
                  <div className="minibox">
                    <div className="minibox__comment">
                      <div className="minibox__comment--title">
                        <p>Tuyệt vời</p>
                        <div className="minibox__comment--rate">{item.rate}</div>
                      </div>
                    </div>
                    <h3 style={{
                      padding: 8,
                      margin: 0,
                      fontSize: 14,
                      fontWeight: 500
                    }}>Khách lưu trú ở đây thích điều gì?</h3>
                    <div className="minibox__slider" onMouseEnter={handleButtonMouseEnter} // Kích hoạt khi chuột vào container
                      onMouseLeave={handleButtonMouseLeave}>
                      {showButton && (<button className="product__button--prev" ><LeftCircleFilled style={{
                        fontSize: 36,
                        color: "#F2F2F2"
                      }} onClick={handlePrev} onMouseEnter={handleButtonMouseEnter}
                        onMouseLeave={handleButtonMouseLeave} /></button>)}

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

                      {showButton &&
                        (<button className="product__button--next" ><RightCircleFilled style={{
                          fontSize: 36,
                          color: "#F2F2F2"
                        }} onClick={handleNext} onMouseEnter={handleButtonMouseEnter}
                          onMouseLeave={handleButtonMouseLeave}
                        /></button>)
                      }
                    </div>

                    <div className="minibox__footer">

                      <p>Nhân viên phục vụ</p>
                      <div className="minibox__footer--ratenv">{item.rate}</div>

                    </div>

                  </div>
                </Col>
                <Col span={24}>
                  <div className="minibox">
                    <iframe src={item.iframe} style={{ borderRadius: 8 }}></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={[10, 10]}>
                <Col span={17}>
                  <div className="DetailProducts__Overview--detail">
                    <p>{item.detail}</p>
                    <span>Các khoảng cách nêu trong mô tả chỗ nghỉ được tính toán bằng © OpenStreetMap</span>
                  </div>
                  <h3>
                    <div style={{
                      fontSize: 17,
                      color: "white",
                      fontWeight: 700,
                      fontFamily: "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                    }}>
                      Các tiện nghi được ưa chuộng nhất
                    </div>
                  </h3>
                  <Row gutter={[5, 10]}>
                    <Col span={6}>
                      <div className="DetailProducts__Overview--icon">
                        <span>
                          <FaPersonDrowning size={25} color="#2B9756" />
                        </span>
                        <div>
                          <p>
                            Hồ bơi ngoài trời
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="DetailProducts__Overview--icon">
                        <span>
                          <FaWifi size={25} color="#2B9756" />
                        </span>
                        <div>
                          <p>
                            WiFi miễn phí
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="DetailProducts__Overview--icon">
                        <span>
                          <MdAirportShuttle size={25} color="#2B9756" />
                        </span>
                        <div>
                          <p>
                            Xe đưa đón sân bay
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="DetailProducts__Overview--icon">
                        <span>
                          <MdFitnessCenter size={25} color="#2B9756" />
                        </span>
                        <div>
                          <p>
                            Trung tâm thể dục
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="DetailProducts__Overview--icon">
                        <span>
                          <TbSmokingNo size={25} color="#2B9756" />
                        </span>
                        <div>
                          <p>
                            Phòng không hút thuốc
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="DetailProducts__Overview--icon">
                        <span>
                          <FaSpa size={25} color="#2B9756" />
                        </span>
                        <div>
                          <p>
                            Trung tâm Spa & chăm sóc sức khoẻ
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="DetailProducts__Overview--icon">
                        <span>
                          <FaHotel size={25} color="#2B9756" />
                        </span>
                        <div>
                          <p>
                            Lễ tân 24 giờ
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="DetailProducts__Overview--icon">
                        <span>
                          <FaPersonDrowning size={25} color="#2B9756" />
                        </span>
                        <div>
                          <p>
                            Nhà hàng
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="DetailProducts__Overview--icon">
                        <span>
                          <FaPersonDrowning size={25} color="#2B9756" />
                        </span>
                        <div>
                          <p>
                            Quầy bar
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="DetailProducts__Overview--icon">
                        <span>
                          <MdOutlineRestaurant size={25} color="#2B9756" />
                        </span>
                        <div>
                          <p>
                            Bữa sáng tuyệt vời
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col span={7}>
                  <div className="minibox">
                    <div className="minibox__section">
                      <h3>Điểm nổi bật của chỗ nghỉ</h3>
                      <div className="minibox__highlight">
                        <EnvironmentOutlined style={{
                          fontSize: 16,
                          color: "black",
                        }} />
                        <p>Nằm ngay trung tâm, khách sạn này có điểm vị trí tuyệt vời 9,7</p>
                        {/* chinh lai backend */}
                      </div>
                      <div >
                        <h4>Thông tin về bữa sáng</h4>
                        {/* chinh lai backend */}
                        <p style={{marginTop:0,
                          fontSize:13
                        }}>Kiểu lục địa, Kiểu Á, Tự chọn, Bữa sáng mang đi</p>
                      </div>
                      <div className="minibox__highlight">
                        <CiParking1 style={{fontSize:24}} />
                        <p>Có bãi đậu xe riêng miễn phí ở khách sạn</p>
                      </div>
                      <div className="minibox__button">
                      <Button type="primary"  style={{marginBottom:10,
                        marginTop:14
                      }} onClick={() => smoothScroll()}>Đặt ngay</Button>
                      
                      <Button icon={<HeartFilled/>} type="primary"  >Lưu chỗ nghỉ</Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

            </Col>
          </Row>

        </div >
      </ConfigProvider >

    </>
  )
}
export default Overview;