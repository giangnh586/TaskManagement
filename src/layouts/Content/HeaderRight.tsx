import { Popover } from 'antd';
import { useState } from 'react';

const HeaderRight = () => {
  const [powervisible, setPowerVisible] = useState(false);
  const [autovisible, setAutoVisible] = useState(false);
  const [filtervisible, setFilterVisible] = useState(false);
  const [menuvisible, setMenuVisible] = useState(false);
  return (
    <>
      <div className="flex flex-wrap child:max-h-[36px] px-[12px] py-[8px] child:ml-[4px]">
        <Popover
          visible={powervisible}
          onVisibleChange={(event) => setPowerVisible(event)}
          trigger="click"
          title={
            <div className="flex max-w-[304px]">
              <p className="overflow-hidden w-full text-center whitespace-nowrap text-ellipsis px-[32px] py-[8px] text-[14px] font-normal">
                Power-Ups
              </p>
              <button className="flex items-center" onClick={() => setPowerVisible(false)}>
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
            <div className="w-[304px]">
              <div className="flex justify-center w-full">
                <img
                  className="w-[164px] h-[147px] mb-[12px]"
                  src="https://a.trellocdn.com/prgb/dist/images/no-enabled-plugins.d7d9c50ab2371ecaa5b6.png"
                  alt="error"
                />
              </div>
              <div>
                <p className="text-center px-4 my-4">
                  Bring additional features to your boards and integrate apps like Google Drive,
                  Dropbox, and more.
                </p>
                <button className="w-full rounded-[3px] bg-[#0079bf] py-2 text-white">
                  Add Power-Ups
                </button>
              </div>
            </div>
          }
        >
          <div className="rounded-[3px] bg-[#4d4d4d] hover:bg-[#0079bf] hover:bg-opacity-70 flex items-center p-[12px] h-[32px]">
            <span className="float-left pr-[8px]">
              <svg
                width="16"
                height="16"
                role="presentation"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5009 2.65511C18.4967 2.5456 19.5352 2.80718 20.364 3.63597L18.9498 5.05019C18.6192 4.71958 18.2151 4.58335 17.7106 4.63884C17.1593 4.69947 16.4959 4.96246 15.7486 5.38541C15.0122 5.80221 14.272 6.32856 13.5675 6.8454C13.4614 6.92326 13.3548 7.00186 13.2485 7.08031C12.6795 7.50008 12.1166 7.91532 11.6552 8.18878C11.1608 8.48182 10.6363 8.46971 10.3204 8.43815C9.98837 8.40498 9.19934 8.39748 7.94353 8.81849C7.16614 9.07911 6.21617 9.69953 5.40597 10.3177L5.34387 10.3653C5.59079 10.4171 5.85122 10.4646 6.11263 10.5076C6.62099 10.5913 7.11123 10.6543 7.47593 10.6964C7.65774 10.7174 7.80708 10.7331 7.9103 10.7434C7.96189 10.7486 8.00189 10.7525 8.02858 10.755L8.0584 10.7578L8.06686 10.7585L8.96578 11.8603L8.96537 11.8658L8.96296 11.8884C8.96079 11.909 8.95758 11.9404 8.95366 11.9813C8.9458 12.0632 8.93516 12.1826 8.92441 12.3287C8.9028 12.6224 8.88136 13.0163 8.88048 13.4263C8.87958 13.8425 8.90011 14.2437 8.95265 14.563C8.9897 14.7881 9.03099 14.8963 9.04531 14.9338C9.04927 14.9442 9.05033 14.9497 9.05033 14.9497C9.05033 14.9497 9.05582 14.9507 9.06621 14.9547C9.10371 14.969 9.2119 15.0103 9.43702 15.0474C9.75627 15.0999 10.1575 15.1204 10.5737 15.1195C10.9837 15.1186 11.3777 15.0972 11.6714 15.0756L12.1391 15.0341L13.2414 15.933L13.3036 16.5241C13.3457 16.8888 13.4087 17.379 13.4924 17.8874C13.5354 18.1488 13.583 18.4092 13.6347 18.6561L13.6823 18.594C14.3005 17.7838 14.9209 16.8339 15.1815 16.0565C15.6025 14.8007 15.595 14.0116 15.5619 13.6796C15.5303 13.3637 15.5182 12.8392 15.8112 12.3448C16.0847 11.8834 16.4999 11.3206 16.9197 10.7515C16.9981 10.6452 17.0767 10.5386 17.1546 10.4325C17.6715 9.72798 18.1978 8.98784 18.6146 8.25143C19.0376 7.50416 19.3005 6.84067 19.3612 6.28939C19.4167 5.78487 19.2804 5.38079 18.9498 5.05019L20.364 3.63597C21.1928 4.46477 21.4544 5.50334 21.3449 6.4991C21.2405 7.4481 20.8244 8.39124 20.3504 9.22877C19.8702 10.0772 19.2817 10.9 18.762 11.6084C18.674 11.7284 18.5889 11.8439 18.5069 11.9552C18.0946 12.5148 17.7615 12.9669 17.5439 13.3284C17.5413 13.3535 17.5403 13.3991 17.5477 13.4727C17.6103 14.0997 17.58 15.1726 17.0735 16.6835C16.7017 17.7925 15.9064 18.9623 15.2669 19.8003C14.9374 20.2322 14.6293 20.6014 14.4034 20.8629C14.2902 20.9939 14.1971 21.0986 14.1314 21.1714C14.0985 21.2078 14.0725 21.2363 14.0543 21.2561L14.0267 21.286L14.0239 21.289C13.8388 21.4871 13.5813 21.6021 13.3108 21.6073C13.0403 21.6124 12.7798 21.5076 12.5889 21.3167C12.3731 21.1009 12.2313 20.8327 12.1361 20.6177C12.0339 20.3868 11.9481 20.1296 11.8751 19.8725C11.729 19.3576 11.6128 18.7648 11.5231 18.2197C11.4566 17.8154 11.4027 17.425 11.3611 17.0937C11.1199 17.1058 10.8496 17.1146 10.5694 17.1152C10.1037 17.1162 9.57892 17.0947 9.10468 17.0166C8.69213 16.9487 8.05261 16.7804 7.63611 16.3639C7.21962 15.9474 7.05129 15.3079 6.9834 14.8953C6.90535 14.4211 6.88378 13.8964 6.88478 13.4306C6.88539 13.1504 6.89426 12.8801 6.90635 12.6389C6.57502 12.5974 6.18466 12.5434 5.78029 12.4769C5.23522 12.3872 4.64237 12.271 4.12751 12.1249C3.8704 12.0519 3.61317 11.9661 3.38231 11.8639C3.16733 11.7687 2.89915 11.6269 2.68332 11.4111C2.49244 11.2202 2.38758 10.9597 2.39276 10.6892C2.39794 10.4187 2.51272 10.1614 2.71081 9.97631L2.71401 9.97332L2.72063 9.96718L2.74387 9.94573C2.76373 9.92748 2.79221 9.90147 2.82863 9.86862C2.90143 9.80296 3.00612 9.70979 3.13714 9.59661C3.39866 9.37069 3.76781 9.06262 4.19969 8.73309C5.03769 8.09367 6.20752 7.29836 7.31652 6.92656C8.8274 6.42004 9.90036 6.3897 10.5273 6.45233C10.6009 6.45968 10.6465 6.45871 10.6716 6.45614C11.0331 6.23853 11.4852 5.90543 12.0448 5.49314C12.1561 5.41114 12.2716 5.32601 12.3916 5.23804C13.1 4.71833 13.9228 4.12982 14.7712 3.64963C15.6088 3.1756 16.5519 2.75948 17.5009 2.65511Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M15.4143 8.58572C15.8048 8.97624 16.438 8.97624 16.8285 8.58572C17.219 8.1952 17.219 7.56203 16.8285 7.17151C16.438 6.78098 15.8048 6.78098 15.4143 7.17151C15.0238 7.56203 15.0238 8.1952 15.4143 8.58572Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span>Power-Ups</span>
          </div>
        </Popover>

        <Popover
          visible={autovisible}
          onVisibleChange={(event) => setAutoVisible(event)}
          trigger="click"
          title={
            <div className="flex max-w-[304px]">
              <p className="overflow-hidden w-full text-center whitespace-nowrap text-ellipsis px-[32px] py-[8px] text-[14px] font-normal">
                Automation
              </p>
              <button className="flex items-center" onClick={() => setAutoVisible(false)}>
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
            <div className="w-[301px] ">
              <div className="hover:bg-gray-200 cursor-pointer">
                <div className="flex">
                  <svg
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 5C9.31173 5 10.4264 5.84116 10.8342 7.01368C10.8881 7.00468 10.9435 7 11 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H11C10.9435 9 10.8881 8.99532 10.8342 8.98632C10.4264 10.1588 9.31173 11 8 11C6.68827 11 5.57361 10.1588 5.1658 8.98632C5.11187 8.99532 5.05648 9 5 9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7H5C5.05648 7 5.11187 7.00468 5.1658 7.01368C5.57361 5.84116 6.68827 5 8 5ZM18.8342 15.0137C18.4264 13.8412 17.3117 13 16 13C14.6883 13 13.5736 13.8412 13.1658 15.0137C13.1119 15.0047 13.0565 15 13 15H4C3.44772 15 3 15.4477 3 16C3 16.5523 3.44771 17 4 17H13C13.0565 17 13.1119 16.9953 13.1658 16.9863C13.5736 18.1588 14.6883 19 16 19C17.3117 19 18.4264 18.1588 18.8342 16.9863C18.8881 16.9953 18.9435 17 19 17H20C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15H19C18.9435 15 18.8881 15.0047 18.8342 15.0137ZM17 16C17 16.5527 16.5527 17 16 17C15.4473 17 15 16.5527 15 16C15 15.4473 15.4473 15 16 15C16.5527 15 17 15.4473 17 16ZM8 9C8.55272 9 9 8.55272 9 8C9 7.44728 8.55272 7 8 7C7.44728 7 7 7.44728 7 8C7 8.55272 7.44728 9 8 9Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p>Rule</p>
                </div>
                <span className="text-[12px]">
                  Create rules that automatically respond to actions, schedules, or a card's due
                  date.
                </span>
              </div>
              <div className="hover:bg-gray-200 cursor-pointer">
                <div className="flex">
                  <svg
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 5C9.31173 5 10.4264 5.84116 10.8342 7.01368C10.8881 7.00468 10.9435 7 11 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H11C10.9435 9 10.8881 8.99532 10.8342 8.98632C10.4264 10.1588 9.31173 11 8 11C6.68827 11 5.57361 10.1588 5.1658 8.98632C5.11187 8.99532 5.05648 9 5 9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7H5C5.05648 7 5.11187 7.00468 5.1658 7.01368C5.57361 5.84116 6.68827 5 8 5ZM18.8342 15.0137C18.4264 13.8412 17.3117 13 16 13C14.6883 13 13.5736 13.8412 13.1658 15.0137C13.1119 15.0047 13.0565 15 13 15H4C3.44772 15 3 15.4477 3 16C3 16.5523 3.44771 17 4 17H13C13.0565 17 13.1119 16.9953 13.1658 16.9863C13.5736 18.1588 14.6883 19 16 19C17.3117 19 18.4264 18.1588 18.8342 16.9863C18.8881 16.9953 18.9435 17 19 17H20C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15H19C18.9435 15 18.8881 15.0047 18.8342 15.0137ZM17 16C17 16.5527 16.5527 17 16 17C15.4473 17 15 16.5527 15 16C15 15.4473 15.4473 15 16 15C16.5527 15 17 15.4473 17 16ZM8 9C8.55272 9 9 8.55272 9 8C9 7.44728 8.55272 7 8 7C7.44728 7 7 7.44728 7 8C7 8.55272 7.44728 9 8 9Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p>Buttons</p>
                </div>
                <span className="text-[12px]">
                  Create custom buttons on the back of every card or at the top of the board.
                </span>
              </div>
              <div className="hover:bg-gray-200 cursor-pointer">
                <div className="flex">
                  <svg
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 5C9.31173 5 10.4264 5.84116 10.8342 7.01368C10.8881 7.00468 10.9435 7 11 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H11C10.9435 9 10.8881 8.99532 10.8342 8.98632C10.4264 10.1588 9.31173 11 8 11C6.68827 11 5.57361 10.1588 5.1658 8.98632C5.11187 8.99532 5.05648 9 5 9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7H5C5.05648 7 5.11187 7.00468 5.1658 7.01368C5.57361 5.84116 6.68827 5 8 5ZM18.8342 15.0137C18.4264 13.8412 17.3117 13 16 13C14.6883 13 13.5736 13.8412 13.1658 15.0137C13.1119 15.0047 13.0565 15 13 15H4C3.44772 15 3 15.4477 3 16C3 16.5523 3.44771 17 4 17H13C13.0565 17 13.1119 16.9953 13.1658 16.9863C13.5736 18.1588 14.6883 19 16 19C17.3117 19 18.4264 18.1588 18.8342 16.9863C18.8881 16.9953 18.9435 17 19 17H20C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15H19C18.9435 15 18.8881 15.0047 18.8342 15.0137ZM17 16C17 16.5527 16.5527 17 16 17C15.4473 17 15 16.5527 15 16C15 15.4473 15.4473 15 16 15C16.5527 15 17 15.4473 17 16ZM8 9C8.55272 9 9 8.55272 9 8C9 7.44728 8.55272 7 8 7C7.44728 7 7 7.44728 7 8C7 8.55272 7.44728 9 8 9Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p>Email Reports</p>
                </div>
                <span className="text-[12px]">
                  Set up email reports, such as a weekly summary of all cards that are due within 7
                  days.
                </span>
              </div>
            </div>
          }
        >
          <div className="rounded-[3px] bg-[#4d4d4d] hover:bg-[#0079bf] hover:bg-opacity-70 flex items-center p-[12px] h-[32px]">
            <span className="float-left pr-[8px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 26 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 9.54643H17.1321L24.2071 0.607142C24.3536 0.417856 24.2214 0.142856 23.9821 0.142856H10.2857C10.1857 0.142856 10.0893 0.196428 10.0393 0.285714L0.785714 16.2679C0.675 16.4571 0.810714 16.6964 1.03214 16.6964H7.26071L4.06786 29.4679C4 29.7464 4.33571 29.9429 4.54286 29.7429L25.1964 10.0357C25.3821 9.86071 25.2571 9.54643 25 9.54643ZM8.22143 22.875L10.375 14.2679H4.75357L11.525 2.575H19.5464L12.1071 11.9786H19.6429L8.22143 22.875Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>Automation</span>
          </div>
        </Popover>

        <span className="border-solid border-l-[1px] border-[#4d4d4d]  float:left h-[16px] mt-2 mb-[12px] flex items-center"></span>
        <Popover
          visible={filtervisible}
          onVisibleChange={(event) => setFilterVisible(event)}
          trigger="click"
          title={
            <div className="flex ">
              <p className="overflow-hidden w-full text-center whitespace-nowrap text-ellipsis px-[32px] py-[8px] text-[14px] font-normal">
                Filter
              </p>
              <button className="flex items-center" onClick={() => setFilterVisible(false)}>
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
            <div className="w-[384px]">
              <div>
                <p className="text-[12px]">Keyword</p>
                <input
                  className="w-full outline-none border p-2"
                  placeholder="Enter a keyword..."
                />
                <p className="text-[9px]">Search cards, members, labels, and more.</p>
              </div>
              <div className="child:my-[5px]">
                <p className="text-[12px]">Member</p>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <span className="rounded-[50%] ml-[20px] mr-[10px] bg-gray-200 ">
                    <svg
                      width="20"
                      height="20"
                      role="presentation"
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0254 3C9.25613 3 7.01123 5.23858 7.01123 8C7.01123 10.7614 9.25613 13 12.0254 13C14.7946 13 17.0395 10.7614 17.0395 8C17.0395 5.23858 14.7946 3 12.0254 3ZM9.01688 8C9.01688 9.65685 10.3638 11 12.0254 11C13.6869 11 15.0338 9.65685 15.0338 8C15.0338 6.34315 13.6869 5 12.0254 5C10.3638 5 9.01688 6.34315 9.01688 8Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0254 11C16.7803 11 20.6765 14.6667 21.0254 19.3194C20.8721 20.2721 20.0439 21 19.0452 21H18.9741C18.9741 21 18.9741 21 18.9741 21L5.0767 21C5.07671 21 5.0767 21 5.0767 21L5.00562 21C4.00691 21 3.1787 20.2721 3.02539 19.3193C3.37428 14.6667 7.27038 11 12.0254 11ZM5.0767 19H18.9741C18.4875 15.6077 15.5618 13 12.0254 13C8.48892 13 5.56331 15.6077 5.0767 19ZM19.0451 19.9769V20.0231C19.0452 20.0154 19.0452 20.0077 19.0452 20C19.0452 19.9923 19.0452 19.9846 19.0451 19.9769Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <p>No members</p>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <span className="rounded-[50%] ml-[20px] mr-[10px] bg-gray-200 ">
                    <svg
                      width="20"
                      height="20"
                      role="presentation"
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0254 3C9.25613 3 7.01123 5.23858 7.01123 8C7.01123 10.7614 9.25613 13 12.0254 13C14.7946 13 17.0395 10.7614 17.0395 8C17.0395 5.23858 14.7946 3 12.0254 3ZM9.01688 8C9.01688 9.65685 10.3638 11 12.0254 11C13.6869 11 15.0338 9.65685 15.0338 8C15.0338 6.34315 13.6869 5 12.0254 5C10.3638 5 9.01688 6.34315 9.01688 8Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0254 11C16.7803 11 20.6765 14.6667 21.0254 19.3194C20.8721 20.2721 20.0439 21 19.0452 21H18.9741C18.9741 21 18.9741 21 18.9741 21L5.0767 21C5.07671 21 5.0767 21 5.0767 21L5.00562 21C4.00691 21 3.1787 20.2721 3.02539 19.3193C3.37428 14.6667 7.27038 11 12.0254 11ZM5.0767 19H18.9741C18.4875 15.6077 15.5618 13 12.0254 13C8.48892 13 5.56331 15.6077 5.0767 19ZM19.0451 19.9769V20.0231C19.0452 20.0154 19.0452 20.0077 19.0452 20C19.0452 19.9923 19.0452 19.9846 19.0451 19.9769Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <p>No members</p>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <span className="rounded-[50%] ml-[20px] mr-[10px] bg-gray-200 ">
                    <svg
                      width="20"
                      height="20"
                      role="presentation"
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0254 3C9.25613 3 7.01123 5.23858 7.01123 8C7.01123 10.7614 9.25613 13 12.0254 13C14.7946 13 17.0395 10.7614 17.0395 8C17.0395 5.23858 14.7946 3 12.0254 3ZM9.01688 8C9.01688 9.65685 10.3638 11 12.0254 11C13.6869 11 15.0338 9.65685 15.0338 8C15.0338 6.34315 13.6869 5 12.0254 5C10.3638 5 9.01688 6.34315 9.01688 8Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0254 11C16.7803 11 20.6765 14.6667 21.0254 19.3194C20.8721 20.2721 20.0439 21 19.0452 21H18.9741C18.9741 21 18.9741 21 18.9741 21L5.0767 21C5.07671 21 5.0767 21 5.0767 21L5.00562 21C4.00691 21 3.1787 20.2721 3.02539 19.3193C3.37428 14.6667 7.27038 11 12.0254 11ZM5.0767 19H18.9741C18.4875 15.6077 15.5618 13 12.0254 13C8.48892 13 5.56331 15.6077 5.0767 19ZM19.0451 19.9769V20.0231C19.0452 20.0154 19.0452 20.0077 19.0452 20C19.0452 19.9923 19.0452 19.9846 19.0451 19.9769Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <p>No members</p>
                </div>
              </div>

              <div className="child:my-[5px]">
                <p className="text-[12px]">Due date</p>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <span className="rounded-[50%] p-[2px] ml-[20px] mr-[10px] bg-gray-200 ">
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
                        d="M6 4V5H4.995C3.892 5 3 5.893 3 6.994V19.006C3 20.106 3.893 21 4.995 21H19.005C20.108 21 21 20.107 21 19.006V6.994C21 5.895 20.107 5 19.005 5H18V4C18 3.448 17.552 3 17 3C16.448 3 16 3.448 16 4V5H8V4C8 3.448 7.552 3 7 3C6.448 3 6 3.448 6 4ZM5.25 9.571V17.718C5.25 18.273 5.694 18.714 6.243 18.714H17.758C18.3 18.714 18.75 18.268 18.75 17.718V9.571H5.25ZM9 13V10.999H7V13H9ZM17 10.999V13H15V10.999H17ZM11 13H13.001V10.999H11V13ZM7 17V15H9V17H7ZM11 17H13.001V15H11V17ZM17 15V17H15V15H17Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <p>No dates</p>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <span className="rounded-[50%] p-[2px] ml-[20px] mr-[10px] bg-orange-400 ">
                    <svg
                      width="16"
                      height="16"
                      role="presentation"
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L13.7929 15.2071C14.1834 15.5976 14.8166 15.5976 15.2071 15.2071C15.5976 14.8166 15.5976 14.1834 15.2071 13.7929L13 11.5858V6Z"
                        fill="white"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <p>Overdue</p>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <span className="rounded-[50%] p-[2px] ml-[20px] mr-[10px] bg-yellow-400 flex">
                    <svg
                      width="16"
                      height="16"
                      role="presentation"
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L13.7929 15.2071C14.1834 15.5976 14.8166 15.5976 15.2071 15.2071C15.5976 14.8166 15.5976 14.1834 15.2071 13.7929L13 11.5858V6Z"
                        fill="white"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <p>Due in the next day</p>
                </div>
              </div>
            </div>
          }
        >
          <div className="rounded-[3px] bg-[#4d4d4d] hover:bg-[#0079bf] hover:bg-opacity-70 flex items-center p-[12px] h-[32px]">
            <span className="float-left pr-[8px]">
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
                  d="M4.61799 6C3.87461 6 3.39111 6.78231 3.72356 7.44721L3.99996 8H20L20.2763 7.44721C20.6088 6.78231 20.1253 6 19.3819 6H4.61799ZM10.8618 17.7236C10.9465 17.893 11.1196 18 11.309 18H12.6909C12.8803 18 13.0535 17.893 13.1382 17.7236L14 16H9.99996L10.8618 17.7236ZM17 13H6.99996L5.99996 11H18L17 13Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span>Filter</span>
          </div>
        </Popover>
        <span className="border-solid border-l-[1px] border-[#4d4d4d]  float:left h-[16px] mt-2 mb-[12px] flex items-center"></span>
        <Popover
          visible={menuvisible}
          onVisibleChange={(event) => setMenuVisible(event)}
          trigger="click"
          title={
            <div className="flex max-w-[304px]">
              <p className="overflow-hidden w-full text-center whitespace-nowrap text-ellipsis px-[32px] py-[8px] text-[14px] font-normal">
                Menu
              </p>
              <button className="flex items-center" onClick={() => setMenuVisible(false)}>
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
        >
          <div className="rounded-[3px] bg-[#4d4d4d] hover:bg-[#0079bf] hover:bg-opacity-70 flex items-center p-[12px] h-[32px]">
            <span className="float-left pr-[8px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 65 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1667 36C21.3758 36 23.1667 34.2091 23.1667 32C23.1667 29.7909 21.3758 28 19.1667 28C16.9575 28 15.1667 29.7909 15.1667 32C15.1667 34.2091 16.9575 36 19.1667 36Z"
                  fill="white"
                />
                <path
                  d="M32.5 36C34.7091 36 36.5 34.2091 36.5 32C36.5 29.7909 34.7091 28 32.5 28C30.2909 28 28.5 29.7909 28.5 32C28.5 34.2091 30.2909 36 32.5 36Z"
                  fill="white"
                />
                <path
                  d="M45.8333 36C48.0425 36 49.8333 34.2091 49.8333 32C49.8333 29.7909 48.0425 28 45.8333 28C43.6242 28 41.8333 29.7909 41.8333 32C41.8333 34.2091 43.6242 36 45.8333 36Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>Show menu</span>
          </div>
        </Popover>
      </div>
    </>
  );
};

export default HeaderRight;
