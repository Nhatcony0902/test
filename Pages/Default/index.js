import { Badge, Col, Row } from "antd";
import "./defaul.scss";
import { Line, Pie } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';
import { DollarOutlined, LineChartOutlined, UnorderedListOutlined, UserOutlined, RiseOutlined } from "@ant-design/icons";
function Default() {

  const data = [
    { month: '1th', value: 3 },
    { month: '2th', value: 4 },
    { month: '3th', value: 3.5 },
    { month: '3th', value: 5 },
    { month: '5th', value: 4.9 },
    { month: '6th', value: 6 },
    { month: '7th', value: 7 },
    { month: '8th', value: 9 },
    { month: '9th', value: 10 },
    { month: '10th', value: 6 },
    { month: '11th', value: 5 },
    { month: '12th', value: 13 },
  ];
  const config = {
    data,
    xField: 'month',
    yField: 'value',
    point: {
      shapeField: 'square',
      sizeField: 4,
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
  const config2 = {
    data: [
      { type: 'New  ', value: 350 },
      { type: 'Returning', value: 450 },
      { type: 'Others', value: 108 },
     
    ],
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
        
      },
    },
    legend: {
      color: {
        title: false,
        position: 'bottom',
        rowPadding: 5,
       
        
      },
      
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
                    <h2>$23,523</h2>
                    <p>Profit</p>

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
                    <LineChartOutlined style={{ color: '#39D5BB' }} />
                  </div>
                  <div className="default__box--content">
                    <h2>+ 17.21%</h2>
                    <p>Growth</p>

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
                    <h2>3,685</h2>
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
                    <UserOutlined style={{ color: '#886CFF' }} />
                  </div>
                  <div className="default__box--content">
                    <h2>1,832</h2>
                    <p>Customers</p>

                  </div>
                </div>
              </div>
            </div>
          </Col>

        </Row>
        <Row gutter={[20,20]}>
          <Col span={16}>
            <div className="default__box" style={{padding:24,
              height:670
            }}>

              <div className="default__box--content">
                <h5 style={{
                  fontSize: 20,
                  margin: 0,
                  color: '#F5F5F5',
                  marginTop: 20,
                }}>Total Revenue</h5>
                <div className="default__box--title">
                  <div className="default__box--price">
                    <p>$33,333,333</p>
                  </div>
                  <div className="default__box--discounting">
                    <RiseOutlined />
                    <div className="default__box--desc">
                      <p>0,9%</p>
                      <p className="p2">Than last month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="default__container">
                <Line {...config} />
              </div>

            </div>
          </Col>
          <Col span={8}>
            <div className="default__box" style={{padding:24}}>

              <div className="default__box--content">
                <h5 style={{
                  fontSize: 20,
                  margin: 0,
                  color: '#F5F5F5',
                  marginTop: 20,
                }}>Customers</h5>
              </div>
              <div className="default__container">
                <Pie {...config2}></Pie>
              </div>
              <Row>
                <Col span={8}>
                  <div className="content">
                    <div className="content__media">
                      <Badge color="#187EF4"/>
                      <div className="content__desc">
                        <h4>350</h4>
                        <p>New</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="content">
                    <div className="content__media">
                      <Badge color="#02C1C1"/>
                      <div className="content__desc">
                        <h4>450</h4>
                        <p>Returning</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="content">
                    <div className="content__media">
                      <Badge color="#E6834B"/>
                      <div className="content__desc">
                        <h4>108</h4>
                        <p>Others</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Default;