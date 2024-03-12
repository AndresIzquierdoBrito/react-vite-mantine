import { Header } from "./Header.tsx";
import { UserButton } from "./UserButton.tsx";
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
          <Link to="/user" style={{ textDecoration: 'none'}} >
          <UserButton />
        </Link>
      </main>
      {/* <UserButton /> */}
    </>
  );
}

export default Layout;
