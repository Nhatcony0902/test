import { Col, ConfigProvider, Row, Modal, Popover, Button, Badge, Progress, Tag } from "antd";
import { redirectToPage } from "../../helper";
import { MdOutlineAccountCircle,MdOutlineRestaurantMenu,MdOutlineFamilyRestroom } from "react-icons/md";
import { FaBath,FaServicestack ,FaBed} from "react-icons/fa";
function Service(props) {
  const { item } = props;
  console.log(item);
  return (
    <>
      <div style={{ paddingTop: 40 }} >
        <ConfigProvider>
          <Row>
            <Col span={24}>
              <div>
                <Row gutter={[20, 20]}>
                  <Col span={18}>
                    <h2 className="DetailProducts__Overview--title">Các tiện nghi của {item.name}</h2>
                  </Col>
                  <Col span={6}>
                    <Button type="primary" size="large" onClick={() => redirectToPage()}>Xem phòng trống</Button>
                  </Col>
                  <Col span={8}>
                    <Tag color="magenta">Tiện nghi tuyệt vời</Tag>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={24}>
              <Row gutter={[10, 10]}>
                <Col span={8}>
                  <div className="minibox__highlight">
                    <MdOutlineAccountCircle style={{
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
                        Cực kỳ phù hợp cho kỳ lưu trú của bạn
                      </div>
                    </h3>
                    {/* chỉnh h3 */}
                  </div>
                  <div>
                    <ul class="distance-checklist">
                      {/* chạy for map doi back */}
                      <li>Phòng tắm riêng</li>
                      <li>WiFi miễn phí</li>
                      <li>Điều hòa không khí</li>
                      <li>Chỗ để xe</li>
                      <li>TV màn hình phẳng</li>
                      <li>Xe đưa đón sân bay</li>
                      <li>Phòng giặt ủi</li>
                      <li>Phòng không hút thuốc</li>
                      <li>Trung tâm Spa & chăm sóc sức khỏe</li>
                      <li>Dịch vụ phòng</li>
                    </ul>
                  </div>
                </Col>
                <Col span={8}>
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
                        Đồ ăn & thức uống
                      </div>
                    </h3>
                    {/* chỉnh h3 */}
                  </div>
                  <div>
                    <ul class="distance-checklist">
                      {/* chạy for map doi back */}
                      <li>Phòng tắm riêng</li>
                      <li>WiFi miễn phí</li>
                      <li>Điều hòa không khí</li>
                      <li>Chỗ để xe</li>
                      <li>TV màn hình phẳng</li>
                      <li>Xe đưa đón sân bay</li>
                      <li>Phòng giặt ủi</li>
                      <li>Phòng không hút thuốc</li>
                      <li>Trung tâm Spa & chăm sóc sức khỏe</li>
                      <li>Dịch vụ phòng</li>
                    </ul>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="minibox__highlight">
                    <FaBath style={{
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
                        Phòng tắm
                      </div>
                    </h3>
                    {/* chỉnh h3 */}
                  </div>
                  <div>
                    <ul class="distance-checklist">
                      {/* chạy for map doi back */}
                      <li>Phòng tắm riêng</li>
                      <li>WiFi miễn phí</li>
                      <li>Điều hòa không khí</li>
                      <li>Chỗ để xe</li>
                      <li>TV màn hình phẳng</li>
                      <li>Xe đưa đón sân bay</li>
                      <li>Phòng giặt ủi</li>
                      <li>Phòng không hút thuốc</li>
                      <li>Trung tâm Spa & chăm sóc sức khỏe</li>
                      <li>Dịch vụ phòng</li>
                    </ul>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="minibox__highlight">
                    <FaServicestack style={{
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
                        Dịch vụ lễ tân
                      </div>
                    </h3>
                    {/* chỉnh h3 */}
                  </div>
                  <div>
                    <ul class="distance-checklist">
                      {/* chạy for map doi back */}
                      <li>Phòng tắm riêng</li>
                      <li>WiFi miễn phí</li>
                      <li>Điều hòa không khí</li>
                      <li>Chỗ để xe</li>
                      <li>TV màn hình phẳng</li>
                      <li>Xe đưa đón sân bay</li>
                      <li>Phòng giặt ủi</li>
                      <li>Phòng không hút thuốc</li>
                      <li>Trung tâm Spa & chăm sóc sức khỏe</li>
                      <li>Dịch vụ phòng</li>
                    </ul>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="minibox__highlight">
                    <FaBed style={{
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
                       Phòng ngủ
                      </div>
                    </h3>
                    {/* chỉnh h3 */}
                  </div>
                  <div>
                    <ul class="distance-checklist">
                      {/* chạy for map doi back */}
                      <li>Phòng tắm riêng</li>
                      <li>WiFi miễn phí</li>
                      <li>Điều hòa không khí</li>
                      <li>Chỗ để xe</li>
                      <li>TV màn hình phẳng</li>
                      <li>Xe đưa đón sân bay</li>
                      <li>Phòng giặt ủi</li>
                      <li>Phòng không hút thuốc</li>
                      <li>Trung tâm Spa & chăm sóc sức khỏe</li>
                      <li>Dịch vụ phòng</li>
                    </ul>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="minibox__highlight">
                    <MdOutlineFamilyRestroom style={{
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
                        Dịch vụ giải trí và gia đình
                      </div>
                    </h3>
                    {/* chỉnh h3 */}
                  </div>
                  <div>
                    <ul class="distance-checklist">
                      {/* chạy for map doi back */}
                      <li>Phòng tắm riêng</li>
                      <li>WiFi miễn phí</li>
                      <li>Điều hòa không khí</li>
                      <li>Chỗ để xe</li>
                      <li>TV màn hình phẳng</li>
                      <li>Xe đưa đón sân bay</li>
                      <li>Phòng giặt ủi</li>
                      <li>Phòng không hút thuốc</li>
                      <li>Trung tâm Spa & chăm sóc sức khỏe</li>
                      <li>Dịch vụ phòng</li>
                    </ul>
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
export default Service;