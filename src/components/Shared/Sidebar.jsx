import { NavLink } from "react-router-dom";
import { GrLogout, GrOverview } from "react-icons/gr";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-gray-400 min-h-screen border-r-2 border-slate-700 py-16 px-8">
      <h2 className="text-4xl mb-10 text-bold text-gray-600 text-center">
        Gadget Shop
      </h2>
      <ul className="flex flex-col gap-4">
        <li className="text-lg font-semibold btn">
          <NavLink to="/" className="flex items-center gap-2">
            <FaHome size={24} />
            <p>Home</p>
          </NavLink>
        </li>

        <li className="text-lg font-semibold btn">
          <NavLink to="/dashboard/overview" className="flex items-center gap-2">
            <GrOverview size={24} />
            <p>Overview</p>
          </NavLink>
        </li>

        <li className="text-lg font-semibold btn">
          <NavLink to="/dashboard/overview" className="flex items-center gap-2">
            <GrOverview size={24} />
            <p>Overview</p>
          </NavLink>
        </li>

        <li className="text-lg font-semibold btn">
          <NavLink to="/dashboard/overview" className="flex items-center gap-2">
            <GrOverview size={24} />
            <p>All Products</p>
          </NavLink>
        </li>

        <li className="text-lg font-semibold btn">
          <button type="submit" className="flex items-center gap-2">
            <GrLogout size={24} />
            <p>Log Out</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
