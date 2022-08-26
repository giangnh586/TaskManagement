import { Popover } from "antd";
import { useState } from "react";

const HeaderLeft = () => {
  const [text, setText] = useState("NCS");
  const [input, setInput] = useState(false);
  const [star, setStar] = useState(0);

  const starCol = ["white", "yellow"];

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
  return (
    <>
      <div className="flex flex-wrap child:max-h-[36px] px-[12px] py-[8px] child:ml-[4px] ">
        <Popover
          className="rounded-[3px]"
          placement="bottomLeft"
          trigger="click"
          title={
            <div className="w-full py-2 flex">
              <span className="w-full items-center text-center font-light">Switch view</span>
              <button
                className="flex items-center"
              >
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
            <div className="w-[384px]  ">
              <div>
                <h1 className="text-[20px] font-semibold text-center">See Your Work in new ways</h1>
                <p className="text-center">View key timelines, assignments, data, and more directly from your Trello board with Trello Premium.</p>
              </div>
              <div></div>
            </div>
          }
        >
          <div>
            <button className="flex items-center px-[5px] py-[6px] bg-[#49494b] bg-opacity-[0.7] hover:bg-white hover:bg-opacity-70 rounded-[3px]">
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
                  d="M2 7V15C2 16.1046 2.89543 17 4 17H6C7.10457 17 8 16.1046 8 15V7C8 5.89543 7.10457 5 6 5H4C2.89543 5 2 5.89543 2 7ZM4 7V15H6V7L4 7Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 7V13C9 14.1046 9.89543 15 11 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H11C9.89543 5 9 5.89543 9 7ZM11 7V13H13V7L11 7Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
          className="text-ellipsis whitespace-nowrap h-[32px] overflow-hidden rounded-[3px] hover:bg-white hover:bg-opacity-70 "
          onClick={onInput}
        >
          {input && (
            <h1 className="text-[18px] font-bold px-[18px] text-white h-[32px] items-center flex">
              {text}
            </h1>
          )}
          {!input && (
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
          className="rounded-[3px] bg-[#4d4d4d] hover:bg-white hover:bg-opacity-70 flex justify-center h-[32px] w-[32px]"
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
        <div className="rounded-[3px] bg-[#4d4d4d] hover:bg-white hover:bg-opacity-70 h-[32px]">
          <span className=" text-white overflow-hidden text-ellipsis whitespace-nowrap h-full flex items-center mx-[12px]">
            không gian làm việc của hoanggiangd13dt3
          </span>
        </div>
        <span className="border-solid border-l-[1px] border-[#4d4d4d]  float:left h-[16px] mt-2 mb-[12px] flex items-center"></span>

        <div className="rounded-[3px] bg-[#4d4d4d] hover:bg-white hover:bg-opacity-70 flex items-center p-[12px] h-[32px]">
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

        <span className="border-solid border-l-[1px] border-[#4d4d4d]  float:left h-[16px] mt-2 mb-[12px] flex items-center"></span>

        <div className="flex flex-nowrap h-[32px] items-center">
          <div className="flex mr-[4px]">
            <a className="z-10">
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
            <a className="ml-[-2px]">
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
          <button className=" flex justify-center h-[32px] hover:bg-white hover:bg-opacity-70 items-center rounded-[3px] px-2 bg-[#4d4d4d]">
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
    </>
  );
};

export default HeaderLeft;
