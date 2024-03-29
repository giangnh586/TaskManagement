import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import MainContent from "layouts/Content/Content";
import MainHeader from "layouts/Header/Header";
import MainSider from "layouts/Sider/Sider";
// import './App.css';

export default function App() {
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
          maxWidth: "100vw",
        }}
      >
        <Header className="p-0 max-h-[44px]">
          <MainHeader />
        </Header>
        <Layout
          style={{
            backgroundImage: `url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2401x1600/cf8274d3ee4a86a151953a4baad1a1bd/photo-1487446929682-f62f73984006.jpg")`,
            backgroundPosition: "50%",
            backgroundSize: "cover",
          }}
        >
          <Sider
            // collapsed={true}
            width="260px"
            style={{
              backgroundColor: "#49494b",
              opacity: 0.9,
            }}
          >
            <MainSider />
          </Sider>
          <Content><MainContent/></Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </>
  );
}
