import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="bg-white p-4 shadow flex justify-between items-center">
      <div className="text-lg font-semibold">Dashboard</div>
      <div className="flex space-x-4">
        <button className="btn btn-outline">Profile</button>
        <button className="btn btn-primary">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
