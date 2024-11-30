import Icon from "../../assets/icons/icon";
import Logo from "../../assets/icons/logo";
import Board from "../../assets/icons/board.svg";
import Profile from "../../assets/icons/profile.svg";
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
      icon: Board,
    },
    {
      title: "Profile",
      name: "Profile",
      link: "/profile",
      icon: Profile,
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
        <div className="w-full p-2 mb-0">
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
        <hr className="mb-2 border-1 border-gray-300" />
        {navItems.map((item) => (
          <div key={item.name}>
            <NavLink
              title={item.title}
              to={item.link}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-primary-400" : "bg-none"
                } flex gap-x-2 items-center rounded justify-center lg:justify-start hover:bg-primary-400 transition`
              }
            >
              <span>
                <img src={item.icon} className="w-5 m-2" />
              </span>
              <span className="text-base font-normal hidden lg:block">
                {item.name}
              </span>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Nav footer */}
      <div className=" justify-center lg:justify-start ">
        <div className="hidden p-4 text-base shadow rounded border border-black/50 shadow-sm lg:block">
          <h2 className="font-semibold text-base mb-2">
            Subscribe to our newsletter
          </h2>
          <p className="mb-2 text-sm">
            Opt-in to receive updates and news about the sidebar.
          </p>

          <input
            type="text"
            placeholder="Email"
            className="text-[#232323] text-base w-full px-2 py-1 mb-2 rounded border border-black/50"
          />
          <button className=" text-base w-full px-2 py-1 bg-primary-400 rounded hover:bg-primary-400">
            Subscribe
          </button>
        </div>

        <hr className="mt-2 border-1 border-gray-300" />
        <button
          title="Logout"
          onClick={handleLogout}
          className="w-full flex gap-x-2 p-2 mt-2 items-center justify-center rounded lg:justify-start hover:bg-primary-400 transition"
        >
          <Logout stroke={"#050404"} style={"size-5"} />
          <span className=" text-base hidden lg:block">Log Out</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
