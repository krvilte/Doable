import MatrixIcon from "../../assets/icons/board.svg";
import TaskIcon from "../../assets/icons/tasks.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import LogOut from "../../assets/icons/logout.svg";
import Logo from "../../assets/icons/logo.svg";
import Icon from "../../assets/icons/icon.svg";
import { useNavigate, Link, NavLink } from "react-router-dom";
import "../../index.css";
import { useAuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const navItems = [
    {
      name: "Board",
      link: "/board",
      icon: MatrixIcon,
    },
    {
      name: "Task",
      link: "/tasks",
      icon: TaskIcon,
    },
    {
      name: "Profile",
      link: "/profile",
      icon: ProfileIcon,
    },
    {
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
    <nav className="flex flex-col gap-y-2 p-2 relative h-screen shadow max-w-sm w-full">
      <Link to={"/board"} className="flex justify-start my-5 mx-2">
        <img
          src={Logo}
          alt="Doable"
          className="hidden lg:block max-w-[100px]"
        />

        <img src={Icon} className="w-7 lg:hidden" />
      </Link>
      {navItems.map((item) => (
        <div key={item.name}>
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              `${
                isActive ? "text-white bg-rose-600" : "text-white bg-none"
              } flex gap-x-2 items-center rounded justify-center lg:justify-start hover:bg-rose-600 transition`
            }
          >
            <span>
              <img src={item.icon} className="w-6 m-2" />
            </span>
            <span className="hidden lg:block">{item.name}</span>
          </NavLink>
        </div>
      ))}

      <button
        onClick={handleLogout}
        className="flex gap-x-2 text-white items-center rounded justify-center lg:justify-start hover:bg-rose-600 transition"
      >
        <span>
          <img src={LogOut} alt="Logout" className="w-6 m-2" />
        </span>
        <span className="hidden lg:block">Log Out</span>
      </button>
    </nav>
  );
};

export default Sidebar;
