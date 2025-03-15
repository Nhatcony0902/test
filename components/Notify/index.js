import { Button, Dropdown } from "antd";
import { BellOutlined } from "@ant-design/icons";
import "./Notify.scss";
function Notify() {
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
        dropdownRender={(menu) => {
          return (
            <>
              <div className="notify">
                <div className="notify__header">
                <div className="notify__header--title">
                    <BellOutlined style={{color:"white"}}/> Notify
                </div>
                <Button type="link">View ALl</Button>
                </div>
                <div className="notify__body">
                    {menu}
                </div>
              </div>
            </>
          )
        }}
      >
        <Button type="text" icon={<BellOutlined style={{color:"white"}}/>}></Button>
      </Dropdown>
    </>
  )
}
export default Notify;