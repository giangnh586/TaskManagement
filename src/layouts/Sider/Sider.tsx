import { Menu } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import { useState } from 'react';
import ContentHead from './ContentHead';

const MainSider = (props: any) => {
  const [sidervisible,setSiderVisible] = useState(true)

  const onClose = () =>{
    props.Closesider(false)
  }
  return (
    <>
      <Layout
        style={{
          backgroundColor: 'transparent'
        }}
      >
        <Menu className="bg-transparent border-none">
          <Header
            className="flex p-0 border-b"
            style={{
              backgroundColor: 'transparent'
            }}
          >
            <div className="px-[12px] py-[14px] flex">
              <div className="bg-gradient-to-r from-[#403294] to-[#0747a6] h-[36px] w-[36px]">
                <div className="flex items-center justify-center w-full h-full text-white text-[20px]">
                  K
                </div>
              </div>
              <div className="flex-1 px-2">
                <p className="leading-4 text-[14px] text-white">
                  không gian làm việc của hoanggiangd13dt3
                </p>
              </div>
              <button className="bg-[transparent] hover:bg-[#808081] flex items-center m-0 p-[2px] rounded-[3px]" onClick={onClose}>
                <img
                  className="brightness-0 invert"
                  src="https://a.trellocdn.com/prgb/dist/images/workspace-navigation/chevron-left.58243262833f693f6101.svg"
                  alt="arrow icon"
                />
              </button>
            </div>
          </Header>
        </Menu>
        <Content>
          <ContentHead />
        </Content>
      </Layout>
    </>
  );
};

export default MainSider;
