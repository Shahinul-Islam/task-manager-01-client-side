// import React from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AiOutlineLogin, AiOutlineDashboard } from "react-icons/ai";
import { RiLuggageCartFill } from "react-icons/ri";
import { BiRegistered, BiReset, BiListOl } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsEmojiExpressionless } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import React, { useState } from "react";
import "../components/Navbar.css";
import "./Main.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import AuthProvider from "../contexts/AuthProvider";
const { Header, Sider, Content } = Layout;

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <AuthProvider>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <a href="#">Logo</a>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              navigate(key);
            }}
            items={[
              {
                key: "user",
                icon: (
                  <UserOutlined style={{ fontSize: "20px" }}></UserOutlined>
                ),
                label: "User",
                children: [
                  {
                    key: "login",
                    icon: <AiOutlineLogin style={{ fontSize: "20px" }} />,
                    label: "Login",
                  },
                  {
                    key: "register",
                    icon: <BiRegistered style={{ fontSize: "20px" }} />,
                    label: "Register",
                  },
                  {
                    key: "forget-password",
                    icon: (
                      <BsEmojiExpressionless style={{ fontSize: "20px" }} />
                    ),
                    label: "Forget Password",
                  },
                  {
                    key: "reset-password",
                    icon: <BiReset style={{ fontSize: "20px" }} />,
                    label: "Reset Password",
                  },
                ],
              },

              {
                key: "admin",
                icon: <AiOutlineDashboard style={{ fontSize: "20px" }} />,
                label: "Admin",
              },

              // {
              //   key: "customers",
              //   icon: <IoIosPeople style={{ fontSize: "20px" }} />,
              //   label: "Customers",
              // },
              {
                key: "task",
                icon: <BiListOl style={{ fontSize: "20px" }} />,
                label: "Tasks",
                children: [
                  {
                    key: "add-task",
                    icon: <BiListOl style={{ fontSize: "20px" }} />,
                    label: "Add Task",
                  },
                  {
                    key: "my-tasks",
                    icon: <BiListOl style={{ fontSize: "20px" }} />,
                    label: "My Tasks",
                  },
                  {
                    key: "completed-task",
                    icon: <BiListOl style={{ fontSize: "20px" }} />,
                    label: "Completed Task",
                  },
                ],
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Navbar></Navbar>
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </AuthProvider>
  );
};

export default Main;
