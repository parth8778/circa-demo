import { Layout } from "antd";
const { Header } = Layout;

function MainHeader() {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    </Header>
  );
}

export default MainHeader;
