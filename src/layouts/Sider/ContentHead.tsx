import Icon from '@ant-design/icons';
import { CalendarOutlined } from '@ant-design/icons/lib/icons';
import { Menu, Popover } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Modal from 'antd/lib/modal/Modal';
import { useState } from 'react';
import './ContentHead.css';

const ContentHead = () => {
  const [visible, setVisible] = useState(false);
  const [settingpop, setSettingPop] = useState(false);
  const [tablepop, setTablePop] = useState(false);
  const [calenderpop, setCalenderPop] = useState(false);
  const showsettingModal = () => {
    setSettingPop(!settingpop);
  };

  const hidesettingModal = (newvisible: any) => {
    setSettingPop(newvisible);
  };

  const showModal = () => {
    setVisible(true);
  };

  const cancelHandler = () => {
    setVisible(false);
  };

  const BoardSvg = () => (
    <svg
      width="16"
      height="16"
      role="presentation"
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
        fill="white"
      ></path>
    </svg>
  );
  const BoardIcon = (props: any) => <Icon component={BoardSvg} {...props} />;

  const MemberSvg = () => (
    <svg
      width="16"
      height="16"
      role="presentation"
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0254 3C9.25613 3 7.01123 5.23858 7.01123 8C7.01123 10.7614 9.25613 13 12.0254 13C14.7946 13 17.0395 10.7614 17.0395 8C17.0395 5.23858 14.7946 3 12.0254 3ZM9.01688 8C9.01688 9.65685 10.3638 11 12.0254 11C13.6869 11 15.0338 9.65685 15.0338 8C15.0338 6.34315 13.6869 5 12.0254 5C10.3638 5 9.01688 6.34315 9.01688 8Z"
        fill="white"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0254 11C16.7803 11 20.6765 14.6667 21.0254 19.3194C20.8721 20.2721 20.0439 21 19.0452 21H18.9741C18.9741 21 18.9741 21 18.9741 21L5.0767 21C5.07671 21 5.0767 21 5.0767 21L5.00562 21C4.00691 21 3.1787 20.2721 3.02539 19.3193C3.37428 14.6667 7.27038 11 12.0254 11ZM5.0767 19H18.9741C18.4875 15.6077 15.5618 13 12.0254 13C8.48892 13 5.56331 15.6077 5.0767 19ZM19.0451 19.9769V20.0231C19.0452 20.0154 19.0452 20.0077 19.0452 20C19.0452 19.9923 19.0452 19.9846 19.0451 19.9769Z"
        fill="white"
      ></path>
    </svg>
  );
  const MemberIcon = (props: any) => <Icon component={MemberSvg} {...props} />;

  const SettingSvg = () => (
    <svg
      width="16"
      height="16"
      role="presentation"
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0017 17.0009C9.23868 17.0009 6.99968 14.7609 6.99968 11.9989C6.99968 9.23586 9.23868 6.99686 12.0017 6.99686C14.7647 6.99686 17.0037 9.23586 17.0037 11.9989C17.0037 14.7609 14.7647 17.0009 12.0017 17.0009ZM20.3697 13.8839C19.5867 13.6119 19.0237 12.8749 19.0237 11.9989C19.0237 11.1229 19.5867 10.3859 20.3687 10.1139C20.6057 10.0319 20.7517 9.78086 20.6837 9.53986C20.4847 8.83586 20.2017 8.16886 19.8477 7.54686C19.7297 7.33886 19.4707 7.26186 19.2497 7.35186C18.8647 7.50986 18.4197 7.55086 17.9587 7.43286C17.2847 7.25886 16.7337 6.70986 16.5557 6.03686C16.4337 5.57386 16.4747 5.12686 16.6317 4.73986C16.7207 4.51986 16.6437 4.26086 16.4357 4.14286C15.8187 3.79386 15.1567 3.51386 14.4607 3.31686C14.2187 3.24886 13.9687 3.39386 13.8867 3.63086C13.6147 4.41386 12.8777 4.97686 12.0017 4.97686C11.1267 4.97686 10.3887 4.41386 10.1177 3.63186C10.0347 3.39486 9.78368 3.24886 9.54268 3.31686C8.83468 3.51686 8.16368 3.80186 7.53868 4.15886C7.33768 4.27386 7.25268 4.52586 7.34068 4.74086C7.48768 5.10186 7.53268 5.51386 7.43868 5.94386C7.28368 6.64986 6.72468 7.24086 6.02568 7.42786C5.56768 7.55086 5.12768 7.51186 4.74568 7.35986C4.52568 7.27186 4.26768 7.34986 4.15068 7.55586C3.79768 8.17786 3.51568 8.84586 3.31768 9.54986C3.24968 9.78886 3.39268 10.0369 3.62568 10.1219C4.39668 10.3999 4.94868 11.1319 4.94868 11.9989C4.94868 12.8659 4.39668 13.5979 3.62468 13.8759C3.39168 13.9599 3.24968 14.2079 3.31668 14.4469C3.49368 15.0739 3.73868 15.6729 4.03968 16.2369C4.15868 16.4589 4.43468 16.5349 4.66368 16.4299C5.25868 16.1569 6.00668 16.1659 6.76768 16.6679C6.88468 16.7449 6.99268 16.8529 7.06968 16.9689C7.59668 17.7679 7.58168 18.5489 7.26768 19.1559C7.15268 19.3789 7.21968 19.6569 7.43568 19.7839C8.08968 20.1679 8.79768 20.4709 9.54468 20.6809C9.78568 20.7489 10.0337 20.6049 10.1147 20.3679C10.3837 19.5819 11.1237 19.0149 12.0017 19.0149C12.8797 19.0149 13.6197 19.5819 13.8887 20.3679C13.9697 20.6039 14.2177 20.7489 14.4587 20.6809C15.1957 20.4739 15.8947 20.1749 16.5427 19.7979C16.7607 19.6709 16.8267 19.3899 16.7097 19.1669C16.3917 18.5589 16.3727 17.7739 16.9007 16.9719C16.9777 16.8559 17.0857 16.7469 17.2027 16.6699C17.9747 16.1589 18.7297 16.1569 19.3277 16.4399C19.5567 16.5479 19.8357 16.4729 19.9557 16.2499C20.2597 15.6859 20.5047 15.0859 20.6837 14.4569C20.7517 14.2159 20.6067 13.9659 20.3697 13.8839Z"
        fill="white"
      ></path>
    </svg>
  );
  const SettingIcon = (props: any) => <Icon component={SettingSvg} {...props} />;

  const TableSvg = () => (
    <svg
      width="16"
      height="16"
      role="presentation"
      focusable="false"
      viewBox="0 0 14 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.66683 9.66665C0.93045 9.66665 0.333496 9.06969 0.333496 8.33331V1.66665C0.333496 0.930267 0.93045 0.333313 1.66683 0.333313H12.3335C13.0699 0.333313 13.6668 0.930267 13.6668 1.66665V8.33331C13.6668 9.06969 13.0699 9.66665 12.3335 9.66665H1.66683ZM12.3335 5.66665V4.33331H5.66683V5.66665H12.3335ZM12.3335 2.99998V1.66665H5.66683V2.99998H12.3335ZM12.3335 6.99998V8.33331H5.66683V6.99998H12.3335ZM1.66683 4.33331V5.66665H4.3335V4.33331H1.66683ZM1.66683 6.99998V8.33331H4.3335V6.99998H1.66683ZM1.66683 2.99998V1.66665H4.3335V2.99998H1.66683Z"
        fill="white"
      ></path>
    </svg>
  );
  const TableIcon = (props: any) => <Icon component={TableSvg} {...props} />;

  function getItem(label: any, key: any, icon: any, children: any, type: any) {
    return {
      label,
      key,
      icon,
      children,
      type
    };
  }

  const items = [
    getItem('Boards', 'sub1', <BoardIcon />, null, null),
    getItem(
      <div className="flex items-center">
        <p className="flex-1">Members</p>
        <button
          className=" h-[28px] w-[28px] rounded-[3px] hover:bg-[#d3d3d3]  flex justify-center items-center"
          onClick={showModal}
        >
          <svg
            width="16"
            height="16"
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>,
      'sub2',
      <MemberIcon />,
      null,
      null
    ),
    getItem(
      <div className="flex" onClick={showsettingModal}>
        <p className="flex-1">Setting</p>
        <Popover
          className="rounded-[3px] "
          placement="bottomLeft"
          trigger="click"
          visible={settingpop}
          onVisibleChange={hidesettingModal}
          content={
            <div>
              <ul className="">
                <li className="w-[304px] py-[6px] hover:bg-[#cccccc]">
                  <span className="px-[12px] py-[6px]">Workspace settings</span>
                </li>

                <li className="w-[304px] py-[6px] hover:bg-[#cccccc]">
                  <span className="px-[12px] py-[6px]">Upgrade workspace</span>
                </li>
              </ul>
            </div>
          }
        >
          <span className="flex items-center mr-[6px]">
            <svg
              width="16"
              height="16"
              role="presentation"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z"
                fill="white"
              ></path>
            </svg>
          </span>
        </Popover>
      </div>,
      'sub3',
      <SettingIcon />,
      null,
      null
    )
  ];

  const itemsworkplace = [
    getItem(
      <div className="flex items-center">
        <p className="flex-1">Table</p>
        <Popover
          className="rounded-[3px]"
          placement="bottomLeft"
          trigger="click"
          visible={tablepop}
          onVisibleChange={(newvisible) => setTablePop(newvisible)}
          title={
            <div className="w-full py-2 flex">
              <span className="w-full items-center text-center">Table</span>
              <button className="flex items-center" onClick={() => setTablePop(false)}>
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="close"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </button>
            </div>
          }
          content={
            <div className="w-[304px] flex">
              <span className="flex items-center ">
                <svg
                  width="16"
                  height="16"
                  role="presentation"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4H19C19.552 4 20 4.448 20 5V6H4V5C4 4.448 4.448 4 5 4H9Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M9 11C9 10.4477 9.44772 10 10 10C10.5523 10 11 10.4477 11 11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M13 11C13 10.4477 13.4477 10 14 10C14.5523 10 15 10.4477 15 11V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16V11Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.85795 18.1534L5 7H19L18.142 18.1534C18.0619 19.1954 17.193 20 16.1479 20H7.85206C6.80699 20 5.93811 19.1954 5.85795 18.1534ZM7.85206 18L7.15975 9H16.8402L16.1479 18L7.85206 18Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <p className="px-2">Remove View</p>
            </div>
          }
        >
          <button className=" h-[28px] w-[28px] rounded-[3px] hover:bg-[#d3d3d3] flex justify-center items-center ">
            <svg
              width="16"
              height="16"
              role="presentation"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </Popover>
      </div>,
      'ws1',
      <TableIcon />,
      null,
      null
    ),
    getItem(
      <div className="flex items-center">
        <p className="flex-1">Calender</p>
        <Popover
          className="rounded-[3px]"
          placement="bottomLeft"
          trigger="click"
          visible={calenderpop}
          onVisibleChange={(newvisible) => setCalenderPop(newvisible)}
          title={
            <div className="w-full py-2 flex">
              <span className="w-full items-center text-center">Calender</span>
              <button className="flex items-center" onClick={() => setCalenderPop(false)}>
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="close"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </button>
            </div>
          }
          content={
            <div className="w-[304px] flex">
              <span className="flex items-center ">
                <svg
                  width="16"
                  height="16"
                  role="presentation"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4H19C19.552 4 20 4.448 20 5V6H4V5C4 4.448 4.448 4 5 4H9Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M9 11C9 10.4477 9.44772 10 10 10C10.5523 10 11 10.4477 11 11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M13 11C13 10.4477 13.4477 10 14 10C14.5523 10 15 10.4477 15 11V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16V11Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.85795 18.1534L5 7H19L18.142 18.1534C18.0619 19.1954 17.193 20 16.1479 20H7.85206C6.80699 20 5.93811 19.1954 5.85795 18.1534ZM7.85206 18L7.15975 9H16.8402L16.1479 18L7.85206 18Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <p className="px-2">Remove View</p>
            </div>
          }
        >
          <button className=" h-[28px] w-[28px] rounded-[3px] hover:bg-[#d3d3d3] flex justify-center items-center ">
            <svg
              width="16"
              height="16"
              role="presentation"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </Popover>
      </div>,
      'ws2',
      <CalendarOutlined
        style={{
          height: '16px',
          width: '16px'
        }}
      />,
      null,
      null
    )
  ];
  return (
    <>
      <Modal
        style={{
          minWidth: '600px',
          maxWidth: '600px',
          width: '600px'
        }}
        title="Invite to Workspace"
        visible={visible}
        onCancel={cancelHandler}
        footer={null}
      >
        <input
          className="min-w-[2px] h-[40px] w-full flex-1 overflow-y-hidden outline-none border-[3px] border-[#0079bf]"
          placeholder="Email address or name"
          autoFocus
          onBlur={(event) => event.target.focus()}
        />
        <div className="flex items-center mt-[22px] rounded-[3px]">
          <span className="bg-[#ebecf0] p-[4px] rounded-[3px] ">
            <svg
              width="24"
              height="24"
              role="presentation"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="transparent" fill-opacity="0.01"></rect>
              <path
                d="M12.6539 8.76404C12.4917 8.91817 12.2757 9.00284 12.052 8.99998C11.8282 8.99713 11.6145 8.90698 11.4562 8.74875C11.298 8.59053 11.2078 8.37675 11.205 8.153C11.2021 7.92926 11.2868 7.71325 11.4409 7.55104L12.6549 6.33704C13.0001 5.99183 13.4099 5.71799 13.8609 5.53116C14.3119 5.34433 14.7953 5.24817 15.2834 5.24817C15.7716 5.24817 16.255 5.34433 16.706 5.53116C17.157 5.71799 17.5668 5.99183 17.9119 6.33704C18.2577 6.68195 18.5321 7.09168 18.7193 7.54276C18.9065 7.99385 19.003 8.47743 19.0031 8.96583C19.0031 9.45423 18.9069 9.93785 18.7199 10.389C18.5328 10.8402 18.2586 11.25 17.9129 11.595L16.6989 12.809L15.8949 13.613C15.5498 13.9591 15.1398 14.2338 14.6885 14.4214C14.2371 14.6089 13.7532 14.7057 13.2645 14.7062C12.7757 14.7066 12.2916 14.6108 11.8399 14.4241C11.3882 14.2374 10.9777 13.9635 10.6319 13.618C10.471 13.4571 10.3805 13.2387 10.3805 13.011C10.3805 12.7834 10.471 12.565 10.6319 12.404C10.7929 12.2431 11.0113 12.1526 11.2389 12.1526C11.4666 12.1526 11.685 12.2431 11.8459 12.404C12.6269 13.186 13.8959 13.184 14.6819 12.399L15.4859 11.596L16.6999 10.382C16.8862 10.1963 17.034 9.97569 17.1348 9.73275C17.2356 9.48981 17.2874 9.22935 17.2873 8.96633C17.2873 8.70331 17.2352 8.44289 17.1343 8.20002C17.0333 7.95715 16.8853 7.7366 16.6989 7.55104C16.5132 7.36508 16.2926 7.21757 16.0498 7.11692C15.807 7.01627 15.5468 6.96446 15.2839 6.96446C15.0211 6.96446 14.7609 7.01627 14.5181 7.11692C14.2753 7.21757 14.0547 7.36508 13.8689 7.55104L12.6539 8.76404ZM11.8459 15.236C12.0082 15.0819 12.2242 14.9972 12.4479 15.0001C12.6717 15.0029 12.8854 15.0931 13.0437 15.2513C13.2019 15.4095 13.292 15.6233 13.2949 15.8471C13.2977 16.0708 13.2131 16.2868 13.0589 16.449L11.8449 17.663C11.4998 18.0082 11.09 18.2821 10.639 18.4689C10.188 18.6557 9.70461 18.7519 9.21644 18.7519C8.72827 18.7519 8.24489 18.6557 7.79389 18.4689C7.34288 18.2821 6.9331 18.0082 6.58794 17.663C6.24216 17.3181 5.9678 16.9084 5.78057 16.4573C5.59334 16.0062 5.49692 15.5226 5.49683 15.0342C5.49673 14.5458 5.59297 14.0622 5.78003 13.6111C5.96708 13.1599 6.24129 12.7501 6.58694 12.405L7.80094 11.191L8.60494 10.387C8.95008 10.041 9.36005 9.76628 9.8114 9.57872C10.2627 9.39116 10.7466 9.29438 11.2354 9.29391C11.7242 9.29345 12.2082 9.38931 12.66 9.57601C13.1117 9.76272 13.5221 10.0366 13.8679 10.382C14.0289 10.543 14.1194 10.7614 14.1194 10.989C14.1194 11.2167 14.0289 11.4351 13.8679 11.596C13.707 11.757 13.4886 11.8475 13.2609 11.8475C13.0333 11.8475 12.8149 11.757 12.6539 11.596C12.4674 11.4101 12.2461 11.2627 12.0026 11.1624C11.7591 11.062 11.4983 11.0106 11.2349 11.011C10.9715 11.0115 10.7109 11.0638 10.4677 11.1651C10.2246 11.2663 10.0038 11.4145 9.81794 11.601L9.01394 12.404L7.79994 13.618C7.61366 13.8037 7.46589 14.0244 7.36508 14.2673C7.26428 14.5103 7.21244 14.7707 7.21253 15.0337C7.21263 15.2968 7.26465 15.5572 7.36563 15.8001C7.4666 16.0429 7.61453 16.2635 7.80094 16.449C7.98669 16.635 8.20726 16.7825 8.45006 16.8832C8.69286 16.9838 8.95311 17.0356 9.21594 17.0356C9.47877 17.0356 9.73903 16.9838 9.98182 16.8832C10.2246 16.7825 10.4452 16.635 10.6309 16.449L11.8459 15.236Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <div className="ml-4">
            <p>Invite someone to this Workspace with a link</p>
            <button className="underline">Create link</button>
          </div>
        </div>
      </Modal>

      <Menu
        className=" child:m-0 child:bg-[#49494b] child:text-white hover"
        style={{}}
        mode="inline"
        items={items}
      />
      <Layout className="bg-transparent">
        <Header className="p-0  bg-[transparent] h-auto">
          <p className="text-white h-auto pl-[12px] leading-[30px]">Workspace views </p>
        </Header>
        <Content>
          <Menu
            className=" child:m-0 child:bg-[#49494b] child:text-white"
            style={{}}
            mode="inline"
            items={itemsworkplace}
          />
        </Content>
      </Layout>
    </>
  );
};

export default ContentHead;
