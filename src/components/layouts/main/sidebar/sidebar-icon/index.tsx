const SideBarIcon = () => {
  return (
    <>
      <div className="">
        <div className="flex px-[12px] py-[14px] min-h-[40px] border-b border-[#DFE1E6] items-center">
          {/* K icon */}
          <div className="w-[36px] h-[36px] flex items-center">
            <div className="bg-gradient-to-r from-[#403294] to-[#0747a6] text-[20px] w-full h-full text-white flex items-center justify-center">
              K
            </div>
          </div>
          {/* text after icon */}
          <div className="ml-[8px] mr-[4px] flex-1">
            <span>
              <p className="text-[14px] text-white inline leading-[20px] ">
                không gian làm việc của hoanggiangd13dt3
              </p>
            </span>
          </div>
          {/* arrow icon */}
          <div className="">
            <button className="bg-[#676768] hover:bg-[#808081] flex items-center m-0 p-[2px]">
              <img
                className="brightness-0 invert"
                src="https://a.trellocdn.com/prgb/dist/images/workspace-navigation/chevron-left.58243262833f693f6101.svg"
                alt="arrow icon"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarIcon;
