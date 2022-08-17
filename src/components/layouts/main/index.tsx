import SideBar from './sidebar';

const MainBody = () => {
  return (
    <div className="h-[calc(100%-44px)] relative overflow-y-hidden flex">
      <SideBar />
    </div>
  );
};

export default MainBody;
