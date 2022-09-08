import { DownOutlined } from '@ant-design/icons';
import { Modal, Popover } from 'antd';
import { useState } from 'react';

const HeaderLeft = () => {
  const [text, setText] = useState('NCS');
  const [input, setInput] = useState(false);
  const [star, setStar] = useState(0);
  const [visible, setVisible] = useState(false);
  const [boardvisible, setBoardVisible] = useState(false);
  const [workspacevisible, setWorkSpaceVisible] = useState(false);
  const [workplacevisible, setWorkPlaceVisible] = useState(false);

  const cancelHandler = () => {
    setVisible(false);
  };

  const starCol = ['white', 'yellow'];

  const starHandler = () => {
    if (star === 0) {
      setStar(1);
    } else {
      setStar(0);
    }
  };

  const onInput = () => {
    setInput(!input);
  };

  const list = [
    {
      name: 'Timeline',
      imgURL:
        'https://a.trellocdn.com/prgb/dist/images/views-upsell/timeline.1df2ef6e7cfd3af8f75b.svg',
      content: 'Visually plan time and workload'
    },
    {
      name: 'Table',
      imgURL:
        'https://a.trellocdn.com/prgb/dist/images/views-upsell/table.2678f921501e21b23b35.svg',
      content: 'Display cards in rows and colmns, like a spreadsheet.'
    },
    {
      name: 'Calender',
      imgURL:
        'https://a.trellocdn.com/prgb/dist/images/views-upsell/calendar.fde7d53f0f2ededb3b57.svg',
      content: 'See cards with dates on a calendar.'
    },
    {
      name: 'Dashboard',
      imgURL:
        'https://a.trellocdn.com/prgb/dist/images/views-upsell/dashboard.7c8d3d1ba947aa563852.svg',
      content: 'Generate charts, visuals, and metrics for your work.'
    },
    {
      name: 'Map',
      imgURL: 'https://a.trellocdn.com/prgb/dist/images/views-upsell/map.b57fb00e345ff64bfdd6.svg',
      content: 'Visualize card locations on an interactive map.'
    }
  ];

  return (
    <>
      <div className="flex flex-wrap child:max-h-[36px] px-[12px] py-[8px] child:ml-[4px] ">
        <Popover
          className="rounded-[3px]"
          placement="bottomLeft"
          trigger="click"
          visible={boardvisible}
          onVisibleChange={(event) => setBoardVisible(event)}
          content={
            <div className="w-[384px] px-[32px] h-[90%] will-change[top,left]">
              <div className="w-full py-2 flex border-b mb-[8px]">
                <span className="w-full items-center text-center font-light">Switch view</span>
                <button className="flex items-center" onClick={() => setBoardVisible(false)}>
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

              <div className="">
                <h1 className="text-[20px] font-semibold text-center">See Your Work in new ways</h1>
                <p className="text-center w-[312px]">
                  View key timelines, assignments, data, and more directly from your Trello board
                  with Trello Premium.
                </p>
              </div>
              <div className="my-[15px]">
                <ul>
                  {list.map((detail) => (
                    <li className="inline-flex mb-[8px]">
                      <img className="mr-[15px]" alt="Timeline view" src={detail.imgURL} />
                      <div>
                        <p className="font-semibold">{detail.name}</p>
                        <p className="text-[12px]">{detail.content}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <button className="bg-[#0079bf] px-[12px] py-[6px] w-full rounded-[3px] text-white mb-[8px]">
                  Start free trial
                </button>
                <button className="text-center text-[#5E6C84] mt-[8px] underline w-full">
                  Learn more about Trello Premium
                </button>
              </div>
            </div>
          }
        >
          <div>
            <button className="flex items-center px-[5px] py-[6px] bg-[#49494b] bg-opacity-[0.7] hover:bg-[#0079bf] hover:bg-opacity-70 rounded-[3px]">
              <svg
                width="16"
                height="16"
                role="presentation"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 7V15C2 16.1046 2.89543 17 4 17H6C7.10457 17 8 16.1046 8 15V7C8 5.89543 7.10457 5 6 5H4C2.89543 5 2 5.89543 2 7ZM4 7V15H6V7L4 7Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 7V13C9 14.1046 9.89543 15 11 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H11C9.89543 5 9 5.89543 9 7ZM11 7V13H13V7L11 7Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 17V7C16 5.89543 16.8954 5 18 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H18C16.8954 19 16 18.1046 16 17ZM18 17V7L20 7V17H18Z"
                  fill="white"
                ></path>
              </svg>
              <span className="text-white px-[4px]">Board</span>
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
            </button>
          </div>
        </Popover>

        <div
          className="text-ellipsis whitespace-nowrap h-[32px] overflow-hidden rounded-[3px] hover:bg-[#0079bf] hover:bg-opacity-70 "
          onClick={onInput}
        >
          {!input && (
            <h1 className="text-[18px] font-bold px-[18px] text-white h-[32px] items-center flex">
              {text}
            </h1>
          )}
          {input && (
            <input
              className="text-center text-white  text-[18px] rounded-[3px] font-bold bg-white max-w-[calc(100vw-400px)] overflow-hidden text-ellipsis whitespace-nowrap h-[32px]"
              autoFocus
              onFocus={(event) => event.target.select()}
              onBlur={onInput}
              size={text.length > 0 ? text.length : 1}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          )}
        </div>

        <div
          className="rounded-[3px] bg-[#4d4d4d] hover:bg-[#0079bf] hover:bg-opacity-70 flex justify-center h-[32px] w-[32px]"
          onClick={starHandler}
        >
          <span className="items-center flex justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 41 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.8378 23.64C31.3198 24.142 31.0818 24.868 31.1998 25.58L32.9778 35.42C33.1278 36.254 32.7758 37.098 32.0778 37.58C31.3938 38.08 30.4838 38.14 29.7378 37.74L20.8798 33.12C20.5718 32.956 20.2298 32.868 19.8798 32.858H19.3378C19.1498 32.886 18.9658 32.946 18.7978 33.038L9.93775 37.68C9.49975 37.9 9.00375 37.978 8.51775 37.9C7.33375 37.676 6.54375 36.548 6.73775 35.358L8.51775 25.518C8.63575 24.8 8.39775 24.07 7.87975 23.56L0.657752 16.56C0.0537516 15.974 -0.156248 15.094 0.119752 14.3C0.387752 13.508 1.07175 12.93 1.89775 12.8L11.8378 11.358C12.5938 11.28 13.2578 10.82 13.5978 10.14L17.9778 1.16C18.0818 0.96 18.2158 0.776 18.3778 0.62L18.5578 0.48C18.6518 0.376 18.7598 0.29 18.8798 0.22L19.0978 0.14L19.4378 0H20.2798C21.0318 0.078 21.6938 0.528 22.0398 1.2L26.4778 10.14C26.7978 10.794 27.4198 11.248 28.1378 11.358L38.0778 12.8C38.9178 12.92 39.6198 13.5 39.8978 14.3C40.1598 15.102 39.9338 15.982 39.3178 16.56L31.8378 23.64Z"
                fill={starCol[star]}
              />
            </svg>
          </span>
        </div>

        <span className="border-solid border-l-[1px] border-[#4d4d4d]  float:left h-[16px] mt-2 mb-[12px] flex items-center"></span>
        <Popover
          className="rounded-[3px] max-w-[304px]"
          placement="bottom"
          trigger="click"
          visible={workspacevisible}
          onVisibleChange={(event) => setWorkSpaceVisible(event)}
          title={
            <div className="flex max-w-[304px]">
              <p className="overflow-hidden whitespace-nowrap text-ellipsis px-[32px] py-[8px] text-[14px] font-normal">
                không gian làm việc của hoanggiangd13dt3
              </p>
              <button className="flex items-center" onClick={()=>setWorkSpaceVisible(false)}>
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
            <div className="h-[auto]">
              <ul className="child:h-[32px] child:flex child:items-center">
                <li className=" hover:bg-[#cccccc]">
                  <span className="px-[12px] py-[6px]">Change Workspace...</span>
                </li>

                <li className=" hover:bg-[#cccccc]">
                  <span className="px-[12px] py-[6px]">View Workspace page</span>
                </li>

                <li className=" hover:bg-[#cccccc] border-t ">
                  <span className="px-[12px] py-[6px] mt-[10px]">Try Trello Premium</span>
                </li>
              </ul>
            </div>
          }
        >
          <div className="rounded-[3px] bg-[#4d4d4d] hover:bg-[#0079bf] hover:bg-opacity-70 h-[32px]">
            <span className=" text-white overflow-hidden text-ellipsis whitespace-nowrap h-full flex items-center mx-[12px]">
              không gian làm việc của hoanggiangd13dt3
            </span>
          </div>
        </Popover>
        <span className="border-solid border-l-[1px] border-[#4d4d4d]  float:left h-[16px] mt-2 mb-[12px] flex items-center"></span>

        <Popover
          className="rounded-[3px] max-w-[308px]"
          placement="bottom"
          trigger="click"
          visible={workplacevisible}
          onVisibleChange={(event) => setWorkPlaceVisible(event)}
          title={
            <div className="flex w-[308px]">
              <p className="pl-[32px] ml-[12px] w-full h-[40px] flex items-center">
                Change Visible
              </p>
              <button className="flex items-center" onClick={()=>{setWorkPlaceVisible(false)}}>
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
            <div className="w-[308px]">
              <ul className="child:py-2">
                <li className="hover:bg-[#cccccc]">
                  <button className="text-left">
                    <div className="flex">
                      <span className="flex items-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 35 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.4695 0C23.607 0 28.5454 4.82957 28.5454 10.792V13.8587C31.9901 14.9339 34.5 18.0523 34.5 21.7768V31.6506C34.5 36.2616 30.6773 40 25.9644 40H9.0376C4.32271 40 0.5 36.2616 0.5 31.6506V21.7768C0.5 18.0523 3.01189 14.9339 6.45457 13.8587V10.792C6.4749 4.82957 11.4133 0 17.4695 0ZM17.4898 22.7686C16.5143 22.7686 15.7218 23.5437 15.7218 24.4977V28.9099C15.7218 29.8837 16.5143 30.6588 17.4898 30.6588C18.4857 30.6588 19.2782 29.8837 19.2782 28.9099V24.4977C19.2782 23.5437 18.4857 22.7686 17.4898 22.7686ZM17.5102 3.47809C13.3846 3.47809 10.0314 6.73755 10.0111 10.7523V13.4274H24.9889V10.792C24.9889 6.75743 21.6357 3.47809 17.5102 3.47809Z"
                            fill="#D53939"
                          />
                        </svg>
                      </span>
                      <p className="ml-2">Private</p>
                    </div>
                    <p className="font-normal text-[12px]">
                      Only board members can see and edit this board.
                    </p>
                  </button>
                </li>

                <li className="hover:bg-[#cccccc]">
                  <button className="text-left">
                    <div className="flex">
                      <span className="flex items-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 45 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.3981 21.0792C29.2604 21.0792 35.1199 22.1672 35.1199 26.5207C35.1199 30.8724 29.298 32 22.3981 32C15.5357 32 9.67618 30.9121 9.67618 26.5603C9.67618 22.2068 15.4981 21.0792 22.3981 21.0792ZM33.3701 18.4578C35.9937 18.4091 38.8142 18.7694 39.8564 19.0251C42.0645 19.4592 43.5168 20.3454 44.1186 21.6333C44.6271 22.6906 44.6271 23.9172 44.1186 24.9727C43.1981 26.9703 40.2307 27.6115 39.0774 27.7772C38.8393 27.8133 38.6476 27.6061 38.6727 27.3666C39.2619 21.8314 34.5754 19.2071 33.363 18.6037C33.311 18.5766 33.3003 18.5352 33.3057 18.51C33.3093 18.492 33.3307 18.4632 33.3701 18.4578ZM11.1372 18.454L11.6312 18.4585C11.6706 18.4639 11.6903 18.4927 11.6939 18.5089C11.6992 18.5359 11.6885 18.5756 11.6384 18.6044C10.4242 19.2078 5.73766 21.8321 6.32683 27.3655C6.3519 27.6068 6.16208 27.8122 5.9239 27.778C4.77062 27.6122 1.80326 26.971 0.882785 24.9735C0.372405 23.9162 0.372405 22.6913 0.882785 21.634C1.4845 20.3461 2.93505 19.46 5.14311 19.0241C6.18715 18.7701 9.00588 18.4098 11.6312 18.4585L11.1372 18.454ZM22.3981 0C27.0703 0 30.8166 3.76454 30.8166 8.4657C30.8166 13.1651 27.0703 16.9332 22.3981 16.9332C17.7258 16.9332 13.9795 13.1651 13.9795 8.4657C13.9795 3.76454 17.7258 0 22.3981 0ZM33.8268 1.41179C38.3396 1.41179 41.8836 5.68247 40.6766 10.4395C39.8618 13.642 36.9124 15.7693 33.6262 15.6828C33.2967 15.6738 32.9726 15.6432 32.6592 15.5891C32.4318 15.5495 32.3172 15.2919 32.4461 15.101C33.6997 13.2458 34.4142 11.0141 34.4142 8.61845C34.4142 6.11836 33.6334 3.78759 32.2778 1.8765C32.2348 1.81706 32.2025 1.7252 32.2455 1.65676C32.2813 1.60092 32.3476 1.5721 32.4103 1.55769C32.8669 1.46403 33.3361 1.41179 33.8268 1.41179ZM11.1719 1.41161C11.6625 1.41161 12.1317 1.46385 12.5902 1.55751C12.6511 1.57192 12.7191 1.60254 12.7549 1.65658C12.7961 1.72502 12.7657 1.81688 12.7227 1.87632C11.3671 3.78741 10.5863 6.11818 10.5863 8.61827C10.5863 11.0139 11.3008 13.2456 12.5544 15.1008C12.6833 15.2918 12.5687 15.5493 12.3413 15.589C12.0261 15.6448 11.7037 15.6736 11.3742 15.6826C8.08809 15.7691 5.13863 13.6419 4.32382 10.4393C3.11502 5.68229 6.65903 1.41161 11.1719 1.41161Z"
                            fill="gray"
                          />
                        </svg>
                      </span>
                      <p className="ml-2">Workspace</p>
                    </div>
                    <p className="font-normal text-[12px]">
                      All members of the không gian làm việc của hoanggiangd13dt3 Workspace can see
                      and edit this board.
                    </p>
                  </button>
                </li>

                <li className="hover:bg-[#cccccc]">
                  <button className="text-left">
                    <div className="flex">
                      <span className="flex items-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M42 42H6V10C6 7.8 7.8 6 10 6H38C40.2 6 42 7.8 42 10V42Z"
                            fill="#90CAF9"
                          />
                          <path d="M6 42H42V44H6V42Z" fill="#64B5F6" />
                          <path
                            d="M31 27H37V32H31V27ZM21 27H27V32H21V27ZM11 27H17V32H11V27ZM31 35H37V40H31V35ZM11 35H17V40H11V35ZM31 19H37V24H31V19ZM21 19H27V24H21V19ZM11 19H17V24H11V19ZM31 11H37V16H31V11ZM21 11H27V16H21V11ZM11 11H17V16H11V11ZM21 35H27V44H21V35Z"
                            fill="#1565C0"
                          />
                        </svg>
                      </span>
                      <p className="ml-2">Organization</p>
                    </div>
                    <p className="font-normal text-[12px]">
                      All members of the organization can see this board. The board must be added to
                      an enterprise Workspace to enable this.
                    </p>
                  </button>
                </li>

                <li className="hover:bg-[#cccccc]">
                  <button className="text-left">
                    <div className="flex">
                      <span className="flex items-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_10)">
                            <path
                              d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM10 1.395C7.71781 1.395 5.5291 2.3016 3.91535 3.91535C2.3016 5.5291 1.395 7.71781 1.395 10C1.395 12.2822 2.3016 14.4709 3.91535 16.0847C5.5291 17.6984 7.71781 18.605 10 18.605C12.2822 18.605 14.4709 17.6984 16.0847 16.0847C17.6984 14.4709 18.605 12.2822 18.605 10C18.605 7.71781 17.6984 5.5291 16.0847 3.91535C14.4709 2.3016 12.2822 1.395 10 1.395V1.395ZM12.048 3.488C12.6981 3.73383 13.3061 4.07929 13.85 4.512C13.975 4.608 14.095 4.71 14.213 4.819C14.235 4.838 14.254 4.858 14.275 4.879C14.603 5.182 14.901 5.523 15.165 5.889C15.202 5.94 15.241 5.987 15.275 6.036C15.339 6.13 15.399 6.228 15.459 6.326C15.5622 6.49129 15.6573 6.66149 15.744 6.836C15.797 6.936 15.844 7.045 15.893 7.151C15.926 7.224 15.963 7.299 15.993 7.377C16.066 7.559 16.131 7.742 16.19 7.929C16.209 7.991 16.224 8.057 16.242 8.119C16.3434 8.4748 16.4154 8.83837 16.457 9.206C16.464 9.272 16.474 9.342 16.479 9.407C16.499 9.622 16.512 9.839 16.512 10.057C16.5107 10.483 16.4716 10.908 16.395 11.327C16.381 11.4 16.369 11.474 16.355 11.544C16.315 11.734 16.269 11.92 16.215 12.104C15.706 11.871 15.108 11.528 14.952 11.151C14.668 10.471 13.912 10.131 13.604 9.255C13.097 7.805 13.77 7.843 13.864 6.943C13.908 6.521 13.604 6.433 13.203 6.605C12.267 6.998 11.95 6.847 11.761 6.142C11.572 5.439 11.761 5.243 11.761 5.243C11.123 5.313 11.099 4.536 11.43 4.34C11.66 4.208 11.855 3.803 12.048 3.488V3.488ZM9.374 7.797C9.964 7.527 10.509 7.43 10.437 6.966C10.367 6.507 10.201 6.165 9.279 6.165C8.357 6.165 8.759 7.43 8.003 6.675C7.247 5.925 8.168 6.119 8.546 5.948C8.925 5.776 9.303 5.071 8.641 5.021C7.98 4.974 8.121 5.313 7.601 5.121C7.081 4.925 6.845 5.8 6.513 5.678C6.295 5.596 5.71 5.146 5.322 4.703C4.53027 5.39163 3.90348 6.24945 3.488 7.213C3.601 8.52 4.292 9.206 4.292 9.206C4.292 9.206 4.647 10.057 6.775 11.103C6.775 11.103 7.175 11.127 6.703 10.642C6.231 10.155 5.71 9.547 6.301 9.232C6.891 8.913 7.058 8.94 7.2 9.525C7.341 10.109 7.815 9.765 7.861 9.206C7.909 8.649 8.783 8.066 9.374 7.796V7.797ZM8.924 10.737C9.942 10.737 9.847 11.054 10.651 11.762C11.454 12.466 11.029 13.171 10.626 13.707C10.225 14.241 9.87 14.847 9.681 15.945C9.491 17.039 8.995 16.259 8.831 15.992C8.665 15.723 8.405 15.481 8.477 14.362C8.547 13.244 7.79 13.902 7.531 12.442C7.271 10.984 7.909 10.738 8.925 10.738L8.924 10.737ZM13.901 11.701C14.172 11.528 14.821 11.979 14.681 12.454C14.538 12.929 14.09 12.661 13.865 12.454C13.64 12.248 13.628 11.871 13.901 11.701V11.701Z"
                              fill="#4ECB71"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_10">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p className="ml-2">Public</p>
                    </div>
                    <p className="font-normal text-[12px]">
                      Anyone on the internet (including Google) can see this board. Only board
                      members can edit.
                    </p>
                  </button>
                </li>
              </ul>
            </div>
          }
        >
          <div className="rounded-[3px] bg-[#4d4d4d] hover:bg-[#0079bf] hover:bg-opacity-70 flex items-center p-[12px] h-[32px]">
            <span className="float-left">
              <svg
                width="16"
                height="16"
                viewBox="0 0 45 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.3981 21.0792C29.2604 21.0792 35.1199 22.1672 35.1199 26.5207C35.1199 30.8724 29.298 32 22.3981 32C15.5357 32 9.67618 30.9121 9.67618 26.5603C9.67618 22.2068 15.4981 21.0792 22.3981 21.0792ZM33.3701 18.4578C35.9937 18.4091 38.8142 18.7694 39.8564 19.0251C42.0645 19.4592 43.5168 20.3454 44.1186 21.6333C44.6271 22.6906 44.6271 23.9172 44.1186 24.9727C43.1981 26.9703 40.2307 27.6115 39.0774 27.7772C38.8393 27.8133 38.6476 27.6061 38.6727 27.3666C39.2619 21.8314 34.5754 19.2071 33.363 18.6037C33.311 18.5766 33.3003 18.5352 33.3057 18.51C33.3093 18.492 33.3307 18.4632 33.3701 18.4578ZM11.1372 18.454L11.6312 18.4585C11.6706 18.4639 11.6903 18.4927 11.6939 18.5089C11.6992 18.5359 11.6885 18.5756 11.6384 18.6044C10.4242 19.2078 5.73766 21.8321 6.32683 27.3655C6.3519 27.6068 6.16208 27.8122 5.9239 27.778C4.77062 27.6122 1.80326 26.971 0.882785 24.9735C0.372405 23.9162 0.372405 22.6913 0.882785 21.634C1.4845 20.3461 2.93505 19.46 5.14311 19.0241C6.18715 18.7701 9.00588 18.4098 11.6312 18.4585L11.1372 18.454ZM22.3981 0C27.0703 0 30.8166 3.76454 30.8166 8.4657C30.8166 13.1651 27.0703 16.9332 22.3981 16.9332C17.7258 16.9332 13.9795 13.1651 13.9795 8.4657C13.9795 3.76454 17.7258 0 22.3981 0ZM33.8268 1.41179C38.3396 1.41179 41.8836 5.68247 40.6766 10.4395C39.8618 13.642 36.9124 15.7693 33.6262 15.6828C33.2967 15.6738 32.9726 15.6432 32.6592 15.5891C32.4318 15.5495 32.3172 15.2919 32.4461 15.101C33.6997 13.2458 34.4142 11.0141 34.4142 8.61845C34.4142 6.11836 33.6334 3.78759 32.2778 1.8765C32.2348 1.81706 32.2025 1.7252 32.2455 1.65676C32.2813 1.60092 32.3476 1.5721 32.4103 1.55769C32.8669 1.46403 33.3361 1.41179 33.8268 1.41179ZM11.1719 1.41161C11.6625 1.41161 12.1317 1.46385 12.5902 1.55751C12.6511 1.57192 12.7191 1.60254 12.7549 1.65658C12.7961 1.72502 12.7657 1.81688 12.7227 1.87632C11.3671 3.78741 10.5863 6.11818 10.5863 8.61827C10.5863 11.0139 11.3008 13.2456 12.5544 15.1008C12.6833 15.2918 12.5687 15.5493 12.3413 15.589C12.0261 15.6448 11.7037 15.6736 11.3742 15.6826C8.08809 15.7691 5.13863 13.6419 4.32382 10.4393C3.11502 5.68229 6.65903 1.41161 11.1719 1.41161Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>Workplace visible</span>
          </div>
        </Popover>

        <span className="border-solid border-l-[1px] border-[#4d4d4d]  float:left h-[16px] mt-2 mb-[12px] flex items-center"></span>

        <div className="flex flex-nowrap h-[32px] items-center">
          <div className="flex mr-[4px]">
            <a className="z-10" href="#">
              <img
                className="h-[28px] w-[28p] rounded-[50%]"
                height="30"
                width="30"
                src="https://trello-members.s3.amazonaws.com/62faf6d2b32a3a3ba0c6e9a0/0cfa9d3f4ca4fa663396fb4c467e41fc/30.png"
                srcSet="https://trello-members.s3.amazonaws.com/62faf6d2b32a3a3ba0c6e9a0/0cfa9d3f4ca4fa663396fb4c467e41fc/30.png 1x, https://trello-members.s3.amazonaws.com/62faf6d2b32a3a3ba0c6e9a0/0cfa9d3f4ca4fa663396fb4c467e41fc/50.png 2x"
                alt="Quang Duật Trần (quangduttrn)"
                title="Quang Duật Trần (quangduttrn)"
              />
            </a>
            <a className="ml-[-2px]" href="#">
              <img
                className="h-[28px] w-[28p] rounded-[50%]"
                height="30"
                width="30"
                src="https://trello-members.s3.amazonaws.com/5c51cc383059ad451b7aaf52/3d7b9ca19a3cdd5e1190396921ed02c4/30.png"
                srcSet="https://trello-members.s3.amazonaws.com/5c51cc383059ad451b7aaf52/3d7b9ca19a3cdd5e1190396921ed02c4/30.png 1x, https://trello-members.s3.amazonaws.com/5c51cc383059ad451b7aaf52/3d7b9ca19a3cdd5e1190396921ed02c4/50.png 2x"
                alt="giangnh25 (hoanggiangd13dt31)"
                title="giangnh25 (hoanggiangd13dt31)"
              />
            </a>
          </div>
          <button
            className=" flex justify-center h-[32px] hover:bg-[#0079bf] hover:bg-opacity-70 items-center rounded-[3px] px-2 bg-[#4d4d4d]"
            onClick={() => setVisible(true)}
          >
            <span className="h-[16px] w-[16px]">
              <svg
                width="16"
                height="16"
                role="presentation"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 9.44777 7.61532 10.7518 8.59871 11.6649C5.31433 13.0065 3 16.233 3 20C3 20.5523 3.44772 21 4 21H12C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19H5.07089C5.55612 15.6077 8.47353 13 12 13ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M17 14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H19V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V18H15C14.4477 18 14 17.5523 14 17C14 16.4477 14.4477 16 15 16H17V14Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            Share
          </button>
        </div>
      </div>

      <Modal title="Share board" visible={visible} onCancel={cancelHandler} footer={null}>
        <div className="">
          <div className="flex h-[40px]">
            <input
              className="h-full w-full overflow-y-hidden outline-none border-[3px] border-[#0079BF]"
              placeholder="Email address or name"
            />

            <button className="flex items-center justify-center bg-gray-500 w-[97px] mx-[2px] px-[4px] rounded-[3px]">
              <span className="w-full">Member</span>
              <DownOutlined
                style={{
                  marginTop: '2px',
                  marginRight: '4px',
                  width: '10px',
                  height: '10px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              />
            </button>
            <button className="flex items-center mx-[2px] bg-[#0079BF] text-white px-[4px] rounded-[3px]">
              <span className="px-[12px]">Share</span>
            </button>
          </div>
          <div>
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
                <p>Share this board with a link</p>
                <button className="underline">Create link</button>
              </div>
            </div>

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
              <div className="ml-4 w-full">
                <p>Quang Duat Tran (you)</p>
                <div>@quangduttrn &nbsp;•&nbsp; Workspace admin</div>
              </div>
              <button>Admin</button>
            </div>

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
              <div className="ml-4 w-full">
                <p>giangnh25</p>
                <div>@hoanggiangd13dt31&nbsp;•&nbsp;Workspace admin</div>
              </div>
              <button>Admin</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HeaderLeft;
