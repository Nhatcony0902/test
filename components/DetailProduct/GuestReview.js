import { Col, ConfigProvider, Row, Modal, Popover, Button, Badge,Progress } from "antd";
import { redirectToPage } from "../../helper";
function GuestReview(props) {
  const { item } = props;
  console.log(item);
  return (
    <>
      <div >
        <ConfigProvider>
          <Row gutter={[20,20]}>
            <Col span={24}>
              <div>
                <Row>
                  <Col span={18}>
                    <h2 className="DetailProducts__Overview--title">Đánh giá của khách</h2>
                  </Col>
                  <Col span={6}>
                    <Button type="primary" size="large" onClick={() => redirectToPage()}>Xem phòng trống</Button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={24}>
              <div className="minibox__comment--title">
                <div className="minibox__comment--rate">{item.rate}</div>
                <p style={{color:"white",
                  marginLeft:5
                }}>Tuyệt vời</p>
              </div>
            </Col>
            <Col span={24}>
            {/* {doi back end} */}
            <h3 style={{color:"white"}}>Hạng mục:</h3>
                <Row gutter={[15,5]}>

                  <Col span={7}>
                  <div style={{ marginTop: 40 }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                        <div>
                          <Badge color="#3F87F5"></Badge>
                          <span style={{
                            fontSize: 13,
                            color: "#72849A",
                            marginLeft: 8,
                            fontWeight: 500
                          }}>Nhân viên phục vụ</span>
                        </div>
                        <span style={{
                          color: "#f5f5f5",
                          fontSize: 13,
                          fontWeight: 500
                        }}>{item.rate}</span>
                      </div>
                      <Progress percent={item.rate*10} trailColor="#f5f5f5" showInfo={false} size="small" />
                    </div>
                  </Col>
                  <Col span={7}>
                  <div style={{ marginTop: 40 }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                        <div>
                          <Badge color="#3F87F5"></Badge>
                          <span style={{
                            fontSize: 13,
                            color: "#72849A",
                            marginLeft: 8,
                            fontWeight: 500
                          }}>Tiện nghi</span>
                        </div>
                        <span style={{
                          color: "#f5f5f5",
                          fontSize: 13,
                          fontWeight: 500
                        }}>{item.rate}</span>
                      </div>
                      <Progress percent={item.rate*10} trailColor="#f5f5f5" showInfo={false} size="small" />
                    </div>
                  </Col>
                  <Col span={7}>
                  <div style={{ marginTop: 40 }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                        <div>
                          <Badge color="#3F87F5"></Badge>
                          <span style={{
                            fontSize: 13,
                            color: "#72849A",
                            marginLeft: 8,
                            fontWeight: 500
                          }}>Sạch sẽ</span>
                        </div>
                        <span style={{
                          color: "#f5f5f5",
                          fontSize: 13,
                          fontWeight: 500
                        }}>{item.rate}</span>
                      </div>
                      <Progress percent={item.rate*10} trailColor="#f5f5f5" showInfo={false} size="small" />
                    </div>
                  </Col>
                  <Col span={7}>
                  <div style={{ marginTop: 40 }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                        <div>
                          <Badge color="#3F87F5"></Badge>
                          <span style={{
                            fontSize: 13,
                            color: "#72849A",
                            marginLeft: 8,
                            fontWeight: 500
                          }}>Thoải mái</span>
                        </div>
                        <span style={{
                          color: "#f5f5f5",
                          fontSize: 13,
                          fontWeight: 500
                        }}>{item.rate}</span>
                      </div>
                      <Progress percent={item.rate*10} trailColor="#f5f5f5" showInfo={false} size="small" />
                    </div>
                  </Col>
                  <Col span={7}>
                  <div style={{ marginTop: 40 }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                        <div>
                          <Badge color="#3F87F5"></Badge>
                          <span style={{
                            fontSize: 13,
                            color: "#72849A",
                            marginLeft: 8,
                            fontWeight: 500
                          }}>Đáng giá tiền</span>
                        </div>
                        <span style={{
                          color: "#f5f5f5",
                          fontSize: 13,
                          fontWeight: 500
                        }}>{item.rate}</span>
                      </div>
                      <Progress percent={item.rate*10} trailColor="#f5f5f5" showInfo={false} size="small" />
                    </div>
                  </Col>
                  <Col span={7}>
                  <div style={{ marginTop: 40 }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                        <div>
                          <Badge color="#3F87F5"></Badge>
                          <span style={{
                            fontSize: 13,
                            color: "#72849A",
                            marginLeft: 8,
                            fontWeight: 500
                          }}>Địa điểm</span>
                        </div>
                        <span style={{
                          color: "#f5f5f5",
                          fontSize: 13,
                          fontWeight: 500
                        }}>{item.rate}</span>
                      </div>
                      <Progress percent={item.rate*10} trailColor="#f5f5f5" showInfo={false} size="small" />
                    </div>
                  </Col>
                  <Col span={7}>
                  <div style={{ marginTop: 40 }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                        <div>
                          <Badge color="#3F87F5"></Badge>
                          <span style={{
                            fontSize: 13,
                            color: "#72849A",
                            marginLeft: 8,
                            fontWeight: 500
                          }}>WiFi miễn phí</span>
                        </div>
                        <span style={{
                          color: "#f5f5f5",
                          fontSize: 13,
                          fontWeight: 500
                        }}>{item.rate}</span>
                      </div>
                      <Progress percent={item.rate*10} trailColor="#f5f5f5" showInfo={false} size="small" />
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
export default GuestReview;