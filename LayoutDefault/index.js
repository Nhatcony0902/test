import { Layout, ConfigProvider, Button, Row, Col } from "antd";
import logo from "../../src/images/logo-fold-white.png"
import logoFold from "../../src/images/logo-white.png"
import "./layoutDefault.scss";
import { SearchOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import Notify from "../../src/components/Notify"
import MenuSider from "../../src/components/Menu";
import { NavLink, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function LayoutDefault() {
  const [callapsed, setCollapsed] = useState(false);
  const siderStyle = {
    overflow: 'auto',
    height: 'auto',
    position: 'fixed',
    insetInlineStart: 0,
    top: 70,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
    zIndex: 1000,
  };


  return (

    <>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              lightSiderBg: '#001529',
              bodyBg: '#121212',
            },
          },
        }}
      >
        <Layout className="layout-default" >
          <Header className="header" style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}>
            <div className={"header__logo " + (callapsed && "header__logo--callapsed")}>
              <img src={callapsed ? logo : logoFold} alt="logo"></img>
            </div>
            <div className="header__nav">
              <div className="header__nav--left">
                <div className="header__collapse" onClick={() => setCollapsed(!callapsed)}>
                  <MenuFoldOutlined style={{ color: "white" }} />
                </div>
                <div className="header__search">
                  <SearchOutlined style={{ color: "white" }} />
                </div>
              </div>
              <div className="header__nav--right">
                <Notify />
              </div>
            </div>
            <div className="header__account">
              <Row gutter={[20, 10]}>
                <Col span={12}>
                  <NavLink to="/Login"><Button type="primary" >Đăng nhập</Button></NavLink>
                </Col>
                <Col span={12}><Button type="primary" >Đăng kí</Button></Col>
              </Row>

            </div>
          </Header>
          <Layout>
            <Sider className="sider" collapsed={callapsed} theme="light" width={280} style={siderStyle}>
              <MenuSider />
            </Sider>

            <Layout style={{ marginLeft: callapsed ? 80 : 280, transition: 'margin-left 0.2s ease', }}>
              <Content style={{
                margin: '24px 16px 0',

              }}>

              </Content>
              <Outlet></Outlet>
            </Layout>

          </Layout>
          <Footer></Footer>
        </Layout>
      </ConfigProvider>


    </>
  );
}
export default LayoutDefault;