import ContentHeader from './ContentHeader';
import Layout, { Content } from 'antd/lib/layout/layout';
import ContentBody from './ContentBody';

const MainContent = () => {
  return (
    <>
      <Layout className="bg-transparent max-w-full">
        <ContentHeader />
        <Content>
          <ContentBody />
        </Content>
      </Layout>
    </>
  );
};
export default MainContent;
