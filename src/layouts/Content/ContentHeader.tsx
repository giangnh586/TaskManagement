import { Space } from "antd";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const ContentHeader = () => {
  return (
    <div className="child:text-white">
      <div className="float-left">
        <HeaderLeft />
      </div>
      <div className="float-right">
        <HeaderRight />
      </div>
    </div>
  );
};
export default ContentHeader;
