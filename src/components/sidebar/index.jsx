import Icon from "../../assets/icons/icon";
import Logo from "../../assets/icons/logo";
import BoardIcon from "../../assets/icons/board.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import Logout from "../../assets/icons/logout";
import { useNavigate, Link, NavLink } from "react-router-dom";
import "../../index.css";
import { useAuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const navItems = [
    {
      title: "Board",
      name: "Board",
      link: "/board",
      icon: BoardIcon,
    },
    {
      title: "Settings",
      name: "Settings",
      link: "/settings",
      icon: SettingsIcon,
    },
  ];
  const { logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.error(error.message);
        alert("Logout failed. Please try again.");
      }
    }
  };

  return (
    <nav className="flex flex-col justify-between gap-y-2 p-2 relative h-screen shadow-sm max-w-sm w-full">
      <div className="flex flex-col justify-between gap-y-2">
        {/* Nav header */}
        <div className="w-full p-2">
          <Link to={"/board"}>
            <Icon
              fill={"#232323"}
              style={"size-8 block w-full lg:hidden flex justify-center"}
            />

            <Logo
              txtFill={"#232323"}
              iconFill={"#232323"}
              style={"hidden max-h-[35px] lg:block"}
            />
          </Link>
        </div>
        <hr className="border-1 border-gray-300" />
        {navItems.map((item) => (
          <div key={item.name}>
            <NavLink
              title={item.title}
              to={item.link}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-primary-400" : "bg-none"
                } flex gap-x-2 items-center rounded-sm justify-center lg:justify-start transition hover:bg-primary-400 `
              }
            >
              <img src={item.icon} className="w-5 m-2" />
              <span className="text-base font-normal hidden lg:block">
                {item.name}
              </span>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Nav footer */}
      <div className=" justify-center lg:justify-start ">
        <div className="hidden p-2  text-base rounded border border-black/50 shadow-sm lg:block">
          <h2 className="font-semibold text-base mb-2">
            Subscribe to our newsletter
          </h2>
          <p className="mb-2 text-sm">
            Opt-in to receive updates and news about the sidebar.
          </p>

          <div className="relative flex overflow-hidden rounded-md border-2 transition mb-2 focus-within:border-primary-400">
            <input
              type="email"
              className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base  text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Enter Email"
            />
          </div>
          <button className="w-full rounded-sm bg-primary-400 px-4 py-2 ">
            Subscribe
          </button>
        </div>

        <hr className="mt-2 border-1 border-gray-300" />
        <button
          title="Logout"
          onClick={handleLogout}
          className="flex gap-x-2 items-center w-full rounded-sm justify-center lg:justify-start hover:bg-primary-400 "
        >
          <Logout stroke={"#050404"} style={"size-5 m-2"} />
          <span className=" text-base hidden lg:block">Log Out</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
