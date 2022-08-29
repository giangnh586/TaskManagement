import ContentHeader from "./ContentHeader";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import { Space } from "antd";

const MainContent = () => {
  return (
    <>
      <Layout className="bg-transparent max-w-full">
        <ContentHeader />
        <Content></Content>
      </Layout>
    </>
  );
};
export default MainContent;
