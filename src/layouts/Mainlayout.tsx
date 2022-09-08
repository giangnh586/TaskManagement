import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { useState } from 'react';
import MainContent from './Content/Content';
import MainHeader from './Header/Header';
import MainSider from './Sider/Sider';

const Mainlayout = () => {
  const [sidervisible, setSiderVisible] = useState(true);
  const onClose = () => {
    setSiderVisible(false);
  };
  return (
    <>
      <Layout
        style={{
          minHeight: '100vh',
          maxWidth: '100vw'
        }}
      >
        <Header className="p-0 max-h-[44px]">
          <MainHeader />
        </Header>
        <Layout
          style={{
            backgroundImage: `url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2401x1600/cf8274d3ee4a86a151953a4baad1a1bd/photo-1487446929682-f62f73984006.jpg")`,
            backgroundPosition: '50%',
            backgroundSize: 'cover'
          }}
        >
          {sidervisible ? (
            <Sider
              // collapsed={true}
              width="260px"
              style={{
                backgroundColor: '#49494b',
                opacity: 0.9
              }}
            >
              <MainSider Closesider={onClose} />
            </Sider>
          ) : (
            <Sider
              width="16px"
              style={{
                backgroundColor: '#49494b',
                opacity: 0.9
              }}
            >
              <div className="h-full absolute z-5 w-[16px] ">
                <div
                  className="flex-1 h-full min-h-[100%] flex flex-col items-center"
                  data-test-id="workspace-navigation-collapsed"
                >
                  <button
                    className="flex justify-between flex-col h-full w-full border-solid border-r-[1px]"
                    onClick={() => setSiderVisible(true)}
                  >
                    <span className="rounded-[50%] h-[24px] w-[24px mt-[10px] ml-[6px] bg-[#49494b] hover:opacity-[90%] flex justify-center items-center border-solid border-[1px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.294 9.69805C10.2008 9.60614 10.1268 9.49661 10.0763 9.37584C10.0258 9.25507 9.99976 9.12546 9.99976 8.99455C9.99976 8.86364 10.0258 8.73403 10.0763 8.61327C10.1268 8.4925 10.2008 8.38297 10.294 8.29105C10.4831 8.10449 10.738 7.99988 11.0035 7.99988C11.2691 7.99988 11.524 8.10449 11.713 8.29105L14.678 11.2311C14.7802 11.3324 14.8614 11.453 14.9167 11.5858C14.9721 11.7186 15.0006 11.8611 15.0006 12.0051C15.0006 12.149 14.9721 12.2915 14.9167 12.4243C14.8614 12.5572 14.7802 12.6777 14.678 12.7791L11.723 15.7091C11.534 15.8959 11.2789 16.0007 11.013 16.0007C10.7472 16.0007 10.4921 15.8959 10.303 15.7091C10.2098 15.6171 10.1358 15.5076 10.0853 15.3868C10.0348 15.2661 10.0088 15.1365 10.0088 15.0056C10.0088 14.8746 10.0348 14.745 10.0853 14.6243C10.1358 14.5035 10.2098 14.394 10.303 14.3021L12.621 12.0051L10.294 9.69805V9.69805Z"
                          fill="white"
                          className="usDhrkezeI7RBV"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </Sider>
          )}
          <Content>
            <MainContent />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default Mainlayout;
