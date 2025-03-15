import { Badge, Col, Row, Rate } from "antd";
import "./cmr.scss";
import { Column, Line, Liquid } from '@ant-design/plots';
import { useState, useEffect } from "react";
import React from 'react';
import { DollarOutlined, BarChartOutlined, UnorderedListOutlined, StockOutlined, RiseOutlined } from "@ant-design/icons";
const DATA = [1, 2, 3, 4, 5, 6, 7, 8];
function CMR() {
  const data = [
    { month: '1th', value: 3 },

    { month: '3th', value: 3.5 },
    { month: '5th', value: 4 },

    { month: '6th', value: 1.8 },
    { month: '7th', value: 2.5 },

    { month: '9th', value: 4.5 },
    { month: '11th', value: 2 },
    { month: '12th', value: 4 },
  ];
  const config = {
    data,
    xField: 'month',
    yField: 'value',
    point: {
      shapeField: 'square',
      sizeField: 2,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,

    },
    axis: {
      x: { labelFill: 'white' },
      y: { labelFill: 'white' },
    }


  };
  const [data1, setData] = useState(DATA);
  useEffect(() => {
    const time = setInterval(() => {
      setData([
        ...DATA.sort(() => {
          return Math.random() - 0.5;
        }),
      ]);
    }, 30000);
    return () => clearInterval(time);
  }, []);
  const config3 = {
    data: data1.map((value) => ({
      index: value.toString(),
      value,
    })),
    xField: 'index',
    yField: 'value',
    axis: {
      x: { labelFill: 'white' },
      y: { labelFill: 'white' },
    }
  };
  const config4 = {
    percent: 0.7,
    width: 400,
    height: 400,
    style: {
      shape: 'pin',
      textFill: '#fff',
      outlineBorder: 2,
      outlineDistance: 8,
      waveLength: 128,

    },
  };
  return (
    <>
      <div className="default">
        <Row gutter={[13, 13]}>
          <Col span={6}>
            <div className="default__box">
              <div className="default__box--body">

                <div className="default__box--media">
                  <div className="default__box--icon">
                    <DollarOutlined style={{ color: '#3f87f5' }} />
                  </div>
                  <div className="default__box--content">
                    <h2>$14,966</h2>
                    <p>Net Revenue</p>

                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="default__box">
              <div className="default__box--body">

                <div className="default__box--media">
                  <div className="default__box--icon">
                    <BarChartOutlined style={{ color: '#39D5BB' }} />
                  </div>
                  <div className="default__box--content">
                    <h2>26.80%</h2>
                    <p>Bounce Rate</p>

                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="default__box">
              <div className="default__box--body">

                <div className="default__box--media">
                  <div className="default__box--icon">
                    <UnorderedListOutlined style={{ color: '#FFC107' }} />
                  </div>
                  <div className="default__box--content">
                    <h2>3057</h2>
                    <p>Orders</p>

                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="default__box">
              <div className="default__box--body">

                <div className="default__box--media">
                  <div className="default__box--icon">
                    <StockOutlined style={{ color: '#886CFF' }} />
                  </div>
                  <div className="default__box--content">
                    <h2>$6,138</h2>
                    <p>Total Expense</p>

                  </div>
                </div>
              </div>
            </div>
          </Col>

        </Row>
        <Row gutter={[13, 13]}>
          <Col span={6}>
            <div className="default__box" style={{
              padding: 24,
              height: 660
            }}>

              <div className="default__box--content">
                <h5 style={{
                  fontSize: 20,
                  margin: 0,
                  color: '#F5F5F5',
                  marginTop: 0
                }}>Overall Rating</h5>
                <div className="default__box--rate">
                  <h1>4.5</h1>
                  <Rate allowHalf defaultValue={4.5} />
                </div>
                <p>
                  <span style={{ color: '#00c9a7' }}>+1.5 </span>
                  point from last month
                </p>
              </div>
              <div className="default__container">
                <Line {...config} />
              </div>

            </div>
          </Col>
          <Col span={12}>
            <div className="default__box" style={{
              padding: 24,
              height: 660
            }}>

              <div className="default__box--content">
                <h5 style={{
                  fontSize: 20,
                  margin: 0,
                  color: '#F5F5F5',
                  marginTop: 0,
                }}>People accessing</h5>
                <div className="default__box--title">
                  <div className="default__box--price">
                    <p>5,000</p>
                  </div>
                  <div className="default__box--discounting">
                    <StockOutlined />
                    <div className="default__box--desc">
                      <p>0,9%</p>
                      <p className="p2">Than last month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="default__container" style={{ height: 500, }}>
                <Column {...config3} />
              </div>

            </div>
          </Col>
          <Col span={6}>
            <div className="default__box" style={{
              padding: 24,
              height: 660
            }}>

              <div className="default__box--content">
                <h5 style={{
                  fontSize: 20,
                  margin: 0,
                  color: '#F5F5F5',
                  marginTop: 0,
                  marginBottom: 30,
                }}>Monthly Target</h5>


              </div>
              <div className="default__container" style={{
                display: "flex",
                justifyContent: "center"
              }}>
                <Liquid {...config4} />
              </div>
              <div style={{
                display: "flex",
                justifyContent: "center",
              }}>
                <Badge color="#187EF3" style={{
                  width: ".4375rem",
                  height: ".4375rem",
                }} />
                <span style={{ color: "#f5f5f5",
                  marginLeft:5,
                }}>
                  <span style={{fontWeight:600}}>70% </span>
                  of Goal
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default CMR;