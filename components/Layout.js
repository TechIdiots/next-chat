import Nav from "./Nav";
import Sidebar from "./SideBar";
const Layout = ({children}) => {
  return (
    <div>
        {/* <Nav/> */}
      {children}
    </div>
  )
};

export default Layout;
