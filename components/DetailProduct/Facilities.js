import { Col, ConfigProvider, Row, Modal, Popover, Button, Badge, Progress, Tag } from "antd";
import { FaPersonRunning,FaMountain,FaBus, FaPlaneDeparture } from "react-icons/fa6";
import { MdLocalFlorist,MdOutlineRestaurantMenu } from "react-icons/md";
import { redirectToPage } from "../../helper";
function Facilities(props) {
  const { item } = props;
  console.log(item);
  return (
    <>
      <div style={{ paddingTop: 40 }}>
        <ConfigProvider>
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <div>
                <Row gutter={[20, 20]}>
                  <Col span={18}>
                    <h2 className="DetailProducts__Overview--title">Xung quanh khách sạn</h2>
                  </Col>
                  <Col span={6}>
                    <Button type="primary" size="large" onClick={() => redirectToPage()}>Xem phòng trống</Button>
                  </Col>
                  <Col span={8}>
                    <Tag color="gold">Khách rất thích đi dạo quanh khu vực chỗ nghỉ!</Tag>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* {doi backend} dung map chay */}
            <Col span={18}>
              <Row gutter={[10, 10]}>
                <Col span={12}>
                  <div className="minibox__highlight">
                    <FaPersonRunning style={{
                      fontSize: 24,
                      color: "white"
                    }} />
                    <h3>
                      <div style={{
                        marginLeft: 5,
                        fontSize: 17,
                        color: "white",
                        fontWeight: 700,
                        fontFamily: "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                      }}>
                        Xung quanh có gì?
                      </div>
                    </h3>
                    {/* chỉnh h3 */}
                  </div>
                 <div>
                 <ul class="distance-list">
                    <li>
                      <span class="location">Vườn Hoa Hàng Vôi</span>
                      <span class="distance">150 m</span>
                    </li>
                    <li>
                      <span class="location">Trà Đá Công Viên BIDV</span>
                      <span class="distance">200 m</span>
                    </li>
                    <li>
                      <span class="location">Chí Linh Shuttlecock Club</span>
                      <span class="distance">550 m</span>
                    </li>
                    <li>
                      <span class="location">Dong Kinh Nghĩa Thục Square</span>
                      <span class="distance">550 m</span>
                    </li>
                    <li>
                      <span class="location">Vườn Hoa Lý Thái Tổ</span>
                      <span class="distance">650 m</span>
                    </li>
                    <li>
                      <span class="location">Bảo tàng Lịch sử Quốc gia Việt Nam</span>
                      <span class="distance">700 m</span>
                    </li>
                    <li>
                      <span class="location">Đài Phun Nước Khách Sạn Hilton</span>
                      <span class="distance">850 m</span>
                    </li>
                    <li>
                      <span class="location">Ô Quan Chưởng</span>
                      <span class="distance">950 m</span>
                    </li>
                    <li>
                      <span class="location">Beer Corner</span>
                      <span class="distance">1 km</span>
                    </li>
                    <li>
                      <span class="location">Vườn Hoa Quang Trung</span>
                      <span class="distance">1,2 km</span>
                    </li>
                  </ul>
                 </div>
                </Col>
                <Col span={12}>
                  <div className="minibox__highlight">
                    <MdLocalFlorist  style={{
                      fontSize: 24,
                      color: "white"
                    }} />
                    <h3>
                      <div style={{
                        marginLeft: 5,
                        fontSize: 17,
                        color: "white",
                        fontWeight: 700,
                        fontFamily: "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                      }}>
                        Địa điểm tham quan hàng đầu
                      </div>
                    </h3>
                    {/* chỉnh h3 */}
                  </div>
                  <div>
                 <ul class="distance-list">
                    <li>
                      <span class="location">Vườn Hoa Hàng Vôi</span>
                      <span class="distance">150 m</span>
                    </li>
                    <li>
                      <span class="location">Trà Đá Công Viên BIDV</span>
                      <span class="distance">200 m</span>
                    </li>
                    <li>
                      <span class="location">Chí Linh Shuttlecock Club</span>
                      <span class="distance">550 m</span>
                    </li>
                    <li>
                      <span class="location">Dong Kinh Nghĩa Thục Square</span>
                      <span class="distance">550 m</span>
                    </li>
                    <li>
                      <span class="location">Vườn Hoa Lý Thái Tổ</span>
                      <span class="distance">650 m</span>
                    </li>
                    <li>
                      <span class="location">Bảo tàng Lịch sử Quốc gia Việt Nam</span>
                      <span class="distance">700 m</span>
                    </li>
                    <li>
                      <span class="location">Đài Phun Nước Khách Sạn Hilton</span>
                      <span class="distance">850 m</span>
                    </li>
                    <li>
                      <span class="location">Ô Quan Chưởng</span>
                      <span class="distance">950 m</span>
                    </li>
                    <li>
                      <span class="location">Beer Corner</span>
                      <span class="distance">1 km</span>
                    </li>
                    <li>
                      <span class="location">Vườn Hoa Quang Trung</span>
                      <span class="distance">1,2 km</span>
                    </li>
                  </ul>
                 </div>
                </Col>
                <Col span={12}>
                  <div className="minibox__highlight">
                    <MdOutlineRestaurantMenu style={{
                      fontSize: 24,
                      color: "white"
                    }} />
                    <h3>
                      <div style={{
                        marginLeft: 5,
                        fontSize: 17,
                        color: "white",
                        fontWeight: 700,
                        fontFamily: "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                      }}>
                        Nhà hàng & quán cà phê
                      </div>
                    </h3>
                    {/* chỉnh h3 */}
                  </div>
                  <div>
                 <ul class="distance-list">
                    <li>
                      <span class="location">Vườn Hoa Hàng Vôi</span>
                      <span class="distance">150 m</span>
                    </li>
                    <li>
                      <span class="location">Trà Đá Công Viên BIDV</span>
                      <span class="distance">200 m</span>
                    </li>
                    <li>
                      <span class="location">Chí Linh Shuttlecock Club</span>
                      <span class="distance">550 m</span>
                    </li>
                    <li>
                      <span class="location">Dong Kinh Nghĩa Thục Square</span>
                      <span class="distance">550 m</span>
                    </li>
                    <li>
                      <span class="location">Vườn Hoa Lý Thái Tổ</span>
                      <span class="distance">650 m</span>
                    </li>
                    <li>
                      <span class="location">Bảo tàng Lịch sử Quốc gia Việt Nam</span>
                      <span class="distance">700 m</span>
                    </li>
                    <li>
                      <span class="location">Đài Phun Nước Khách Sạn Hilton</span>
                      <span class="distance">850 m</span>
                    </li>
                    <li>
                      <span class="location">Ô Quan Chưởng</span>
                      <span class="distance">950 m</span>
                    </li>
                    <li>
                      <span class="location">Beer Corner</span>
                      <span class="distance">1 km</span>
                    </li>
                    <li>
                      <span class="location">Vườn Hoa Quang Trung</span>
                      <span class="distance">1,2 km</span>
                    </li>
                  </ul>
                 </div>
                </Col>
                <Col span={12}>
                  <div className="minibox__highlight">
                    <FaMountain style={{
                      fontSize: 24,
                      color: "white"
                    }} />
                    <h3>
                      <div style={{
                        marginLeft: 5,
                        fontSize: 17,
                        color: "white",
                        fontWeight: 700,
                        fontFamily: "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                      }}>
                        Cảnh đẹp thiên nhiên
                      </div>
                    </h3>
                    {/* chỉnh h3 */}
                  </div>
                  <div>
                 <ul class="distance-list">
                    <li>
                      <span class="location">Vườn Hoa Hàng Vôi</span>
                      <span class="distance">150 m</span>
                    </li>
                    <li>
                      <span class="location">Trà Đá Công Viên BIDV</span>
                      <span class="distance">200 m</span>
                    </li>
                    <li>
                      <span class="location">Chí Linh Shuttlecock Club</span>
                      <span class="distance">550 m</span>
                    </li>
                    <li>
                      <span class="location">Dong Kinh Nghĩa Thục Square</span>
                      <span class="distance">550 m</span>
                    </li>
                    <li>
                      <span class="location">Vườn Hoa Lý Thái Tổ</span>
                      <span class="distance">650 m</span>
                    </li>
                    <li>
                      <span class="location">Bảo tàng Lịch sử Quốc gia Việt Nam</span>
                      <span class="distance">700 m</span>
                    </li>
                    <li>
                      <span class="location">Đài Phun Nước Khách Sạn Hilton</span>
                      <span class="distance">850 m</span>
                    </li>
                    <li>
                      <span class="location">Ô Quan Chưởng</span>
                      <span class="distance">950 m</span>
                    </li>
                    <li>
                      <span class="location">Beer Corner</span>
                      <span class="distance">1 km</span>
                    </li>
                    <li>
                      <span class="location">Vườn Hoa Quang Trung</span>
                      <span class="distance">1,2 km</span>
                    </li>
                  </ul>
                 </div>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row gutter={[10, 10]}>
                <Col span={24}>
                  <div className="minibox__highlight">
                    <FaBus style={{
                      fontSize: 24,
                      color: "white"
                    }} />
                    <h3>
                      <div style={{
                        marginLeft: 5,
                        fontSize: 17,
                        color: "white",
                        fontWeight: 700,
                        fontFamily: "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                      }}>
                        Phương tiện công cộng
                      </div>
                    </h3>
                    {/* chỉnh h3 */}
                  </div>
                  
                </Col>
                <Col span={24}>
                  <div className="minibox__highlight">
                    < FaPlaneDeparture style={{
                      fontSize: 24,
                      color: "white"
                    }} />
                    <h3>
                      <div style={{
                        marginLeft: 5,
                        fontSize: 17,
                        color: "white",
                        fontWeight: 700,
                        fontFamily: "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                      }}>
                        Các sân bay gần nhất
                      </div>
                    </h3>
                    {/* chỉnh h3 */}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </ConfigProvider>
      </div>
    </>
  )
}
export default Facilities;