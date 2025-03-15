import { Col, ConfigProvider, Row, Modal, Popover, Button,InputNumber,Table,Tag } from "antd";
import { useState, useEffect, useRef } from "react";
import { TagOutlined, CheckCircleOutlined, CloseCircleOutlined, RightCircleFilled,UserOutlined } from "@ant-design/icons";
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
function InfoPrice(props) {
  const { item } = props;
  console.log(item);
  const [open, setOpen] = useState(false);
  const [openResponsive, setOpenResponsive] = useState(false);
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
  //Time
  const { RangePicker } = DatePicker;
  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };
//bảng check giá đang chờ backend
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
  return (
    <>
      <div>
        <ConfigProvider>
          <div>
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <div >
                  <Row gutter={[10, 10]}>
                    <Col span={18}>
                      <h2 className="DetailProducts__Overview--title">Phòng trống</h2>
                    </Col>
                    <Col span={6} style={{ display: "flex" }}>

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
                </div>
              </Col>
              <Col span={21}>
                <Row >
                    <Col span={7} style={{background:"#FFD700",
                    border:"2px solid #FFD700",
                  
                  }}>
                    <RangePicker disabledDate={disabledDate} size="large" />
                  </Col>
                  <Col span={7}  style={{background:"#FFD700",
                    border:"2px solid #FFD700",
                    
                  }}>
                    <InputNumber
                      prefix={<UserOutlined/>}
                      size="large"
                      placeholder="số lượng người"
                      style={{
                        width: '100%',
                      }}
                    />
                  </Col>
                  <Col span={6}  style={{background:"#FFD700",
                    border:"2px solid #FFD700",
                    
                  }}>
                    <Button type="primary" size="large" style={{width:"100%"}}>Thay đổi tìm kiếm</Button>
                    {/* chờ backend */}
                  </Col>
                    
                </Row>
              </Col>
              <Col span={24}>
                <Table columns={columns} dataSource={data}  pagination={false}/>;
              </Col>

            </Row>
          </div>
        </ConfigProvider>
      </div>
    </>
  )
}
export default InfoPrice;