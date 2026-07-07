import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  return (
    <nav className="bg=[#161B22} border-b-[#30363D]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center">
        <GitHubIcon sx={{ fontSize: 35 }} />
        <h2 className="text-2xl font-bold ml-3 tracking-wide">
          GitHub Profile Finder
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;
