import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

function LeaseDropdown() {
  const onClick = ({ key }: any) => {};

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "1st menu item",
          key: "1",
        },
        {
          label: "2nd menu item",
          key: "2",
        },
        {
          label: "3rd menu item",
          key: "3",
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu}>
      <span onClick={(e) => e.preventDefault()}>
        <Space>
          123 Main street
          <DownOutlined />
        </Space>
      </span>
    </Dropdown>
  );
}

export default LeaseDropdown;
