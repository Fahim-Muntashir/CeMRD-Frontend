import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from "../../../public/Images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <Navbar
      fluid
      rounded
      className="fixed xl:px-20 md:px-10 sm:px-2 px-4 w-full top-0 z-50 bg-white shadow-md"
    >
      <Navbar.Brand href="/">
        <img src={Logo} width={200} height={500} alt="Picture of the author" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <button onClick={handleLogOut}>Logout</button>
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <Link
            to="login"
            className="bg-primary text-white font-bold text-2xl px-20 py-4"
          >
            Login
          </Link>
        )}

        <Navbar.Toggle />
      </div>{" "}
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="about">About</Navbar.Link>
        <Navbar.Link href="events">Events</Navbar.Link>
        <Navbar.Link href="login">login</Navbar.Link>
        <Navbar.Link href="research">Research</Navbar.Link>
        <Navbar.Link href="team">Team</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
