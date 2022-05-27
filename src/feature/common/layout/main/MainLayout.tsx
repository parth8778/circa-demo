import "./MainLayout.scss";
import { Layout, Menu } from "antd";
import { UserOutlined, UploadOutlined, LoginOutlined } from "@ant-design/icons";
import { useState } from "react";
import MainHeader from "../common/header/Header";
import { Outlet, useNavigate } from "react-router-dom";
const { Sider, Content } = Layout;

function MainLayout() {
  let navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo">
          <h2>Circa</h2>
        </div>
        <Menu selectedKeys={["0"]} theme="dark">
          <Menu.Item key={"0"} icon={<UserOutlined />}>
            {" "}
            Dashboard
          </Menu.Item>
          <Menu.Item key={"1"} icon={<UploadOutlined />}>
            Categories
          </Menu.Item>
          <Menu.Item key={"2"} icon={<LoginOutlined />} onClick={logout}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <MainHeader></MainHeader>
        <Content className="site-layout-background">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
