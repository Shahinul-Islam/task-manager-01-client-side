import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div>
      <h2>This is dashboard. Coming soon...</h2>
    </div>
  );
};

export default Dashboard;
