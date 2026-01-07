import { NavLink, Outlet } from "react-router-dom";

const BusinessLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="
        fixed top-0 left-0 w-full z-40
        glass backdrop-blur-xl
        border-b border-white/10
      ">
        <div className="container flex justify-between items-center py-4 px-6">
          <span className="font-display text-xl gradient-text">
            <NavLink to="/">
              WhiteUp
            </NavLink>
          </span>

          <div className="flex gap-6 text-white">
            <NavLink to="/">
              WHITE UP
            </NavLink>
            <NavLink to="/other-business/brand">
              paper business
            </NavLink>
            <NavLink to="/other-business/3d">
              Soda business
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <div className="pt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default BusinessLayout;
