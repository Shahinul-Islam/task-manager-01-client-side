// import React from "react";
// import { Dropdown, Space, message } from "antd";
// import { DownOutlined } from "@ant-design/icons";
// import { IoMdNotifications } from "react-icons/io";
// import { RxAvatar } from "react-icons/rx";
import Search from "antd/es/transfer/search";
import React, { useContext } from "react";
import "./Navbar.css";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const onChange = (value) => console.log(value.target.value);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="md:flex justify-between items-center mb-4 shadow-md p-2">
      <div>
        <Search
          placeholder="input search text"
          allowClear
          onChange={onChange}
          style={{
            width: "200px",
          }}
        />
      </div>
      <div className="flex justify-evenly gap-4 mt-4 md:mt-0 nav-end items-center">
        <div className="hover:bg-gray-500 p-1 rounded cursor-pointer">
          <select name="languages" id="languages" className="bg-[#f5f5f5]">
            <option value="language" className="" disabled selected>
              Language
            </option>
            <option value="german">German</option>
            <option value="french">French</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
        {/* <div className="hover:bg-gray-500 p-1 rounded cursor-pointer relative">
          <IoMdNotifications className="h-6 w-6 hover:text-white"></IoMdNotifications>
          <div className="absolute notification-count">
            <p className="font-bold">09</p>
          </div>
        </div> */}
        <div className="hover:bg-gray-500 p-1 rounded cursor-pointer md:flex items-center justify-center gap-3">
          {/* <RxAvatar className="h-6 w-6 hover:text-white"></RxAvatar> */}
          {/* <img
            className="h-9 w-9 rounded hover:text-white"
            // src={user && user.photoURL}
            alt="user-pic"
          /> */}

          <div className="hover:text-white">
            {user && user ? (
              <button onClick={handleLogOut}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
            {/* <p>Linkon</p> */}
            {/* {user.email && user.email ? <>{user.email}</> : <></>} */}
            {/* <p>{user.email}</p> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
