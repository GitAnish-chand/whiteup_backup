// import { NavLink, Outlet } from "react-router-dom";

// const BusinessLayout = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Navbar */}
//       <nav className="
//         fixed top-0 left-0 w-full z-40
//         glass backdrop-blur-xl
//         border-b border-white/10
//       ">
//         <div className="container flex justify-between items-center py-4 px-6">
//           <span className="font-display text-xl gradient-text">
//             <NavLink to="/">
//               WhiteUp
//             </NavLink>
//           </span>

//           <div className="flex gap-6 text-white">
//             <NavLink to="/">
//               WHITE UP
//             </NavLink>
//             <NavLink to="/paper">
//               paper business
//             </NavLink>
//             <NavLink to="/soda">
//               Soda business
//             </NavLink>
//           </div>
//         </div>
//       </nav>

//       {/* Page content */}
//       <div className="pt-24">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default BusinessLayout;

// ---------------------------------------------------------------------------------------------

// import { NavLink, Outlet, useLocation } from "react-router-dom";

// const BusinessLayout = () => {
//   const { pathname } = useLocation();

//   const isWhiteUp = pathname === "/";
//   const isPaper = pathname.startsWith("/paper");
//   const isSoda = pathname.startsWith("/soda");

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Navbar */}
//       <nav
//         className="
//           fixed top-0 left-0 w-full z-40
//           glass backdrop-blur-xl
//           border-b border-white/10
//         "
//       >
//         <div className="container flex justify-between items-center py-4 px-6">
//           {/* Brand */}
//           <span className="font-display text-xl gradient-text">
//             <NavLink to="/">WhiteUp</NavLink>
//           </span>

//           {/* Business Links */}
//           <div className="flex gap-6 text-white">
//             {/* Show WhiteUp link ONLY if not on WhiteUp */}
//             {!isWhiteUp && (
//               <NavLink to="/">
//                 WHITE UP
//               </NavLink>
//             )}

//             {/* Show Paper link ONLY if not on Paper */}
//             {!isPaper && (
//               <NavLink to="/paper">
//                 Paper Business
//               </NavLink>
//             )}

//             {/* Show Soda link ONLY if not on Soda */}
//             {!isSoda && (
//               <NavLink to="/soda">
//                 Soda Business
//               </NavLink>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Page content */}
//       <div className="pt-24">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default BusinessLayout;



import { NavLink, Outlet, useLocation } from "react-router-dom";

const BusinessLayout = () => {
  const { pathname } = useLocation();

  const isWhiteUp = pathname === "/";
  const isPaper = pathname.startsWith("/paper");
  const isSoda = pathname.startsWith("/soda");

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav
        className="
          fixed top-0 left-0 w-full z-40
          glass backdrop-blur-xl
          border-b border-white/10
        "
      >
        <div className="container flex items-center justify-between sm:justify-between py-4 px-6">

          {/* Brand */}
          {/* <span className="font-display text-xl gradient-text">
            <NavLink to="/">WhiteUp</NavLink>
          </span> */}

          <span className="font-display text-xl">
            <NavLink to="/" className="flex">
              <span className="gradient-text-water">white</span>
              <span className="text-foreground text-glow">up</span>
            </NavLink>
          </span>

          {/* Business Links */}
          {/* <div className="flex gap-6 text-white"> */}
          <div className="flex gap-4 sm:gap-6 text-white ml-6 sm:ml-0">


            {/* About Us - ALWAYS visible */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-neon-cyan font-semibold" : ""
              }
            >
              About Us
            </NavLink>

            {/* Show WhiteUp link ONLY if not on WhiteUp */}
            {!isWhiteUp && (
              <NavLink to="/">
                WHITE UP
              </NavLink>
            )}

            {/* Show Paper link ONLY if not on Paper */}
            {!isPaper && (
              <NavLink to="/paper">
                Paper Business
              </NavLink>
            )}

            {/* Show Soda link ONLY if not on Soda */}
            {!isSoda && (
              <NavLink to="/soda">
                Soda Business
              </NavLink>
            )}
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
