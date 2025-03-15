import { Menu } from "antd";
import { HomeOutlined , DashboardOutlined, AccountBookOutlined , ProductOutlined ,BorderlessTableOutlined  } from '@ant-design/icons';

import { Link, NavLink } from "react-router-dom";
import Default from "../../Pages/Default";
function MenuSider(){
  const items = [
    {
      key: '1',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      children: [
        {
          key: '11',
          label: <NavLink to="/Default" >Default</NavLink>
        },
        {
          key: '12',
          label: <NavLink to="/CMR">CMR</NavLink>,
        },
        {
          key: '13',
          label: <NavLink to="/Ecommer">Ecommer</NavLink>
        },
       
      ],
    },
    {
      key: '2',
      icon: <ProductOutlined />,
      label: 'Category',
      children: [
        {
          key: '31',
          label: 'Option 1',
        },
        {
          key: '32',
          label: 'Option 2',
        },
        {
          key: '33',
          label: 'Option 3',
        },
        {
          key: '34',
          label: 'Option 4',
        },
      ],
    },
    {
      key: '3',
      icon: <HomeOutlined />,
      label: <NavLink to="/">Hotel</NavLink>

    },
    
    {
      key: '4',
      icon: <AccountBookOutlined />,
      label: 'Admin',
      children: [
        {
          key: '31',
          label: 'Option 1',
        },
        {
          key: '32',
          label: 'Option 2',
        },
        {
          key: '33',
          label: 'Option 3',
        },
        {
          key: '34',
          label: 'Option 4',
        },
      ],
    },
    {
      key: '5',
      icon: <BorderlessTableOutlined />,
      label: 'About',
      children: [
        {
          key: '31',
          label: 'Option 1',
        },
        {
          key: '32',
          label: 'Option 2',
        },
        {
          key: '33',
          label: 'Option 3',
        },
        {
          key: '34',
          label: 'Option 4',
        },
      ],
    },
  ];

    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={["/"]}
        defaultOpenKeys={["1"]}
        theme="dark"
        items={items}
      />
    );
  };

export default MenuSider;