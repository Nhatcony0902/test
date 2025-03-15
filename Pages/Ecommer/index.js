import { Badge, Col, Progress, Row, Tag, ConfigProvider } from "antd";
import "./ecommer.scss";


import { Column, DualAxes} from '@ant-design/plots';
import React from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
function Ecommer() {
  const uvBillData = [
    { time: '2024-03', value: 350, type: 'online' },
    { time: '2024-04', value: 900, type: 'online' },
    { time: '2024-05', value: 300, type: 'online' },
    { time: '2024-06', value: 450, type: 'online' },
    { time: '2024-07', value: 470, type: 'online' },
    { time: '2024-03', value: 220, type: 'offline' },
    { time: '2024-04', value: 300, type: 'offline' },
    { time: '2024-05', value: 250, type: 'offline' },
    { time: '2024-06', value: 220, type: 'offline' },
    { time: '2024-07', value: 362, type: 'offline' },
  ];

  const transformData = [
    { time: '2024-03', count: 800 },
    { time: '2024-04', count: 600 },
    { time: '2024-05', count: 400 },
    { time: '2024-06', count: 380 },
    { time: '2024-07', count: 220 },
  ];

  const config = {
    xField: 'time',
    legend: true,
    axis: {
      x: { labelFill: 'white' },
      y: { labelFill: 'white' },
    
    },
    children: [
      {
        data: uvBillData,
        type: 'interval',
        yField: 'value',
        colorField: 'type',
        group: true,
        interaction: { elementHighlight: { background: true } },
      },
      {
        data: transformData,
        type: 'line',
        yField: 'count',
        style: { lineWidth: 2 },
        axis: { y: { position: 'right' } },
        interaction: {
          tooltip: {
            crosshairs: false,
            marker: false,
          },
        },
      },
    ],};
  return (
    <>
      <div className="default">

        <Row gutter={[13, 13]}>
          <Col span={10}>
            <Row gutter={[15, 15]}>
              <Col span={12}>
                <div className="default__box" style={{
                  width: 233,
                  height: 190
                }}>
                  <div className="default__box--body" style={{ display: "block" }}>


                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                      <div className="default__box--content" style={{ marginRight: 20 }}>
                        <p style={{ marginBottom: 0 }}>Sales</p>
                        <h2 style={{ marginTop: 0 }}>$23,523</h2>
                      </div>
                      <Tag color="green" bordered={false} >
                        <ArrowUpOutlined />
                        <span style={{ fontWeight: 500 }}>6.71%</span>
                      </Tag>

                    </div>
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
                          }}>Monthly Goal</span>
                        </div>
                        <span style={{
                          color: "#f5f5f5",
                          fontSize: 13,
                          fontWeight: 500
                        }}>70%</span>
                      </div>
                      <Progress percent={70} trailColor="#f5f5f5" showInfo={false} size="small" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="default__box" style={{
                  width: 233,
                  height: 190
                }}>
                  <div className="default__box--body" style={{ display: "block" }}>


                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                      <div className="default__box--content" style={{ marginRight: 20 }}>
                        <p style={{ marginBottom: 0 }}>Margin</p>
                        <h2 style={{ marginTop: 0 }}>$8,753</h2>
                      </div>
                      <Tag color="red" bordered={false}>
                        <ArrowDownOutlined />
                        <span style={{ fontWeight: 500 }}>3.26%</span>
                      </Tag>

                    </div>
                    <div style={{ marginTop: 40 }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                        <div>
                          <Badge color="green"></Badge>
                          <span style={{
                            fontSize: 13,
                            color: "#72849A",
                            marginLeft: 8,
                            fontWeight: 500
                          }}>Monthly Goal</span>
                        </div>
                        <span style={{
                          color: "#f5f5f5",
                          fontSize: 13,
                          fontWeight: 500
                        }}>60%</span>
                      </div>
                      <Progress percent={60} strokeColor="green" trailColor="#f5f5f5" showInfo={false} size="small" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="default__box" style={{
                  width: 233,
                  height: 190
                }}>
                  <div className="default__box--body" style={{ display: "block" }}>


                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                      <div className="default__box--content" style={{ marginRight: 20 }}>
                        <p style={{ marginBottom: 0 }}>Orders</p>
                        <h2 style={{ marginTop: 0 }}>1,753
                        </h2>
                      </div>
                      <Tag color="lime" bordered={false}>
                        <ArrowDownOutlined />
                        <span style={{ fontWeight: 500 }}>2.71%</span>
                      </Tag>

                    </div>
                    <div style={{ marginTop: 40 }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                        <div>
                          <Badge color="orange"></Badge>
                          <span style={{
                            fontSize: 13,
                            color: "#72849A",
                            marginLeft: 8,
                            fontWeight: 500
                          }}>Monthly Goal</span>
                        </div>
                        <span style={{
                          color: "#f5f5f5",
                          fontSize: 13,
                          fontWeight: 500
                        }}>45%</span>
                      </div>
                      <Progress percent={45} strokeColor="orange" trailColor="#f5f5f5" showInfo={false} size="small" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="default__box" style={{
                  width: 233,
                  height: 190
                }}>
                  <div className="default__box--body" style={{ display: "block" }}>


                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                      <div className="default__box--content" style={{ marginRight: 20 }}>
                        <p style={{ marginBottom: 0 }}>Affiliate</p>
                        <h2 style={{ marginTop: 0 }}>236</h2>
                      </div>
                      <Tag color="purple" bordered={false}>

                        <span style={{ fontWeight: 500 }}>N/A</span>
                      </Tag>

                    </div>
                    <div style={{ marginTop: 40 }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                        <div>
                          <Badge color="purple"></Badge>
                          <span style={{
                            fontSize: 13,
                            color: "#72849A",
                            marginLeft: 8,
                            fontWeight: 500
                          }}>Monthly Goal</span>
                        </div>
                        <span style={{
                          color: "#f5f5f5",
                          fontSize: 13,
                          fontWeight: 500
                        }}>50%</span>
                      </div>
                      <Progress percent={50} strokeColor="purple" trailColor="#f5f5f5" showInfo={false} size="small" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
          <div className="default__box" style={{padding:24,
              height:600
            }}>
              <div className="default__box--content">
                <h5 style={{
                  fontSize: 20,
                  margin: 0,
                  color: '#F5F5F5',
                  marginTop: 0,
                }}>Sales Statistics</h5>
              </div>
              <div className="default__container" style={{ height: 500, }}>
                <DualAxes {...config} />
              </div>
            </div>
          </Col>
        </Row>

      </div>
    </>
  )
}
export default Ecommer;