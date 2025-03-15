import { Col, ConfigProvider, Row, Modal, Popover, Button, Badge, Progress, Tag } from "antd";
import { PiSignOutLight, PiSignInLight } from "react-icons/pi";
import { LuBed } from "react-icons/lu";
import { ImCancelCircle } from "react-icons/im";
import { MdCrib, MdOutlineEmojiPeople, MdOutlinePets, MdOutlinePayment } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import a from "../../images/1.gif"
import b from "../../images/2.gif"
import c from "../../images/3.gif"
import d from "../../images/4.gif"
import e from "../../images/5.gif"
import f from "../../images/6.gif"
import g from "../../images/7.gif"
import h from "../../images/8.gif"
import { redirectToPage } from "../../helper";
function HouseRules(props) {
  const { item } = props;
  console.log(item);
  return (
    <>
      <div style={{ paddingTop: 40 }} >
        <ConfigProvider>
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <div>
                <Row gutter={[20, 20]}>
                  <Col span={18}>
                    <h2 className="DetailProducts__Overview--title">Quy tắc chung</h2>
                  </Col>
                  <Col span={6}>
                    <Button type="primary" size="large" onClick={() => redirectToPage()}>Xem phòng trống</Button>
                  </Col>
                  <Col span={8}>
                    <Tag color="cyan">{item.name}!</Tag>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={24}>
              <div className="hotel">
                <div className="hotel__policy">
                  <Row gutter={[30, 10]}>
                    <Col span={8} style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <PiSignInLight size={30} /> <h3 className="hotel__policy--title">Nhận phòng</h3>
                    </Col>
                    <Col span={16}>
                      <p className="hotel__policy--desc">Từ 15:00<br />Trước đó bạn sẽ cần cho chỗ nghỉ biết giờ bạn sẽ đến nơi.</p>
                    </Col>
                  </Row>
                </div>
                <div className="hotel__policy">
                  <Row gutter={[30, 10]}>
                    <Col span={8} style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <PiSignOutLight size={30} /> <h3 className="hotel__policy--title">Trả phòng</h3>
                    </Col>
                    <Col span={16}>
                      <p className="hotel__policy--desc">Đến 10:00</p>
                    </Col>
                  </Row>
                </div>
                <div className="hotel__policy">
                  <Row gutter={[30, 10]}>
                    <Col span={8} style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <ImCancelCircle fontSize={30} /> <h3 className="hotel__policy--title">Hủy đặt phòng/ Trả trước</h3>
                    </Col>
                    <Col span={16}>
                      <p className="hotel__policy--desc">Các chính sách hủy và thanh toán trước sẽ khác nhau tùy vào từng loại chỗ nghỉ. Vui lòng kiểm tra <Button type="link" style={{ padding: 0 }} onClick={() => redirectToPage()}>các điều kiện</Button> có thể được áp dụng cho mỗi lựa chọn của bạn.</p>
                    </Col>
                  </Row>
                </div>
                <div className="hotel__policy">
                  <Row gutter={[30, 10]}>
                    <Col span={8} style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <FaChildren size={30} /> <h3 className="hotel__policy--title">Trẻ em và giường</h3>
                    </Col>
                    <Col span={16}>
                      <div>
                        <h3 >Chính sách cho trẻ em</h3>
                        <p>Phù hợp cho tất cả trẻ em.</p>

                        <p>Để xem thông tin giá và tình trạng phòng trống chính xác, vui lòng thêm số lượng và độ tuổi của trẻ em trong nhóm của bạn khi tìm kiếm.</p>
                      </div>
                      <h3>Chính sách nôi (cũi) và giường phụ</h3>
                      <div className="hotel__policy--box">
                        <h4 style={{
                          padding: 8,
                          margin: 0,
                        }}>0-2 tuổi</h4>
                        <div className="hotel__policy--content">
                          <Row gutter={[10, 20]}>
                            <Col span={12}>
                              <span>
                                <MdCrib size={20} />
                              </span>
                              <span className="hotel__policy--desc">Có nôi/cũi nếu yêu cầu</span>
                            </Col>
                            <Col span={12}>
                              <Tag color="green">Miễn phí</Tag>
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div className="hotel__policy--box">
                        <h4 style={{
                          padding: 8,
                          margin: 0,
                        }}>0-2 tuổi</h4>
                        <div className="hotel__policy--content">
                          <Row gutter={[10, 20]}>
                            <Col span={12}>
                              <span>
                                <LuBed
                                  size={20} />
                              </span>
                              <span className="hotel__policy--desc">Có giường phụ nếu yêu cầu</span>
                            </Col>
                            <Col span={12}>
                              <Tag color="blue">
                                VND 250.000/người/đêm</Tag>
                            </Col>
                          </Row>
                        </div>

                      </div>
                      <p >Giá cho nôi/cũi và giường phụ chưa được bao gồm trong giá tổng và sẽ cần được thanh toán riêng trong kỳ nghỉ.</p>
                      <p>Số lượng giường phụ và nôi/cũi được phép tùy thuộc vào tùy chọn của bạn. Vui lòng kiểm tra tùy chọn mà bạn đã chọn để biết thêm thông tin.</p>
                      <p>Tất cả nôi/cũi và giường phụ tùy thuộc vào tình trạng có sẵn.</p>
                    </Col>

                  </Row>

                </div>
                <div className="hotel__policy">
                  <Row gutter={[30, 10]}>
                    <Col span={8} style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <MdOutlineEmojiPeople size={30} /> <h3 className="hotel__policy--title">Không giới hạn độ tuổi</h3>
                    </Col>
                    <Col span={16}>
                      <p className="hotel__policy--desc">Không có yêu cầu về độ tuổi khi nhận phòng</p>
                    </Col>
                  </Row>
                </div>
                <div className="hotel__policy">
                  <Row gutter={[30, 10]}>
                    <Col span={8} style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <MdOutlinePets size={30} /> <h3 className="hotel__policy--title">Vật nuôi</h3>
                    </Col>
                    <Col span={16}>
                      <p className="hotel__policy--desc">Vật nuôi không được phép.</p>
                    </Col>
                  </Row>
                </div>
                <div className="hotel__policy">
                  <Row gutter={[30, 10]}>
                    <Col span={8} style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <MdOutlinePayment size={30} /> <h3 className="hotel__policy--title">Các phương thức thanh toán được chấp nhận</h3>
                    </Col>
                    <Col span={16}>
                        <Row gutter={[10,10]} 
                         style={{height:"100%"}}
                        >
                          <Col span={4}><p className="hotel__policy--desc">Bank card</p></Col>
                          <Col span={4}><p><Tag color="green">Tiền mặt</Tag></p></Col>
                        </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </ConfigProvider>
      </div>
    </>
  )
}
export default HouseRules;