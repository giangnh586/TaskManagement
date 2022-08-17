import SideBarIcon from './sidebar-icon';
import SideBarNav from './sidebar-nav';
import SideBarView from './sidebar-views';

const SideBar = () => {
  return (
    <section className="h-full inset-y-0  z-50 flex ">
      <div className="w-screen max-w-[260px] bg-[#676768]">
        <SideBarIcon />
        <SideBarNav />
        <SideBarView />
      </div>
    </section>
  );
};

export default SideBar;
